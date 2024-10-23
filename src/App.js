import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { onlyMeImages } from "./images/onlyMe"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const randomizeFunction = () => {
  const randInt = parseInt(Math.random() * 100)
  return (-1) ** randInt
}
const randomizeArray = (arr) => {
  return [...arr].sort(randomizeFunction)
}

const randomizedArray = randomizeArray(onlyMeImages)

function App() {
  return (
    <div className="">
      <div>
        <p>Hi </p>
      </div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1024: 4, 1440: 5 }}
      >
        <Masonry columnsCount={4} gutter="10px">
          {randomizedArray.map((item) => {
            return (
              <LazyLoadImage
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
                src={item}
                key={item}
                alt={item}
              />
            )
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default App
