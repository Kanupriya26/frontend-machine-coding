import {useState} from "react"
import ratingIcon from "./icons/rating.svg"
import Star from "./Star"
import "./StarRating.css"

const starToText = ["Far from great", "Not good", "Good", "Great", "Exceptional"]

const StarRating = () => {
  const [savedRating, setSavedRating] = useState<number | null>(null)
  const [temporaryHoverState, setTemporaryHoverState] = useState<number | null>(null)

  const textToRender = (temporaryHoverState && starToText[temporaryHoverState-1]) || (savedRating && starToText[savedRating-1])

  const handleStarClick = (index: number) => {
    setSavedRating(index + 1)
  }

  const handleHover = (index: number) => {
    setTemporaryHoverState(index+1)
  }

  const handleHoverOut = () => setTemporaryHoverState(null)

  const handleStarFill = (idx: number) => {
    if(temporaryHoverState) return idx<temporaryHoverState
    if(savedRating) return idx < savedRating
    return false;
  }
  return (
   <div className="rating-container">
    <div className="title">
      <h4>RATINGS</h4>
      <img src={ratingIcon} alt="ratings-icon"/>
    </div>
    <div className="stars-list">
      {starToText.map((item: string, idx: number) =>  {
        return (
          <div key={item}>
            <button className="star-button" 
             onClick={() => handleStarClick(idx)} onMouseEnter={() => handleHover(idx)} onMouseLeave={handleHoverOut}>
              <Star isFilled={handleStarFill(idx)}/>
            </button>
          </div>
        )
      })}
    </div>
    <div className="text-to-render"><h4>{textToRender}</h4></div>
   </div>
  )
}

export default StarRating