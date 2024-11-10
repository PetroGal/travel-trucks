import React from "react"
import PropTypes from "prop-types"
import css from "./CamperCard.module.css"
import sprite from "../../images/icons.svg"

const CamperCard = ({ camper }) => {
  console.log("Camper data:", camper)
  const reviewCount = Array.isArray(camper.reviews)
    ? camper.reviews.length
    : camper.reviews || 0

  return (
    <div className={css.camperCard}>
      <div className={css.imgWrapper}>
        {console.log("Camper Image URL:", camper.image)}
        <img
          src={
            Array.isArray(camper.gallery) && camper.gallery.length > 0
              ? camper.gallery[0].original
              : "https://via.placeholder.com/292x320"
          }
          alt={camper.name || "Camper"}
          className={css.camperImage}
        />
      </div>
      <div className={css.camperInfo}>
        <div className={css.infoWrapper}>
          <p className={css.infoText}>{camper.name || "Unknown Camper"}</p>
          <p className={css.infoText}>€{camper.price || "N/A"}</p>
        </div>
        <div className={css.reviewsWrapper}>
          <svg className={css.starIcon} width='16' height='16'>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <span className={css.numReviews}>{`${reviewCount} Reviews`}</span>
          <svg className={css.mapIcon} width='16' height='16'>
            <use href={`${sprite}#icon-map`}></use>
          </svg>
          <span>{camper.location || "Unknown Location"}</span>
        </div>

        <p className={css.camperSlogan}>
          {camper.description || "Description not available"}
        </p>
        <ul className={css.camperOptions}>
          {camper.equipment && camper.equipment.length > 0 ? (
            camper.equipment.map((item, index) => (
              <li key={index} className={css.camperOptionsItem}>
                <label htmlFor={item} className={css.optionsLabel}>
                  <div className={css.optionBox}>
                    <div className={css.iconWrapper}>
                      <svg className={css.optionIcon} width='20' height='20'>
                        <use
                          href={`${sprite}#icon-${item.toLowerCase()}`}
                        ></use>
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                </label>
              </li>
            ))
          ) : (
            <li>No Equipment Available</li>
          )}
        </ul>
        <button className={css.showMoreButton} type='button'>
          Show more
        </button>
      </div>
    </div>
  )
}

CamperCard.propTypes = {
  camper: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    rating: PropTypes.number,
    location: PropTypes.string,
    description: PropTypes.string,
    reviews: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    equipment: PropTypes.arrayOf(PropTypes.string),
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        thumb: PropTypes.string,
        original: PropTypes.string,
      })
    ),
  }),
}

export default CamperCard
