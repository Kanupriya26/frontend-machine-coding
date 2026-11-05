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
    <div id={id} className="item-parent">
      <button className="clickable-part" onClick={handleItemClick}>
        {title}
        <span className={isOpen? "" : "transformed"}>^</span>
      </button>
      {isOpen && <p>{content}</p>}
    </div>
  )
}

const Accordion = ({items, allowMultiple}: {items: AccordionItemData[], allowMultiple: boolean}) => {
  const [openIds, setOpenIds] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenIds(prevIds => {
      const alreadyOpen = prevIds.includes(itemId);

      if(alreadyOpen) return prevIds.filter(id => id !== itemId);
      return allowMultiple? [...prevIds, itemId] : [itemId];
    })
  }

  return (
    <div className="accordion-parent">
      {items.map((item: AccordionItemData) => {
        const isItemOpen = openIds.includes(item.id)
        return <AccordionItem key={item.id} {...item} isOpen={isItemOpen} onItemClick={toggleItem}/>
      })}
    </div>
  )
}

export default Accordion