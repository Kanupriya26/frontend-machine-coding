import {useState} from "react"
import "./Accordion.css"

interface AccordionItemData{
  id: string;
  title: string;
  content: string;
}

interface AccordionItemProps extends AccordionItemData{
  onItemClick: (id: string) => void;
  isOpen: boolean;
}

const AccordionItem = ({id, title, content, isOpen, onItemClick}: AccordionItemProps) => {
  const handleItemClick = () => onItemClick(id);

  return(
    <div id={id} className="accordion-item">
      <button className="accordion-header" onClick={handleItemClick}>
        {title}
        <span className={isOpen? "accordion-arrow-open" : ""}>▼</span>
      </button>
      {isOpen && <p>{content}</p>}
    </div>
  )
}

interface AccordionProps{
  items: AccordionItemData[];
  allowMultiple: boolean
}

const Accordion = ({items, allowMultiple}: AccordionProps) => {
  const [openIds, setOpenIds] = useState<string[]>([])
  const areAllOpen = openIds.length === items.length

  const toggleItem = (itemId: string) => {
    setOpenIds(prevIds => {
      const alreadyOpen = prevIds.includes(itemId);
      
      if(alreadyOpen) return prevIds.length > 1 && !allowMultiple? [itemId] : prevIds.filter(id => id !== itemId);
      return allowMultiple? [...prevIds, itemId] : [itemId];
    })
  }

  const handleToggleAll = () => setOpenIds(prevIds => prevIds.length === items.length? [] : items.map((item: AccordionItemData) => item.id))

  return (
    <div className="accordion">
      <div className="accordion-toggle-all">
        <button onClick={handleToggleAll}>{areAllOpen ? "Collapse All" : "Expand All"}</button>
      </div>
      <div className="accordion-list">
        {items.map((item: AccordionItemData) => {
          const isItemOpen = openIds.includes(item.id)
          return <AccordionItem key={item.id} {...item} isOpen={isItemOpen} onItemClick={toggleItem}/>
        })}
      </div>
    </div>
  )
}

export default Accordion