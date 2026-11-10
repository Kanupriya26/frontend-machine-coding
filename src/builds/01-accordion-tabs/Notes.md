BUILDING AN ACCORDION:
   # List of clickable items that have id, title and content
   # Clicking an item displays its content or hides it if already opened
   # allowMultiple: a prop passed to Accordion 
      --> true: any number of items can remain open at once
      --> false: opening an item closes any other open item

STARTING POINT:
   # Accordion: parent that gets data for its child items, allowMultiple as prop
   # AccordionItem: receives data(id, title, content) from Accordion 

TWO CHOICES on "Who controls the opening and closing of an item?"
   # A: Child itself controls whether to open, close or remain as is based on the click 
   # B: Accordion monitors and tells an item to open, close or remain as is

Since an item have to decide on open and close based on the state of its sibling, 
common closest parent needs to remain informed to share the data.
Items can be differentiated by ID among each other

# DESIGN A- (Each child maintains its own state)
  any item clicked --->>> passes info to parent --->>> passes info to children via props

  Accordion stores 
    # openId: state displaying which item is open by storing id
    # passes a openID setter as prop its children
    # Item tells whether its open or close by calling passed setter function
    # passes stayOpen/isOpen: tells each child whether to stay open or closed

  Item stores 
    # isExpanded: local state that tracks whether this particular item is displaying content or not
    # itemClickHandler: sets this internal state to match the user interaction & share the info to parent so that info can be passed down upon other siblings 
    # effect maintains for isExpanded to reflect the same value as isOpen

PROBLEMS IN DESIGN A: 
  1) in single-open mode the item’s own state just duplicates what the parent already knows
  2) Why to add the complexity by maintaining(by useEffect) two states when one is already doing the job.
  3) Takes a split second for isExpanded to reflect the exact value as isOpen causing double render of single item(due to state mismatch)(caused by useEffect as it calls the setter once item is already painted on UI), User sees an item open for a split second which should be closed
  4) The parent’s information is only reliable in single-open mode; in multiple-open mode, the items hold the truth. Who’s right changes with the mode.

# DESIGN B - (Parent is the single source of truth, child behaves as a controlled component)
  clicking an item --->> passes info to parent -->> act as single source of truth for each item 

  Accordion stores
    # openIDs: reflects the id(s) of items that are open
    # passes toggleItem to its children: a setter whose job is to add or remove an id from openIds
    # passes isOpen(single source of truth) telling a child to display content or not

  AccordionItem stores(depends on prop value & no state of its own, therefore controlled)
    # displays content based on isOpen prop passed to it
    # passes id to setter function of parent to tell it was clicked

WHY DESIGN B WINS?
  1) Depends on single state instead of maintaining two states representing the same thing
  2) No extra render(no flicker) of any item due to effect, item simply shows what its told to
  3) Behaves the same in both modes
