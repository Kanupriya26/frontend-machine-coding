import { useState } from "react"
import ratingIcon from "./icons/rating.svg"
import Star from "./Star"
import "./StarRating.css"

const starToText = ["Far from great", "Not good", "Good", "Great", "Exceptional"]

const StarRating = () => {
  const [savedRating, setSavedRating] = useState<number | null>(null)
  const [temporaryHoverState, setTemporaryHoverState] = useState<number | null>(null)
  return (
   <div className="parent-container">
    <div className="title">
      <h4>RATINGS</h4>
      <img src={ratingIcon}/>
    </div>
    <Star isFilled={false}/>
   </div>
  )
}

export default StarRating