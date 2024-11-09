// import React from "react"
// import PropTypes from "prop-types"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import css from "./ImageCarousel.module.css" // Your custom styles (optional)

// const ImageCarousel = ({ gallery }) => {
//   // React Slick settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   }
//   return (
//     <div className={css.carouselWrapper}>
//       <Slider {...settings}>
//         {gallery.map((image, index) => (
//           <div key={index} className={css.imageSlide}>
//             <img
//               src={image.original}
//               alt={`Gallery image ${index + 1}`}
//               className={css.image}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   )
// }

// ImageCarousel.propTypes = {
//   gallery: PropTypes.arrayOf(
//     PropTypes.shape({
//       thumb: PropTypes.string.isRequired,
//       original: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// }

// export default ImageCarousel
