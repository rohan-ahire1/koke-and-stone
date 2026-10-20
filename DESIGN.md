---
name: Koke & Stone
description: A moss-garden studio's site built as a tokonoma alcove, with pale plaster, weathered pine, a dark lacquered ledge and sumi ink.
colors:
  iris: "#2e4aa3"
  iris-deep: "#233a85"
  iris-light: "#9aacec"
  on-iris: "#ffffff"
  plaster: "#e6e0d4"
  plaster-deep: "#d6cdbd"
  ash: "#b3a993"
  ink: "#1d1b18"
  ink-2: "#4d473e"
  pine: "#6e665b"
  rule: "rgba(29, 27, 24, 0.16)"
  lacquer: "#221a14"
  interior: "#2a231d"
  frame: "#120e0b"
  on-dark: "#ece5d7"
  on-dark-2: "#b9ae9c"
  rule-dark: "rgba(236, 229, 215, 0.16)"
typography:
  display:
    fontFamily: "Kaisei Opti, Hiragino Mincho ProN, Yu Mincho, Georgia, serif"
    fontSize: "clamp(44px, 5.2vw, 88px)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Kaisei Opti, Hiragino Mincho ProN, Yu Mincho, Georgia, serif"
    fontSize: "clamp(34px, 3.8vw, 60px)"
    fontWeight: 400
    lineHeight: 1.1
  title:
    fontFamily: "Kaisei Opti, Hiragino Mincho ProN, Yu Mincho, Georgia, serif"
    fontSize: "clamp(26px, 2.4vw, 34px)"
    fontWeight: 400
    lineHeight: 1.15
  kanji:
    fontFamily: "Kaisei Opti, Hiragino Mincho ProN, Yu Mincho, Georgia, serif"
    fontSize: "clamp(56px, 5vw, 80px)"
    fontWeight: 400
    lineHeight: 0.95
  body-lead:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    letterSpacing: "0.16em"
  button:
    fontFamily: "Albert Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.14em"
rounded:
  none: "0"
  pill: "999px"
spacing:
  grid-gap: "24px"
  gutter: "clamp(20px, 5vw, 88px)"
  section: "clamp(96px, 12vw, 184px)"
  rail: "236px"
  ledge: "128px"
components:
  button-primary:
    backgroundColor: "{colors.iris}"
    textColor: "{colors.on-iris}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.iris-deep}"
    textColor: "{colors.on-iris}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "52px"
  concept-pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
  concept-tag:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark-2}"
    rounded: "{rounded.none}"
    padding: "5px 12px"
  season-button:
    backgroundColor: "transparent"
    textColor: "{colors.on-dark-2}"
    padding: "10px 10px 12px"
  season-button-active:
    textColor: "{colors.iris-light}"
  ledge:
    backgroundColor: "{colors.lacquer}"
    textColor: "{colors.on-dark}"
    height: "{spacing.ledge}"
  window:
    backgroundColor: "{colors.frame}"
    rounded: "{rounded.none}"
    padding: "clamp(12px, 1.4vw, 20px)"
---

# Design System: Koke & Stone

## Overview

**Creative North Star: "The Tokonoma Alcove"**

Every screen is an alcove: a pale plaster wall, one thing placed off-centre on a dark lacquered ledge, and a lot of empty plaster around it. The emptiness is the material. Type is sumi ink on plaster, headlines are a light, high-contrast Japanese serif, and the only colour beyond the plaster-wood-ink range is one iris blue for actions and the lit season. Green appears only in the moss inside the photographs.

The page moves from light to dark the way a room does: plaster wall and rail, a deeper plaster shelf room for the work, plaster again for the hanging scroll, a dark timber interior where gardens are seen through framed windows, then the same alcove at dusk with the ledge as footer. Section forms come from the room: the ledge, staggered chigaidana shelves, a kakejiku (hanging scroll) and gakubuchi window frames. Kanji are set as large ink marks that name each element and step, not as decoration.

Motion is slow and belongs to the room. The season row cross-fades the alcove photo through four seasons. The scroll unrolls as the process is read. Framed views lean slightly toward the pointer. Every one of these switches off under reduced motion.

**Key Characteristics:**
- Pale plaster ground, sumi ink text, dark lacquer and timber surfaces; one iris blue accent
- Light Kaisei Opti serif headlines with Albert Sans for body and tracked uppercase labels
- Square corners everywhere; the concept-disclosure pill is the single rounded control
- Asymmetric 12-column placement with generous empty space and staggered vertical offsets
- Depth from real objects (shelf shadows, window frames, the scroll), never from floating cards

