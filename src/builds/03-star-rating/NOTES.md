# Build 03: Star Rating 

# What I built?
A Rating Widget 
- which shows the meaning of the rating("Far from great"..."Exceptional") under the stars; 
  nothing is filled or shown until a star is hovered or chosen.
- with customizable star color(green by default).
A mouse user gets to select and hover over the stars for preview
A keyboard user gets to select stars using one Tab stop and arrow keys(←, →)
A screen reader user 
- gets an idea of what it is using the label "RATINGS"(announced once the focus enters the radio group)
- gets what it means("Good", "Great")
- gets to know whether it is chosen or not(checked, not checked).
- to locate the position of the star(3 of 5, 4 of 5).

# Design Decisions

## Radio group, not five buttons
- **a rating is one choice out of five**, and a radio group means choosing one un-chooses the others.
Why not button?
- A button says **nothing about being part of a set or selected** 
- 5 Tab stops to cover entire widget for Tab as 5 buttons are separate focusable elements

Why a radio group?
- it announces(when focused) "checked", "4 of 5" by default.
- Once focus is inside the group, One Tab stop for the whole group
- ←, → move and selects the previous/next radio button

## Checked ≠ Filled
 **Checked** - which star the user **chose**. Exactly one, or none.
 **Filled** - how the star is **drawn**, based on the rating currently on display.
Two stored states(chosen, hovered); filled is derived from whichever is active, so filled≠checked.

## Star knows almost nothing. What is its job?
- draw one star, filled or empty as told
- let the parent know when chosen
- **being one accessible choice**
A child only receives what it needs to do its own job.

## visually hidden, not hidden. Why not display: none, visibility: hidden or opacity:0?
- **out of sight, still in accessibility tree**
- display: none --> hidden, so removed from accessibility tree(no box in layout, no space taken by the element)
- visibility: hidden --> hidden too, so removed from the tree, and it still takes space(just not painted in paint step)
- opacity:0 - stays in the tree but keeps its space and is still clickable
 **Visually Hidden** - out of the normal flow, clipped to nothing, still in the tree 

## `<fieldset>` + `<legend>`, not a heading?
- **Heading** is a page signpost that isn't linked to any controls
(Screen reader users can jump between headings not Keyboard ones)
- **`<legend>` labels** the group(linked to its group) and is announced when the focus enters the group.

## Color: an inline style or a CSS variable?
- Setting an inherited property (like `color`) on a parent leaks: every child takes it, even ones that shouldn't.
- A CSS variable inherits as well, but **does nothing by itself**. Only elements that read it with `var()` change
Syntax: defined by: `--<nameOfTheProperty>: value`, accessed by var(--<nameOfTheProperty>, defaultValue)
where Fallback is defaultValue, no default needed at anyplace else

## Names(the test behind each)
- **`onChoose`**, not `onSelect/onChange`: those are built-in events name on `<input>` so they had clash.
not `onStarClick`: a star can be chosen by keyboard too, not only by a click.
- **`rating-` prefix on classes**: an imported stylesheet applies to the whole page (import decides *when* it loads, not *where* it applies), so prefixing with the component's name stops class names clashing with other components.
- **`starColor`**, not `widgetFillColor`: "widget" was false (only the stars change, "RATINGS" stays black) and "fill" was false (it also colours the outline). The name says exactly what it colours.

# Where I got stuck?

**Buttons → radio group**
- Started with five buttons: five Tab stops, and a screen reader only heard "button" five times, with no sense of one choice out of five.
- A rating *is* one choice, so: five radios sharing one `name`. Choosing one un-chooses the rest, and keyboard and screen reader support come for free.

**Leftover button around each radio**
- The radios were still wrapped in buttons: invalid HTML (an interactive element inside a button), and 6 Tab stops.
- The button did nothing the radio didn't already do. Removed it, and the Tab count dropped to 1.

**Radios with no meaning**
- Screen reader said "radio button, checked, 4 of 5", but not *what* 4 means.
- Two fixes at two levels:
  - each star's **label** gets hidden text ("Great"), which becomes the radio's name
  - the group gets a **legend** ("RATINGS"), announced once when focus enters it

## Why visually-hidden class over `opacity:0` even when it hides the input?
- `opacity:0` left gaps: painted transparent but still takes its space(and stays clickable)
**Visually hidden, step by step**
- `position: absolute` takes it **out of the normal flow**, so it no longer pushes the stars apart.
- `width/height: 1px` **shrinks** its box to one pixel.
- `overflow: hidden` **clips** whatever spills outside that pixel.
- `clip-path: inset(50%)` **clips the last pixel** (the leftover dot) to nothing.
- The element still exists with its text and role, so it **stays in the accessibility tree**. Only what's painted disappears.

## Focus became invisible after hiding the radio. How did the star get a focus ring?
- Focus was on the visually hidden radio, so its focus ring couldn't be seen.
 *→ input:focus-visible + label* draws the ring on the star instead, while focus stays on the radio.

 **CSS fails silently**
- `"rating-fill"` (no `--`): the browser treated it as an unknown property and dropped it. A custom property must start with `--`.
- In the JSX `style` object, `--rating-star-color` must be **quoted**, because a key with dashes isn't valid JavaScript without quotes.
- `var(--x, "green")`: quotes make it a CSS **string**, not a colour, so the fallback was invalid. Colour keywords go without quotes.