import React, { useState } from "react"
import PropTypes from "prop-types"
import css from "./FilterPanel.module.css"
import sprite from "../../images/icons.svg"

const FilterPanel = ({ filters, setFilters }) => {
  const [location, setLocation] = useState(filters.location || "")

  const handleLocationChange = (e) => {
    const newLocation = e.target.value
    setLocation(newLocation)
    setFilters((prevFilters) => ({
      ...prevFilters,
      location: newLocation,
    }))
  }

  const handleEquipmentToggle = (equipment) => {
    setFilters((prevFilters) => {
      const normalizedEquipment = equipment.toLowerCase()
      const isAlreadySelected =
        prevFilters.equipment.includes(normalizedEquipment)
      return {
        ...prevFilters,
        equipment: isAlreadySelected
          ? prevFilters.equipment.filter((eq) => eq !== normalizedEquipment)
          : [...prevFilters.equipment, normalizedEquipment],
      }
    })
  }

  const handleBodyTypeChange = (bodyType) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      bodyType: prevFilters.bodyType === bodyType ? "" : bodyType,
    }))
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
        <p className={css.filterHeader}>Vehicle Equipment</p>

        <hr className={css.customDivider} />

        <ul className={css.equipmentFilters}>
          <li className={css.equipmentFilterItem}>
            <label htmlFor='ac' className={css.filterLabel}>
              <div
                className={`${css.filterBox} ${css.filterBoxWind}`}
                onClick={() => handleEquipmentToggle("ac")}
              >
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
            <label htmlFor='automatic' className={css.filterLabel}>
              <div
                className={`${css.filterBox} ${css.filterBoxDiagram}`}
                onClick={() => handleEquipmentToggle("Automatic")}
              >
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
            <label htmlFor='kitchen' className={css.filterLabel}>
              <div
                className={`${css.filterBox} ${css.filterBoxCupHot}`}
                onClick={() => handleEquipmentToggle("Kitchen")}
              >
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
            <label htmlFor='tv' className={css.filterLabel}>
              <div
                className={`${css.filterBox} ${css.filterBoxTv}`}
                onClick={() => handleEquipmentToggle("tv")}
              >
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
            <label htmlFor='bathroom' className={css.filterLabel}>
              <div
                className={`${css.filterBox} ${css.filterBoxShower}`}
                onClick={() => handleEquipmentToggle("Bathroom")}
              >
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
            <label htmlFor='van' className={css.filterLabel}>
              <div
                className={`${css.filterBox} ${css.filterBoxType}`}
                onClick={() => handleEquipmentToggle("Van")}
              >
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
            <label htmlFor='fully-integrated' className={css.filterLabel}>
              <div
                className={`${css.filterBox} ${css.filterBoxType}`}
                onClick={() => handleEquipmentToggle("Fully Integrated")}
              >
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
            <label htmlFor='alcove' className={css.filterLabel}>
              <div
                className={`${css.filterBox} ${css.filterBoxType}`}
                onClick={() => handleBodyTypeChange("alcove")}
              >
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

FilterPanel.propTypes = {
  filters: PropTypes.shape({
    location: PropTypes.string,
    equipment: PropTypes.arrayOf(PropTypes.string),
  }),
  setFilters: PropTypes.func.isRequired,
}

export default FilterPanel
