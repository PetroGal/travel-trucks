import React, { useState, useEffect, useCallback } from "react"
import css from "./CatalogPage.module.css"
import FilterPanel from "../../components/FilterPanel/FilterPanel"
import CamperCard from "../../components/CamperCard/CamperCard"
import Loader from "../../components/Loader/Loader.jsx"
import "../../index.css"

const CatalogPage = () => {
  const [campers, setCampers] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const itemsPerPage = 4

  const [filters, setFilters] = useState({
    location: "",
    bodyType: "",
    equipment: [],
  })

  const fetchFilteredCampers = useCallback(() => {
    setLoading(true)
    const params = new URLSearchParams()
    if (filters.location) params.append("location", filters.location)
    if (filters.bodyType) params.append("form", filters.bodyType)

    if (filters.equipment.includes("ac")) params.append("AC", "true")
    if (filters.equipment.includes("automatic"))
      params.append("transmission", "automatic")
    if (filters.equipment.includes("kitchen")) params.append("kitchen", "true")
    if (filters.equipment.includes("tv")) params.append("TV", "true")
    if (filters.equipment.includes("bathroom"))
      params.append("bathroom", "true")

    const apiUrl = `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${params.toString()}&page=${page}&limit=${itemsPerPage}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data)
        if (data && Array.isArray(data.items)) {
          if (data.items.length < itemsPerPage) {
            setHasMore(false)
          }
          setCampers((prevCampers) => [...prevCampers, ...data.items])
        } else if (Array.isArray(data)) {
          if (data.length < itemsPerPage) {
            setHasMore(false)
          }
          setCampers((prevCampers) => [...prevCampers, ...data])
        } else {
          setHasMore(false)
        }
      })
      .catch((error) => {
        console.error("Error fetching campers:", error)
      })
      .finally(() => setLoading(false))
  }, [filters, page])

  useEffect(() => {
    setCampers([])
    setPage(1)
    setHasMore(true)
  }, [filters])

  useEffect(() => {
    fetchFilteredCampers()
  }, [fetchFilteredCampers])

  console.log("Campers state before rendering:", campers)

  const loadMoreCampers = () => {
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <section className={css.catalogPage}>
      <div className={`${css.container} ${css.catalogContainer}`}>
        <aside className={css.filterPanel}>
          <FilterPanel filters={filters} setFilters={setFilters} />
        </aside>

        <div className={css.camperList}>
          {loading ? (
            <Loader />
          ) : (
            <>
              {Array.isArray(campers) && campers.length > 0 ? (
                campers.map((camper, index) => {
                  return (
                    <CamperCard key={`${camper.id}-${index}`} camper={camper} />
                  )
                })
              ) : (
                <p>No campers available.</p>
              )}
              {hasMore && !loading && (
                <button
                  className={css.loadMoreButton}
                  type='button'
                  onClick={loadMoreCampers}
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
