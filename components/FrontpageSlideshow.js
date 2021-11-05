import React, { useState } from "react"
import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'
import { getFPSData } from "../utils/storyblok"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const FrontpageSlideshow = ({ data, level }) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }

  const [newsitems, setNewsitems] = useState([]);

  getFPSData(content._uid, content.lang, content.preview = false, 'newsitem').then(
    function (result) {
      setNewsitems(result.data.stories);
    });


  //returning the HTML
  return (

    <Carousel swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    ssr={true} // means to render carousel on server-side.
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={500}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={200}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px">
      {newsitems.map((newsitem) => (
        <div key={newsitem.content._uid}>{newsitem.content._uid}</div>
      )
      )}
    </Carousel>

  )
}

export default FrontpageSlideshow
