import { useId, useState } from "react"
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
  const instanceID = useId();

  const isListEmpty = itemsData.length === 0;
  const [activeID, setActiveID] = useState<string | null>(getDefaultActiveID)

  const activeTabIndex = itemsData.findIndex(item => item.id === activeID)
  const activeTab = itemsData[activeTabIndex]

  function getDefaultActiveID() {
    if(isListEmpty) return null

    const isPresent = itemsData.some(item => item.id === veryFirstActiveTab)
    if(veryFirstActiveTab && isPresent) return veryFirstActiveTab

    return itemsData[0].id
  }

  const handleItemClick = (id: string)=> setActiveID(id)

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const keyPressed = event.key
    const isRightLeftKeyPressed = keyPressed === "ArrowRight" || keyPressed === "ArrowLeft";
    if(!isRightLeftKeyPressed) return;

    const listLength = itemsData.length;
    const updatedIdx = keyPressed === "ArrowRight"? (activeTabIndex + 1) % listLength : (activeTabIndex - 1 + listLength) % listLength;
    setActiveID(itemsData[updatedIdx].id);

    const focusedTabList = event.currentTarget
    const tabToFocus = focusedTabList.querySelector<HTMLButtonElement>(`#${instanceID}-tab-${itemsData[updatedIdx].id}`)
    console.log("Tab to focus: ", tabToFocus, `${instanceID}-tab-${itemsData[updatedIdx].id}`)
    tabToFocus?.focus()
  }

  return( isListEmpty ? <p>No Tabs present</p> :
    <div className="tabs-container">
      <div className="render-title" role="tablist" onKeyDown={handleKeyDown}>
        {itemsData.map(item => {
            const isActive = item.id === activeID
            return (
            <button key={item.id} className={`tab-title${isActive? " tab-active" : ""}`} 
             id={`${instanceID}-tab-${item.id}`} role="tab" aria-selected={isActive} aria-controls={`${instanceID}-panel-${item.id}`}
             onClick={() => handleItemClick(item.id)}>
                {item.title}
            </button>
            )
        })}
      </div>
      <div id={`${instanceID}-panel-${activeID}`} className="render-content" role="tabpanel" aria-labelledby={`${instanceID}-tab-${activeID}`}>
        {activeTab && <TabsItem content={activeTab.content}/>}
      </div>
    </div>
  )
}

export default Tabs

 