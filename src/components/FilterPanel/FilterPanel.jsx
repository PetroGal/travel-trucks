// src/components/FilterPanel/FilterPanel.jsx
import React, { useState } from "react"
import css from "./FilterPanel.module.css"
import sprite from "../../images/icons.svg"

const FilterPanel = () => {
  const [location, setLocation] = useState("")

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }
  return (
    <div className={css.filtersPanel}>
      {/* Location */}
      <div className={css.locationSection}>
        <label htmlFor='location' className={css.locationLabel}>
          Location
        </label>
        <div className={css.locationInputWrap}>
          <input
            type='text'
            id='location'
            placeholder='City'
            className={css.locationInput}
            value={location}
            onChange={handleLocationChange}
          />
          <svg className={css.locationIcon} width='20' height='20'>
            <use href={`${sprite}#icon-map`}></use>
          </svg>
        </div>
      </div>

      <p className={css.filtersTitle}>Filters</p>

      {/* Vehicle Equipment Filters */}
      <div className={css.filtersSection}>
        <h3 className={css.filterHeader}>Vehicle Equipment</h3>

        <hr className={css.customDivider} />

        <ul className={css.equipmentFilters}>
          <li className={css.equipmentFilterItem}>
            <label htmlFor='ac' className={css.filterLabel}>
              <div className={`${css.filterBox} ${css.filterBoxWind}`}>
                <div className={css.iconWrapper}>
                  <svg className={css.filterIcon} width='32' height='32'>
                    <use href={`${sprite}#icon-wind`}></use>
                  </svg>
                </div>
                <span className={`${css.filterSpan} ${css.filterSpanWind}`}>
                  ac
                </span>
              </div>
            </label>
          </li>
          <li className={css.equipmentFilterItem}>
            <label htmlFor='ac' className={css.filterLabel}>
              <div className={`${css.filterBox} ${css.filterBoxDiagram}`}>
                <div className={css.iconWrapper}>
                  <svg className={css.filterIcon} width='32' height='32'>
                    <use href={`${sprite}#icon-diagram`}></use>
                  </svg>
                </div>
                <span>Automatic</span>
              </div>
            </label>
          </li>
          <li className={css.equipmentFilterItem}>
            <label htmlFor='ac' className={css.filterLabel}>
              <div className={`${css.filterBox} ${css.filterBoxCupHot}`}>
                <div className={css.iconWrapper}>
                  <svg className={css.filterIcon} width='32' height='32'>
                    <use href={`${sprite}#icon-cupHot`}></use>
                  </svg>
                </div>
                <span>Kitchen</span>
              </div>
            </label>
          </li>
          <li className={css.equipmentFilterItem}>
            <label htmlFor='ac' className={css.filterLabel}>
              <div className={`${css.filterBox} ${css.filterBoxTv}`}>
                <div className={css.iconWrapper}>
                  <svg className={css.filterIcon} width='32' height='32'>
                    <use href={`${sprite}#icon-tv`}></use>
                  </svg>
                </div>
                <span className={css.filterSpanTV}>tv</span>
              </div>
            </label>
          </li>
          <li className={css.equipmentFilterItem}>
            <label htmlFor='ac' className={css.filterLabel}>
              <div className={`${css.filterBox} ${css.filterBoxShower}`}>
                <div className={css.iconWrapper}>
                  <svg className={css.filterIcon} width='32' height='32'>
                    <use href={`${sprite}#icon-phShower`}></use>
                  </svg>
                </div>
                <span>Bathroom</span>
              </div>
            </label>
          </li>
        </ul>

        {/* Vehicle Type Filters */}
        <h3 className={css.filterHeader}>Vehicle Type</h3>

        <hr className={css.customDivider} />

        <ul className={css.equipmentFilters}>
          <li className={css.equipmentFilterItem}>
            <label htmlFor='ac' className={css.filterLabel}>
              <div className={`${css.filterBox} ${css.filterBoxType}`}>
                <div className={css.iconWrapper}>
                  <svg className={css.filterIcon} width='32' height='32'>
                    <use href={`${sprite}#icon-biGrid1x2`}></use>
                  </svg>
                </div>
                <span>Van</span>
              </div>
            </label>
          </li>
          <li className={css.equipmentFilterItem}>
            <label htmlFor='ac' className={css.filterLabel}>
              <div className={`${css.filterBox} ${css.filterBoxType}`}>
                <div className={css.iconWrapper}>
                  <svg className={css.filterIcon} width='32' height='32'>
                    <use href={`${sprite}#icon-biGrid`}></use>
                  </svg>
                </div>
                <span>Fully Integrated</span>
              </div>
            </label>
          </li>
          <li className={css.equipmentFilterItem}>
            <label htmlFor='ac' className={css.filterLabel}>
              <div className={`${css.filterBox} ${css.filterBoxType}`}>
                <div className={css.iconWrapper}>
                  <svg className={css.filterIcon} width='32' height='32'>
                    <use href={`${sprite}#icon-biGrid3x3Gap`}></use>
                  </svg>
                </div>
                <span>Alcove</span>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <button className={css.filterSearchBtn} type='button'>
        Search
      </button>
    </div>
  )
}

export default FilterPanel
