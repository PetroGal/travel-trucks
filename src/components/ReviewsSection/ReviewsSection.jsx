import React from "react"
import css from "./ReviewsSection.module.css"
import sprite from "../../images/icons.svg"

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Alice",
      rating: 5,
      text: "The Mavericks panel truck was a perfect choice for my solo road trip. Compact, easy to drive, and had all the essentials. The kitchen facilities were sufficient, and the overall experience was fantastic.",
    },
    {
      name: "Bob",
      rating: 3,
      text: "A decent option for solo travel. The Mavericks provided a comfortable stay, but the lack of bathroom facilities was a drawback. Good for short trips where simplicity is preferred.",
    },
  ]

  const renderStars = (rating) => {
    const maxStars = 5
    const filledStars = Array(rating).fill(true)
    const unfilledStars = Array(maxStars - rating).fill(false)

    return (
      <>
        {filledStars.map((_, index) => (
          <svg
            key={`filled-${index}`}
            className={css.starIcon}
            width='16'
            height='16'
          >
            <use href={`${sprite}#icon-star`}></use>
          </svg>
        ))}
        {unfilledStars.map((_, index) => (
          <svg
            key={`unfilled-${index}`}
            className={css.unfilledStarIcon}
            width='16'
            height='16'
          >
            <use href={`${sprite}#icon-star`}></use>
          </svg>
        ))}
      </>
    )
  }

  return (
    <div className={css.reviewsSection}>
      {reviews.map((review, index) => (
        <div key={index} className={css.reviewItem}>
          <div className={css.userInfo}>
            <span className={css.userIcon}>{review.name[0]}</span>
            <div>
              <span className={css.userName}>{review.name}</span>
              <div className={css.userRating}>{renderStars(review.rating)}</div>
            </div>
          </div>
          <p className={css.reviewText}>{review.text}</p>
        </div>
      ))}
    </div>
  )
}

export default ReviewsSection
