import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { randomizeArray } from "../helpers"

const SectionComponent = ({
  imagesArray,
  shouldRandomize,
  title,
  CoverImageComponent,
}) => {
  const newImagesArray = shouldRandomize
    ? randomizeArray(imagesArray)
    : imagesArray
  return (
    <div>
      {CoverImageComponent}
      <div className="text-center text-[40px] lg:text-[60px] text-white bg-[#232323] font-bold ">
        {title}
      </div>
      <div className="px-[10px] py-[10px]">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1024: 4, 1440: 5 }}
        >
          <Masonry columnsCount={4} gutter="10px">
            {newImagesArray.map((item) => {
              return (
                <LazyLoadImage
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                  src={item}
                  key={item}
                  alt={item}
                  height={800}
                  className="rounded-lg"
                />
              )
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default SectionComponent
