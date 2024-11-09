import React, { useState, useEffect } from "react"
import css from "./CatalogPage.module.css"
import FilterPanel from "../../components/FilterPanel/FilterPanel"
import CamperCard from "../../components/CamperCard/CamperCard"
import "../../index.css"

const CatalogPage = () => {
  const [campers, setCampers] = useState([])
  const [filteredCampers, setFilteredCampers] = useState([])

  useEffect(() => {
    fetch("https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers")
      .then((response) => response.json())
      .then((data) => {
        setCampers(data)
        setFilteredCampers(data)
      })
      .catch((error) => console.error("Error fetching campers:", error))
  }, [])

  // ... rest of the component
}

export default CatalogPage
