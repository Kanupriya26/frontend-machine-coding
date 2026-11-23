import {useState} from "react"
import ratingIcon from "./icons/rating.svg"
import Star from "./Star"
import "./StarRating.css"

const starToText = ["Far from great", "Not good", "Good", "Great", "Exceptional"]

const StarRating = () => {
  const [savedRating, setSavedRating] = useState<number>(0)
  const [hoverRating, setHoverRating] = useState<number>(0)

  const currentRating = hoverRating || savedRating 

  const handleStarClick = (index: number) => setSavedRating(index + 1)
  const handleHover = (index: number) => setHoverRating(index+1)
  const handleHoverOut = () => setHoverRating(0)

  return (
   <div className="rating-container">
    <div className="title">
      <h4>RATINGS</h4>
      <img src={ratingIcon} alt=""/>
    </div>
    <div className="stars-list">
      {starToText.map((item: string, idx: number) =>  {
        return (
          <div key={item}>
            <button className="star-button" 
             onClick={() => handleStarClick(idx)} onMouseEnter={() => handleHover(idx)} onMouseLeave={handleHoverOut}>
              <Star isFilled={idx < currentRating} id={item}/>
            </button>
          </div>
        )
      })}
    </div>
    <div className="text-to-render"><h4>{currentRating? starToText[currentRating-1] : null}</h4></div>
   </div>
  )
}

export default StarRating