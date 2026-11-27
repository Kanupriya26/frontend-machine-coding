# What I built?
A Rating Widget 
- which shows the meaning of the rating("Far from great"..."Exceptional") under the stars; 
  nothing is filled or shown until a star is hovered or chosen.
- with customizable star color(green by default).
A mouse user gets to select and hover over the stars for preview
A keyboard user gets to select stars using a Tab and arrow keys(←, →)
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
 **Visually Hidden** - out of the layout, clipped to nothing, still in the tree 

## `<fieldset>` + `<legend>`, not a heading?
- **Heading** is a page signpost that isn't linked to any controls
(Screen reader users can jump between headings not Keyboard ones)
- **`<legend>` labels** the group(linked to its group) and is announced when the focus enters the group.

## Color: an inline style or a CSS variable?
- Setting an inherited property (like `color`) on a parent leaks: every child takes it, even ones that shouldn't.
- A CSS variable inherits as well, but **does nothing by itself**. Only elements that read it with `var()` change
Syntax: defined by: `--<nameOfTheProperty>: value`, accessed by var(--<nameOfTheProperty>, defaultValue)
where Fallback is defaultValue, no default neede at anyplace else

## Names(the test behind each)
- **`onChoose`**, not `onSelect/onChange`: those are built-in events name on `<input>` so they had clash.
not `onStarClick`: a star can be chosen by keyboard too, not only by a click.
- **`rating-` prefix on classes**: an imported stylesheet applies to the whole page (import decides *when* it loads, not *where* it applies), so prefixing with the component's name stops class names clashing with other components.
- **`starColor`**, not `widgetFillColor`: "widget" was false (only the stars change, "RATINGS" stays black) and "fill" was false (it also colours the outline). The name says exactly what it colours.