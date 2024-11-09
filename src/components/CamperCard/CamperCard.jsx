import React from "react"
import css from "./CamperCard.module.css"
import sprite from "../../images/icons.svg"

const CamperCard = () => {
  return (
    <div className={css.camperCard}>
      <div className={css.imgWrapper}>
        <img
          src='https://via.placeholder.com/292x320'
          alt='Camper'
          className={css.camperImage}
        />
      </div>
      <div className={css.camperInfo}>
        <div className={css.infoWrapper}>
          <p className={css.infoText}>Mavericks</p>
          <p className={css.infoText}>€8000.00</p>
        </div>
        <div className={css.reviewsWrapper}>
          <svg className={css.starIcon} width='16' height='16'>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          <span className={css.numReviews}>4.4(2 Reviews)</span>
          <svg className={css.mapIcon} width='16' height='16'>
            <use href={`${sprite}#icon-map`}></use>
          </svg>
          <span>Kyiv, Ukraine</span>
        </div>

        <p className={css.camperSlogan}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>
        <ul className={css.camperOptions}>
          <li className={css.camperOptionsItem}>
            <label htmlFor='ac' className={css.optionsLabel}>
              <div className={css.optionBox}>
                <div className={css.iconWrapper}>
                  <svg className={css.optionIcon} width='20' height='20'>
                    <use href={`${sprite}#icon-diagram`}></use>
                  </svg>
                </div>
                <span>Automatic</span>
              </div>
            </label>
          </li>
          <li className={css.camperOptionsItem}>
            <label htmlFor='ac' className={css.optionsLabel}>
              <div className={css.optionBox}>
                <div className={css.iconWrapper}>
                  <svg className={css.optionIcon} width='20' height='20'>
                    <use href={`${sprite}#icon-Petrol`}></use>
                  </svg>
                </div>
                <span className={css.filterSpanTV}>Petrol</span>
              </div>
            </label>
          </li>
          <li className={css.camperOptionsItem}>
            <label htmlFor='ac' className={css.optionsLabel}>
              <div className={css.optionBox}>
                <div className={css.iconWrapper}>
                  <svg className={css.optionIcon} width='20' height='20'>
                    <use href={`${sprite}#icon-cupHot`}></use>
                  </svg>
                </div>
                <span>Kitchen</span>
              </div>
            </label>
          </li>
          <li className={css.camperOptionsItem}>
            <label htmlFor='ac' className={css.optionsLabel}>
              <div className={css.optionBox}>
                <div className={css.iconWrapper}>
                  <svg className={css.optionIcon} width='20' height='20'>
                    <use href={`${sprite}#icon-wind`}></use>
                  </svg>
                </div>
                <span className={`${css.optionAc} ${css.optionSpanWind}`}>
                  ac
                </span>
              </div>
            </label>
          </li>
        </ul>
        <button className={css.showMoreButton} type='button'>
          Show more
        </button>
      </div>
    </div>
  )
}

export default CamperCard
