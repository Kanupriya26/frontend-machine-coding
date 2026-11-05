import { useState, useEffect } from "react"
import "./Accordion.css"

interface AccordionItemData{
  id: string;
  title: string;
  content: string;
}

interface AccordionItemProps extends AccordionItemData{
  onItemClick: (id: string) => void;
  isOpen: boolean;
  allowMultiple: boolean;
}

const AccordionItem = ({id, title, content, isOpen, allowMultiple, onItemClick}: AccordionItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  useEffect(() => {
    if(!allowMultiple && !isOpen) setIsExpanded(false)
  }, [isOpen, allowMultiple])

  const handleItemClick = () => {
    setIsExpanded(prev => !prev);
    onItemClick(id);
  }

  return(
    <div id={id} className="item-parent">
      <button className="clickable-part" onClick={handleItemClick}>
        {title}
        <span className={isExpanded? "" : "transformed"}>^</span>
      </button>
      {isExpanded && <p>{content}</p>}
    </div>
  )
}

const Accordion = ({items, allowMultiple}: {items: AccordionItemData[], allowMultiple: boolean}) => {
  const [lastOpenedID, setLastOpenedID] = useState<string | null>(null)

  const toggleItem = (id: string) => setLastOpenedID(prev => prev === id? null : id)

  return (
    <div className="accordion-parent">
      {items.map((item: AccordionItemData) => <AccordionItem key={item.id} {...item} isOpen={item.id === lastOpenedID} allowMultiple={allowMultiple} onItemClick={toggleItem}/>)}
    </div>
  )
}

export default Accordion