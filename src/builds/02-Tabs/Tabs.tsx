import { useState } from "react"
import "./Tabs.css"

export interface TabsItemData {
  id: string;
  title: string;
  content: string;
}

const TabsItem = ({content}: {content: string}) => {
  return <p>{content}</p>
}

interface TabsProps {
  itemsData: TabsItemData[],
  veryFirstActiveTab?: string
}

const Tabs = ({itemsData, veryFirstActiveTab}: TabsProps) => {
  const isListEmpty = itemsData.length === 0;
  const [activeID, setActiveID] = useState<string | null>(getDefaultActiveID)

  function getDefaultActiveID() {
    if(isListEmpty) return null

    const isPresent = itemsData.some(item => item.id === veryFirstActiveTab)
    if(veryFirstActiveTab && isPresent) return veryFirstActiveTab

    return itemsData[0].id
  }

  const handleItemClick = (id: string)=> setActiveID(id)

  const activeTab = itemsData.find(item => item.id === activeID)

  return( isListEmpty ? <p>No Tabs present</p> :
    <div className="tabs-container">
      <div className="render-title">
        {itemsData.map(item => {
            return (
            <button key={item.id} onClick={() => handleItemClick(item.id)}>
                {item.title}
            </button>
            )
        })}
      </div>
      <div className="render-content">
        {activeTab && <TabsItem content={activeTab.content}/>}
      </div>
    </div>
  )
}

export default Tabs

 