//import Accordion from './builds/01-accordion-tabs/Accordion'
import { type TabsItemData } from "./builds/02-tabs/Tabs"
import StarRating from "./builds/03-star-rating/StarRating"
import './App.css'

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
   (compositing, rasterization, and GPU virtualization) from multiple renderers and browser processes and merging them into the final screen display`},
  {id: "overview", title: "React Journey Begins", content: `This is actually fun you know. To know about something you have no idea existed till yesterday.
    And then not only getting the glimpse but also walking through it, experimenting about it and then boosting your cofidence. Keep going girlll, you can do it.`}
]

const travelTabItemsData: TabsItemData[] = [
  {id: "kalpa", title: "Kalpa - You beauty", content: `Kalpa is a picturesque village and major tourist destination in the Kinnaur district of Himachal Pradesh, India.Sapni Fort is a historic fort in Sapni Village near Kalpa in Kinnaur district, Himachal Pradesh, India, 
    known for its seven-storey tower and richly carved wooden balconies and window frames. Built by Raja Padam Singh of Rampur, the complex joins two linked buildings around a central tower and contains a small Kali temple on an upper floor,
    with timber carvings that show weathering from the mountain climate. Visitors commonly include Sapni Fort on Kalpa sightseeing, viewing the woodwork and using the tower as a vantage point over the valley and surrounding peaks.`},
  {id: "chitkul", title: "Chitkul - Last village in Himachal", content: `Chitkul is a small Himalayan village in the Baspa Valley near Sangla, in Kinnaur district of Himachal Pradesh, India, situated at about 3,450 meters above sea level. 
    Known as the last inhabited village on the old Hindustan-Tibet trade route, it is noted for traditional Kath Kuni wood-and-stone houses and the roughly 500-year-old Mathi Mata temple, and it sits on the right bank of the Baspa River. 
    Visitors typically reach Chitkul from Sangla, enjoy riverside walks, alpine scenery and apple orchards, and use the village as a base for high-altitude treks such as the Lamkhaga and Borasu passes.`},
  {id: "hampta-pass", title: "Hampta Pass - Trail to heaven", content: `In the lap of the Pir Panjal range lies the mesmerizing Hampta Valley, once a passage for horse-herders and shepherds. 
    Now, it stands as one of the sought-after trekking destinations, connecting Manali and Chandratal.`},
  {id: "overview", title: "Travel Overview", content: "You are going there soon for sure. This is your manifestation and it will soon be your reality Kanuuu"}
]

function App() {
  return (
    <>
      <StarRating/>
      <StarRating starColor="orange"/>
    </>
  )
}

export default App