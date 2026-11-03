import { useState } from "react";
import "./accordion.css"

interface BasicItemProp {
  id: string;
  title: string;
  content: string;
}

interface AccordionItemProp extends BasicItemProp{
  onToggle: (id: string) => void;
  isOpen: boolean;
}

const AccordionItem = ({id, title, content, onToggle, isOpen}: AccordionItemProp) => {

  const  handleDropdown = ()=> {
    onToggle(id)
  }

  return (
    <div id={id} className="item-parent">
      <button className="clickable-part" onClick={handleDropdown}>
        {title}
        <span className={isOpen? "" : "transformed"}>^</span>
      </button>
      {isOpen && <p>{content}</p>}
    </div>
  )
}

type AccordionProps = {itemContent: BasicItemProp[], allowMultiple: boolean}

const Accordion = ({itemContent, allowMultiple}: AccordionProps) => {
  console.log(itemContent, allowMultiple)
  const [openID, setOpenID] = useState<string | null>(null)

  const toggleItem = (itemID: string)=>{
    setOpenID(prev => prev === itemID? null : itemID)
  }

  return (
    <div className="accordion-parent">
      {itemContent.map((item: BasicItemProp) => <AccordionItem key={item.id} {...item} onToggle={toggleItem} isOpen={item.id === openID}/>)}
    </div>
  )
}

export default Accordion