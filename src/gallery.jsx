import React from "react"
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component"

const Gallery = ({ images, scrollPosition }) => (
  <>
    {images.map((imageSrc) => (
      <LazyLoadImage
        key={imageSrc}
        alt={imageSrc}
        // height={image.height}
        // Make sure to pass down the scrollPosition,
        // this will be used by the component to know
        // whether it must track the scroll position or not
        // scrollPosition={scrollPosition}
        src={imageSrc}
        // width={image.width}
      />
    ))}
  </>
)
export default trackWindowScroll(Gallery)
