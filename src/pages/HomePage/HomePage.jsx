import React from "react"
import css from "./HomePage.module.css"

const HomePage = () => {
  return (
    <section className={css.hero}>
      <h1 className={css.titleHero}>Campers of your dreams</h1>
      <p className={css.paragraphHero}>
        You can find everything you want in our catalog
      </p>
      <button type='button' className={css.heroBtn}>
        View Now
      </button>
    </section>
  )
}

export default HomePage
