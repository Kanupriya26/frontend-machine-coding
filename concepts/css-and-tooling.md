## Global CSS: why class names can clash
Plain CSS class names apply to the **whole app**, not just one component.
If two stylesheets define the same class (e.g. `.item`), both rules hit every element
with that class, and the browser picks a winner by load order and specificity.
Result: an element gets unexpected styles.

## Fix 1: prefix class names (e.g. `accordion-item`)
**Is a prefixed class technically different from a plain one?** No.
A prefix is just part of the name; nothing in the browser enforces it.
It's a **naming convention** that avoids conflicts, relying on discipline.

## BEM (Block, Element, Modifier): a formal naming convention
- **Block:** the component → `accordion`
- **Element:** a part of it → `accordion__item` (two underscores)
- **Modifier:** a variation or state → `accordion__item--open` (two dashes)

## Fix 2: CSS Modules (makes conflicts impossible)
CSS Modules is a **specification** / **a set of rules**, not a browser feature:
classes in a `.module.css` file are local to that file. Browser have no idea what a CSS module is.

**How to tell which one I'm using:**
1. File name: `Accordion.css` → plain global CSS; `Accordion.module.css` → CSS Module
2. Import: `import "./Accordion.css"` (global) vs `import styles from "./Accordion.module.css"`,
   then `className={styles.item}`

**Who makes the names unique?** The **bundler** (Vite), not the browser.
At build time Vite rewrites `.item` into a unique name (like `_item_x7f3a`)
and gives JS a `styles` object mapping `item` → `_item_x7f3a`.

- Rendering pipeline; paint → raster (Skia) → composite (Viz) → GPU
- display: none vs visibility: hidden vs opacity: 0 (which stage)
- transform/opacity for animation
- DOM tree vs box tree; anonymous flex items
- Inherited vs non-inherited CSS properties
- Script tags only execute JS; type="module"; module graph; Vite + Oxc
- HTML ids: unique per page, no spaces

## currentColor keyword in CSS:
  *It represents the computed value of an element's **color property***
  -reads the element's own color property: be it inherited or explicitly assigned.
   ( a value declared on the element itself always beats the inherited one)

## `<label>`: 
 *An HTML element that connects descriptive text to a input field(`<input>`)*
- **Links to one input** through *htmlFor*(on the label) = *id*(on the input).
Or wrap the input inside `<label>`, no id separately needed.
- **Gives the input its accessible name**: all the text inside the label, joined.
Images and SVGs add nothing unless they have text alternatives.
- **Clicking the label acts like clicking the input**: it checks the radio and moves focus to it.
(Build-03: That's why clicking a star selects the rating)
- **Content Rules**: only inline content inside it, so span, not p


## Pseudo classes *:focus* and *:focus-visible*
- `:focus` matches whenever the element has focus, however it got there(mouse, keyboard or code)
- `:focus-visible` matches when the browser decides the user *needs to see* where focus is.In practice, that's mostly *keyboard focus*(Tab, arrows).
One exception: clicking into a text input also matches :focus-visible, because the user is about to type and needs to see where

## Combinators ~ and +
- Both select a sibling that comes after an element, with the same parent. The difference is how far after:
**A + B (adjacent sibling)**: the B immediately after A, and only that one.
**A ~ B (general sibling)**: every B that comes anywhere after A.
Neither one can look **backwards** or **up** to a parent. + and ~ can't look backwards or up.
Modern CSS has :has(), which can select a parent based on its children, 
e.g. label:has(input:checked).