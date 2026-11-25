import {useId, useState} from "react"
import ratingIcon from "./icons/rating.svg"
import Star from "./Star"
import "./StarRating.css"

const RATINGS_LABELS = ["Far from great", "Not good", "Good", "Great", "Exceptional"]

const StarRating = () => {
  const instanceID = useId()

  const [savedRating, setSavedRating] = useState<number>(0)
  const [hoverRating, setHoverRating] = useState<number>(0)

  const displayRating = hoverRating || savedRating 

  return (
   <div className="rating-container">
    <fieldset className="stars-list">
      <legend className="title">
        RATINGS
        <img src={ratingIcon} alt=""/>
      </legend>
      {RATINGS_LABELS.map((item: string, idx: number) =>  {
        return (
          <div key={item} onMouseEnter={() => setHoverRating(idx+1)} onMouseLeave={() => setHoverRating(0)}>
            <Star groupName={`${instanceID}-ratings`} 
            inputID={`${instanceID}-${idx}`} label={item}
            isFilled={idx < displayRating} onChangingRating={() => setSavedRating(idx+1)}/>
          </div>
        )
      })}
    </fieldset>
    {displayRating? <p className="rating-label">{RATINGS_LABELS[displayRating-1]}</p> : null}
   </div>
  )
}

export default StarRating