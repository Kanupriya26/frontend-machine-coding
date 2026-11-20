import {useState} from "react"
import ratingIcon from "./icons/rating.svg"
import Star from "./Star"
import "./StarRating.css"

const starToText = ["Far from great", "Not good", "Good", "Great", "Exceptional"]

const StarRating = () => {
  const [savedRating, setSavedRating] = useState<number | null>(null)
  const [temporaryHoverState, setTemporaryHoverState] = useState<number | null>(null)

  const handleStarClick = (index: number) => {
    setSavedRating(index + 1)
  }
  return (
   <div className="parent-container">
    <div className="title">
      <h4>RATINGS</h4>
      <img src={ratingIcon}/>
    </div>
    <div className="rendering-stars">
      {starToText.map((item: string, idx: number) =>  {
        return (
          <button key={item} className="render-star" onClick={() => handleStarClick(idx)}>
            <Star isFilled={savedRating? idx<savedRating : false}/>
          </button>
        )
      })}
    </div>
   </div>
  )
}

export default StarRating