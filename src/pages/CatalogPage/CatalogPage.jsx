import React from "react"
import css from "./CatalogPage.module.css"
import FilterPanel from "../../components/FilterPanel/FilterPanel"
import CamperCard from "../../components/CamperCard/CamperCard"
import "../../index.css"

const CatalogPage = () => {
  return (
    <section className={css.catalogPage}>
      <div className={`${css.container} ${css.catalogContainer}`}>
        <aside className={css.filterPanel}>
          <FilterPanel />
        </aside>

        <div className={css.camperList}>
          {[1, 2, 3, 4].map((id) => (
            <CamperCard key={id} />
          ))}
          <button className={css.loadMoreButton} type='button'>
            Load More
          </button>
        </div>
      </div>
    </section>
  )
}

export default CatalogPage
