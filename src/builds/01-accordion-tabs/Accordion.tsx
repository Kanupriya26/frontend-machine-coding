import { useState } from "react";
import "./accordion.css"

interface AccordionItemProp {
  id: string;
  title: string;
  content: string;
}

const AccordionItem = ({id, title, content}: AccordionItemProp) => {
  const [showContent, setShowContent] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const  handleDropdown = ()=> {
    setIsOpen(prev => !prev)
    setShowContent(prev => !prev)
  }
  return (
    <div id={id} className="item-parent">
      <button className="clickable-part" onClick={handleDropdown}>
        {title}
        <span className={isOpen? "" : "transformed"}>^</span>
      </button>
      {showContent && <p>{content}</p>}
    </div>
  )
}

type AccordionProps = {itemContent: AccordionItemProp[]}

const Accordion = ({itemContent}: AccordionProps) => {
  console.log(itemContent)
  return (
    <div className="accordion-parent">
      {itemContent.map((item: AccordionItemProp) =>  <AccordionItem id={item.id} title={item.title} content={item.content}/>)}
    </div>
  )
}

export default Accordion