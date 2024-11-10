import React, { useState } from "react"
import PropTypes from "prop-types"
import css from "./CamperDetailPage.module.css"
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection.jsx"
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection.jsx"
import BookingForm from "../../components/BookingForm/BookingForm.jsx"
import sprite from "../../images/icons.svg"

const CamperDetailPage = () => {
  const [activeTab, setActiveTab] = useState("features")

  return (
    <section className={css.camperDetailPage}>
      <div className={`${css.container} ${css.camperDetailContainer}`}>
        {/* Info Section */}
        <div className={css.infoWrapper}>
          <p className={`${css.infoText} ${css.infoTextName}`}>Mavericks</p>
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

          <p className={`${css.infoText} ${css.infoTextPrice}`}>€8000.00</p>
        </div>

        <div className={css.camperInfoSection}>
          {/* Placeholder for Image Carousel */}
        </div>

        {/* Description */}
        <p className={css.camperDescription}>
          Embrace simplicity and freedom with the Mavericks panel truck, an
          ideal choice for solo travelers or couples seeking a compact and
          efficient way to explore the open roads. This no-frills yet reliable
          panel truck offers the essentials for a comfortable journey, making it
          the perfect companion for those who value simplicity and
          functionality.
        </p>

        {/* Tabs */}
        <div className={css.tabSection}>
          <button
            className={`${css.tabButton} ${
              activeTab === "features" ? css.activeTab : ""
            }`}
            onClick={() => setActiveTab("features")}
          >
            Features
            {activeTab === "features" && (
              <div className={css.activeTabIndicator}></div>
            )}
          </button>
          <button
            className={`${css.tabButton} ${
              activeTab === "reviews" ? css.activeTab : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
            {activeTab === "reviews" && (
              <div className={css.activeTabIndicator}></div>
            )}
          </button>
        </div>

        <hr className={css.customDivider} />

        {/* Updated Layout for Content */}
        <div className={css.layoutContainer}>
          <div className={css.mainContent}>
            {activeTab === "features" ? (
              <FeaturesSection />
            ) : (
              <ReviewsSection />
            )}
          </div>
          <aside className={css.sidebarContent}>
            <BookingForm />
          </aside>
        </div>
      </div>
    </section>
  )
}

export default CamperDetailPage
