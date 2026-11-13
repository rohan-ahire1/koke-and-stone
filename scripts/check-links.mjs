// Checks that every local link and asset path in the site's HTML and CSS
// points at a file that exists, and that in-page #fragments match an id.
import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { join, dirname, resolve, relative, extname } from "node:path";

const root = resolve(process.argv[2] ?? ".");
const skipDirs = new Set([".git", "node_modules", "tools", "incoming", ".impeccable"]);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if ([".html", ".css"].includes(extname(p))) out.push(p);
  }
  return out;
}

const isExternal = (u) => /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(u);
const idsCache = new Map();
function idsOf(file) {
  if (!idsCache.has(file)) {
    const html = readFileSync(file, "utf8");
    idsCache.set(file, new Set([...html.matchAll(/\sid\s*=\s*["']([^"']+)["']/gi)].map((m) => m[1])));
  }
  return idsCache.get(file);
}

function refsIn(file) {
  const text = readFileSync(file, "utf8");
  const refs = [];
  if (file.endsWith(".html")) {
    for (const m of text.matchAll(/\s(?:href|src|poster|data-src)\s*=\s*["']([^"']*)["']/gi)) refs.push(m[1]);
    for (const m of text.matchAll(/\s(?:srcset|imagesrcset)\s*=\s*["']([^"']*)["']/gi))
      for (const part of m[1].split(",")) refs.push(part.trim().split(/\s+/)[0]);
    for (const m of text.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)) refs.push(...cssUrls(m[1]));
    for (const m of text.matchAll(/\sstyle\s*=\s*"([^"]*)"/gi)) refs.push(...cssUrls(m[1]));
  } else {
    refs.push(...cssUrls(text));
  }
  return refs.filter(Boolean);
}

function cssUrls(css) {
  return [...css.matchAll(/url\(\s*(["']?)([^"')]+)\1\s*\)/gi)].map((m) => m[2]);
}

const errors = [];
const files = walk(root);
for (const file of files) {
  for (const ref of refsIn(file)) {
    if (isExternal(ref)) continue;
    const [pathPart, fragment] = ref.split("#");
    const cleanPath = decodeURIComponent(pathPart.split("?")[0]);
    let target = cleanPath === "" ? file
      : cleanPath.startsWith("/") ? join(root, cleanPath) : resolve(dirname(file), cleanPath);
    if (existsSync(target) && statSync(target).isDirectory()) target = join(target, "index.html");
    const where = relative(root, file);
    if (!existsSync(target)) {
      errors.push(`${where}: missing "${ref}"`);
      continue;
    }
    if (fragment && target.endsWith(".html") && !idsOf(target).has(fragment)) {
      errors.push(`${where}: no element with id "${fragment}" for "${ref}"`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} broken local reference(s).`);
  process.exit(1);
}
console.log(`Checked ${files.length} file(s): all local links and assets resolve.`);