## Colors

A warm, low-chroma room of plaster, pine and lacquer, lit by a single iris blue.

### Primary
- **Iris** (#2e4aa3): the primary button fill, the "Book a visit" nav link and its dot, focus rings, text selection and the caret. Its deep variant (#233a85) is hover only.
- **Iris Light** (#9aacec): the same accent on dark surfaces: the lit season kanji and its underline, footer link underlines and hover, focus rings inside the gardens room and on the ledge.

### Neutral
- **Plaster** (#e6e0d4): the page ground, the rail, the 404.
- **Deep Plaster** (#d6cdbd): the shelf room behind "What we make", entered under a soft inset shadow.
- **Ash** (#b3a993): unlit step kanji in the process before the reader reaches them.
- **Sumi Ink** (#1d1b18): headlines, body emphasis, the quiet button outline, the nav dot.
- **Ink Two** (#4d473e): secondary copy, nav links at rest, rail labels.
- **Weathered Pine** (#6e665b): element kanji, link underlines, the scrollbar thumb.
- **Rule** (16% ink): every hairline divider on plaster.
- **Lacquer** (#221a14): the alcove ledge and the footer ledge.
- **Interior** (#2a231d): the gardens room.
- **Frame** (#120e0b): the gakubuchi window frames.
- **On Dark** (#ece5d7) / **On Dark Two** (#b9ae9c) / **Rule Dark** (16% on-dark): text and hairlines on lacquer and interior.

### Named Rules
**The Moss Is The Only Green Rule.** No green token exists. Green enters the page only through the moss in photographs.

**The One Iris Rule.** Iris marks what you can act on and which season is lit. It is never a background block, a decorative fill or a heading colour.

## Typography

**Display Font:** Kaisei Opti (with Hiragino Mincho ProN, Yu Mincho, Georgia)
**Body Font:** Albert Sans (with Helvetica Neue, Arial)

**Character:** a light Japanese mincho-style serif with sharp contrast for everything spoken, against a plain, even sans for reading and for small tracked labels. Kaisei Opti ships self-hosted at 400 for Latin plus a 13-glyph kanji subset; Albert Sans ships as one variable file (400 to 600).

### Hierarchy
- **Display** (400, clamp(44px, 5.2vw, 88px), 1.04, tight tracking): the hero headline; the dusk invitation and the 404 headline use the same voice one step down.
- **Headline** (400, clamp(34px, 3.8vw, 60px), 1.1): section headings.
- **Title** (400, about 24 to 36px, 1.15 to 1.2): shelf, step and garden titles, the rail's current season.
- **Kanji** (400, 56 to 104px, line-height near 0.9): one ink mark per element, step and the 404; the wordmark 苔 at 44px; the vertical 苔石水 column in the hero.
- **Body Lead** (400, 18px, 1.6): the offer and section intros, held to 34 to 46ch.
- **Body** (400, 17px, 1.65; 16px under 560px): running copy, held to about 40ch.
- **Label** (600, 11 to 12px, 0.16em, uppercase): element names, rail label, season names, concept tags. Buttons use the same voice at 13px and 0.14em.

### Named Rules
**The Light Serif Rule.** Serif headings stay at weight 400. Emphasis comes from size and space, never from bold.

**The Kanji As Ink Rule.** Kanji are large, aria-hidden ink marks paired with an English label or heading that carries the meaning. They never stand in for an icon and never carry meaning alone.

## Layout

A fixed left rail (236px) holds the wordmark, nav, the live seasonal note (one of the 24 sekki) and the concept pill; content sits to its right. Sections use a 12-column grid with 24px gaps and a fluid gutter (clamp(20px, 5vw, 88px)), with vertical padding of clamp(96px, 12vw, 184px). Headings take the left five or six columns and their intro takes the right four or five, so every section opens as an asymmetric pair.

Placement is staggered rather than aligned: the four elements step down the grid at different offsets, the two-column shelves drop every second shelf by 168px, and the three gardens run one wide window followed by a left and a lower right window. The alcove and dusk sections are full viewport height with a 128px ledge across the bottom.

Below 1024px the rail becomes a sticky top bar with a Menu button, grids collapse to one column (shelves stay two-up until 560px), the alcove text moves above a 5:4 photo, the scroll stops being sticky and does not unroll, and side padding respects safe-area insets. A 1279px step only re-aims photo crops.

**The Empty Plaster Rule.** Alcove photos keep their left half as open plaster wall, and the headline and offer sit on that wall; never fill it with secondary content, badges or imagery.

## Elevation & Depth

Depth is physical. Surfaces sit flat; objects that would cast shadows in a real room do: shelf photos, the hanging scroll and its rod, the window frames. Room changes are marked by tone (plaster to deep plaster to interior) and by one soft inset shadow where the shelf room begins. Ledges carry a 1px top highlight like lacquer catching light.

### Shadow Vocabulary
- **Shelf object** (`box-shadow: 0 22px 40px -24px rgba(42, 30, 20, 0.5)`): shelf photos.
- **Hung scroll** (`box-shadow: 0 30px 50px -26px rgba(42, 30, 20, 0.55)`): the scroll paper.
- **Window** (`box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.7), inset 0 0 0 1px rgba(255, 236, 214, 0.06)`): framed garden views on the dark interior.
- **Room entry** (`box-shadow: inset 0 28px 44px -28px rgba(42, 30, 20, 0.28)`): top edge of the deep plaster shelf room.
- **Ledge highlight** (`box-shadow: inset 0 1px 0 rgba(255, 236, 214, 0.09)`): top edge of every lacquer ledge.

### Named Rules
**The Real Objects Rule.** Only things that would cast a shadow in the room get one, always soft, warm and falling downward. Text blocks, buttons and labels never float.

## Shapes

Corners are square: buttons, windows, tags, photos and the ledge. Round forms appear only where the object is round: the concept pill (999px), the 6px nav dot and the rounded ends of the scroll's cap and rod. Dividers are 1px hairlines. Photos are cropped square on the shelves and 3:2 in windows.

## Components

### Buttons
- **Shape:** square corners (0), 52px tall, 26px side padding, a small drawn arrow trailing the label.
- **Primary:** iris fill, white label in the uppercase button voice. The email variant drops the uppercase for 15px sentence case so the address reads.
- **Hover / Focus:** fill deepens to iris deep and the arrow shifts 4px right; 2px iris focus ring at 3px offset.
- **Quiet:** transparent with a 1px ink outline and ink label; hover adds a 7% ink wash.

### Text link
Medium-weight text with a 1px pine underline at 7px offset; on hover both text and underline turn iris.

### Chips
- **Concept pill:** 1px rule outline, fully rounded, 12px ink-two text; hover darkens to ink. Sits at the foot of the rail, and above the headline on phones.
- **Concept tag:** square, 1px dark rule outline, the label voice in on-dark-two. Every garden carries one.

### Navigation
The desktop rail lists links in ink-two at 15px; the current section turns ink and gains a 6px ink dot that scales in. "Book a visit" sits apart in iris with an iris dot. Under 1024px the rail is a top bar with an outlined Menu button that opens the nav and seasonal note, and Escape closes it.

### Season row
Four buttons on the ledge, each a kanji over a tracked season name in on-dark-two. The pressed season turns its kanji iris light with a 2px iris-light underline, and the alcove photo cross-fades (1.4s, with a brief blur) to the same arrangement in that season. A polite live note beside it says what the studio does in that season.

### Hanging scroll
A sticky kakejiku beside the four process steps: dark cap, ink-painted plan on dark mount, and a rod that descends as the page scrolls, uncovering the plan through a clip. Step kanji move from ash to ink as each step is reached. Static and fully open on narrow screens and under reduced motion.

### Framed window
A gakubuchi frame (frame fill, 12 to 20px padding, square) holding a 3:2 garden photo slightly overscaled, which leans up to about 2% toward the pointer on fine-pointer devices.

## Do's and Don'ts

### Do:
- **Do** keep iris to actions, focus, selection and the lit season; use iris light for the same jobs on lacquer and interior.
- **Do** set every serif heading at 400 and let size and empty plaster carry weight.
- **Do** pair every kanji mark with an English label or heading, and mark the kanji aria-hidden.
- **Do** give shadows only to objects in the room (shelf photos, the scroll, window frames), soft and warm.
- **Do** keep corners square; the concept pill is the one rounded control.
- **Do** keep the fiction visible: concept pill, a concept tag on every garden, and the footer credit.
- **Do** switch off the cross-fade blur, the scroll unroll and the window lean under reduced motion.

### Don't:
- **Don't** add any green surface, text or accent; green belongs to the moss in photographs.
- **Don't** introduce a second accent colour or use iris as a section background.
- **Don't** set a headline over the arrangement or a busy photo; alcove photos are composed with their left half as empty plaster wall, and the headline sits there.
- **Don't** lay out work as a repeating row of equal thumbnail, title and text; use staggered shelves or framed windows.
- **Don't** round buttons, windows or photos.
