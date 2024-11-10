import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectFilters } from "../../redux/selectors"
import { updateFilters } from "../../redux/campersSlice"
import css from "./FilterPanel.module.css"
import sprite from "../../images/icons.svg"

const FilterPanel = () => {
  const dispatch = useDispatch()
  const filters = useSelector(selectFilters)

  const handleLocationChange = (e) => {
    const newLocation = e.target.value
    dispatch(updateFilters({ location: newLocation }))
  }

  const handleEquipmentToggle = (equipment) => {
    const normalizedEquipment = equipment.toLowerCase()
    const isAlreadySelected = filters.equipment.includes(normalizedEquipment)
    const updatedEquipment = isAlreadySelected
      ? filters.equipment.filter((eq) => eq !== normalizedEquipment)
      : [...filters.equipment, normalizedEquipment]

    dispatch(updateFilters({ equipment: updatedEquipment }))
  }

  const handleBodyTypeChange = (bodyType) => {
    dispatch(
      updateFilters({
        bodyType: filters.bodyType === bodyType ? "" : bodyType,
      })
    )
  }

  return (
    <div className={css.filtersPanel}>
      {/* Location Filter */}
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
            value={filters.location}
            onChange={handleLocationChange}
          />
          <svg className={css.locationIcon} width='20' height='20'>
            <use href={`${sprite}#icon-map`}></use>
          </svg>
        </div>
      </div>

      {/* Body Type Filters */}
      <p className={css.filtersTitle}>Filters</p>
      <div className={css.filtersSection}>
        <p className={css.filterHeader}>Body Type</p>
        <div className={css.equipmentFilters}>
          <div
            className={`${css.equipmentFilterItem} ${
              filters.bodyType === "motorhome" ? css.selected : ""
            }`}
            onClick={() => handleBodyTypeChange("motorhome")}
          >
            <div className={css.filterLabel}>
              <span>Motorhome</span>
            </div>
          </div>
          <div
            className={`${css.equipmentFilterItem} ${
              filters.bodyType === "campervan" ? css.selected : ""
            }`}
            onClick={() => handleBodyTypeChange("campervan")}
          >
            <div className={css.filterLabel}>
              <span>Campervan</span>
            </div>
          </div>
          <div
            className={`${css.equipmentFilterItem} ${
              filters.bodyType === "caravan" ? css.selected : ""
            }`}
            onClick={() => handleBodyTypeChange("caravan")}
          >
            <div className={css.filterLabel}>
              <span>Caravan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment Filters */}
      <div className={css.filtersSection}>
        <p className={css.filterHeader}>Equipment</p>
        <div className={css.equipmentFilters}>
          <div
            className={`${css.equipmentFilterItem} ${
              filters.equipment.includes("ac") ? css.selected : ""
            }`}
            onClick={() => handleEquipmentToggle("ac")}
          >
            <div className={css.filterBox}>
              <div className={css.iconWrapper}>
                <svg className={css.filterIcon}>
                  <use href={`${sprite}#icon-ac`} />
                </svg>
              </div>
              <span>AC</span>
            </div>
          </div>
          <div
            className={`${css.equipmentFilterItem} ${
              filters.equipment.includes("automatic") ? css.selected : ""
            }`}
            onClick={() => handleEquipmentToggle("automatic")}
          >
            <div className={css.filterBox}>
              <div className={css.iconWrapper}>
                <svg className={css.filterIcon}>
                  <use href={`${sprite}#icon-automatic`} />
                </svg>
              </div>
              <span>Automatic</span>
            </div>
          </div>
          <div
            className={`${css.equipmentFilterItem} ${
              filters.equipment.includes("kitchen") ? css.selected : ""
            }`}
            onClick={() => handleEquipmentToggle("kitchen")}
          >
            <div className={css.filterBox}>
              <div className={css.iconWrapper}>
                <svg className={css.filterIcon}>
                  <use href={`${sprite}#icon-kitchen`} />
                </svg>
              </div>
              <span>Kitchen</span>
            </div>
          </div>
          <div
            className={`${css.equipmentFilterItem} ${
              filters.equipment.includes("tv") ? css.selected : ""
            }`}
            onClick={() => handleEquipmentToggle("tv")}
          >
            <div className={css.filterBox}>
              <div className={css.iconWrapper}>
                <svg className={css.filterIcon}>
                  <use href={`${sprite}#icon-tv`} />
                </svg>
              </div>
              <span>TV</span>
            </div>
          </div>
          <div
            className={`${css.equipmentFilterItem} ${
              filters.equipment.includes("bathroom") ? css.selected : ""
            }`}
            onClick={() => handleEquipmentToggle("bathroom")}
          >
            <div className={css.filterBox}>
              <div className={css.iconWrapper}>
                <svg className={css.filterIcon}>
                  <use href={`${sprite}#icon-bathroom`} />
                </svg>
              </div>
              <span>Bathroom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterPanel
