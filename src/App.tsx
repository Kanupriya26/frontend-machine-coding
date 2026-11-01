import Accordion from './builds/01-accordion-tabs/Accordion'

function App() {
  const details = [
    {id: "travel-01", title: "Where can I travel?", content: "Dreams knows no boundaries. Our agency makes sure that you experience the reason to be alive by taking you to domestic as well as international tours. Please look for the place you wish to travel on top."},
    {id: "travel-02", title: "Is stay included within the itenarary?", content: "We treat customers as family and have build a big family which includes locals at almost every tour. So, yes stay is included. For further details please reach out to our team via email and phone."},
    {id: "travel-03", title: "Can I travel to foreign?", content: "You absolutely can. We as a company would be happy to take you to international waters."}
  ]
  return <Accordion itemContent={details}/>
}

export default App
