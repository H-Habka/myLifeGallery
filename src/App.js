import React from "react"
import { onlyMeImages } from "./images/onlyMe"
import "react-lazy-load-image-component/src/effects/blur.css"
import SectionComponent from "./sectionComponent"
import { familyAndFriends } from "./images/familyAndFriends"

function App() {
  return (
    <div className="">
      <SectionComponent
        CoverImageComponent={
          <div className=" h-screen bg-fixed bg-cover bg-center bg-[url(https://i.imgur.com/lc2npm0.jpeg)]	md:bg-[url(https://i.imgur.com/nEZHIK2.jpeg)]"></div>
        }
        imagesArray={onlyMeImages}
        shouldRandomize={true}
        title="HOSSIEN HABKA"
      />
      <SectionComponent
        CoverImageComponent={
          <div className=" h-screen bg-fixed bg-cover bg-center bg-[url(https://i.imgur.com/NDB8bTn.jpeg)]	"></div>
        }
        imagesArray={familyAndFriends}
        shouldRandomize={true}
        title="FAMILY & FRIENDS"
      />
    </div>
  )
}

export default App
