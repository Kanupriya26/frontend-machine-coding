//import Accordion from './builds/01-accordion-tabs/Accordion'
import Tabs, { type TabsItemData } from "./builds/02-Tabs/Tabs"

const accordionItemsData = [
  {id: "travel-01", title: "Where can I travel?", content: "Dreams knows no boundaries. Our agency makes sure that you experience the reason to be alive by taking you to domestic as well as international tours. Please look for the place you wish to travel on top."},
  {id: "travel-02", title: "Is stay included within the itenarary?", content: "We treat customers as family and have build a big family which includes locals at almost every tour. So, yes stay is included. For further details please reach out to our team via email and phone."},
  {id: "travel-03", title: "Can I travel to foreign?", content: "You absolutely can. We as a company would be happy to take you to international waters."}
]

const tabsItemsData: TabsItemData[] = [
  {id: "opacity", title: "Opacity on the GPU", content: `What opacity means to the GPU? The browser paints each layer into its own bitmap once. Opacity is 
   just a number the GPU uses to while stacking those bitmaps.`},
  {id: "learning-plan", title: "Plan for learning - Claude", content: `Let's start with second build on the plan as interview rounds asks for machine coding
   as the intial clearance tests. We will add questions from this Thursday to make you learn faster.`},
  {id: "browser-compositor", title: "Viz - Browser's Compositor", content: `Viz is Chrome's next-generation display compositor service responsible for gathering visual output
   (compositing, rasterization, and GPU virtualization) from multiple renderers and browser processes and merging them into the final screen display`}
]

function App() {
  return <Tabs itemsData={tabsItemsData} veryFirstActiveTab="browser-compositor"/>
}

export default App