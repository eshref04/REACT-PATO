import React from 'react'
import "./StorySection.css"
import { Link } from 'react-router-dom'

const StorySection = () => {
  return (
    <section className='story__section'>
       <div style={{paddingTop:"100px",paddingBottom:"100px"}} className="container d-flex justify-content-around align-items-center">
        <div className='story__section__left d-flex flex-column  align-items-center'> 
          <span>Italian Restaurant</span>
          <h3>WELCOME</h3>
          <p className='text-center'>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed <br /> fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis <br /> ligula sem id neque.</p>
          <Link>OUR STORY <i class="fa-solid fa-arrow-right"></i></Link>
        </div>

        <div className='story__section__right'>
       <img style={{borderRadius:"8px"}} width={"390px"} height={"390px"} src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg.webp" alt="" />
        </div>
       </div>
    </section>
  )
}

export default StorySection
