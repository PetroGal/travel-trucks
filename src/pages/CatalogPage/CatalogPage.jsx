import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCampers, setPage, clearCampers } from "../../redux/campersSlice"
import {
  selectCampersData,
  selectLoadingState,
  selectFilters,
  selectHasMoreState,
} from "../../redux/selectors"
import css from "./CatalogPage.module.css"
import FilterPanel from "../../components/FilterPanel/FilterPanel"
import CamperCard from "../../components/CamperCard/CamperCard"
import Loader from "../../components/Loader/Loader.jsx"

const CatalogPage = () => {
  const dispatch = useDispatch()
  const campers = useSelector(selectCampersData)
  const loading = useSelector(selectLoadingState)
  const filters = useSelector(selectFilters)
  const hasMore = useSelector(selectHasMoreState)
  const page = useSelector((state) => state.campers.page)

  useEffect(() => {
    dispatch(clearCampers())
    const params = new URLSearchParams({
      ...filters,
      page,
      limit: 4,
    }).toString()
    dispatch(fetchCampers(params))
  }, [dispatch, filters, page])

  const handleLoadMore = () => {
    dispatch(setPage(page + 1))
  }

  return (
    <section className={css.catalogPage}>
      <div className={`${css.container} ${css.catalogContainer}`}>
        <aside className={css.filterPanel}>
          <FilterPanel />
        </aside>

        <div className={css.camperList}>
          {loading ? (
            <Loader />
          ) : (
            <>
              {Array.isArray(campers) && campers.length > 0 ? (
                campers.map((camper, index) => (
                  <CamperCard key={`${camper.id}-${index}`} camper={camper} />
                ))
              ) : (
                <p>No campers available.</p>
              )}
              {hasMore && !loading && (
                <button
                  className={css.loadMoreButton}
                  type='button'
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default CatalogPage
