import React from "react"
import css from "./FeaturesSection.module.css"
import sprite from "../../images/icons.svg"

const FeaturesSection = () => {
  return (
    <div className={css.featuresContainer}>
      <ul className={css.featureOptions}>
        <li className={css.featureOptionsItem}>
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

        <li className={css.featureOptionsItem}>
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

        <li className={css.featureOptionsItem}>
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

        <li className={css.featureOptionsItem}>
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
        <li className={css.featureOptionsItem}>
          <label htmlFor='ac' className={css.optionsLabel}>
            <div className={css.optionBox}>
              <div className={css.iconWrapper}>
                <svg className={css.optionIcon} width='20' height='20'>
                  <use href={`${sprite}#icon-uiRadios`}></use>
                </svg>
              </div>
              <span>Radio</span>
            </div>
          </label>
        </li>
      </ul>

      <div className={css.vehicleDetails}>
        <p className={css.vehicleHeading}>Vehicle Details</p>

        <hr className={css.vehicleDivider} />

        <table className={css.vehicleTable}>
          <tbody className={css.vehicleTbody}>
            <tr>
              <td className={css.tbodyRow}>Form</td>
              <td className={css.tbodyRow}>Panel truck</td>
            </tr>
            <tr>
              <td className={css.tbodyRow}>Length</td>
              <td className={css.tbodyRow}>5.4 m</td>
            </tr>
            <tr>
              <td className={css.tbodyRow}>Width</td>
              <td className={css.tbodyRow}>2.01 m</td>
            </tr>
            <tr>
              <td className={css.tbodyRow}>Height</td>
              <td className={css.tbodyRow}>2.05 m</td>
            </tr>
            <tr>
              <td className={css.tbodyRow}>Tank</td>
              <td className={css.tbodyRow}>132 l</td>
            </tr>
            <tr>
              <td className={css.tbodyRow}>Consumption</td>
              <td className={css.tbodyRow}>12.4l/100km</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FeaturesSection
