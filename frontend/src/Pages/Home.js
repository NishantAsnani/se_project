import React from 'react'
import Dairy2 from  '../Images/dairy_img2.webp'



 

const Home = () => {

  return (
      <React.Fragment>
        <section className='home_page'>
          <div className='background'>
            <h1 className='heading'>Dairy Go</h1>
            <p className='para'>Best solutions for your grocery dairy needs and parcel services.....</p>

            <div className='home_img_container'>
              <img src={Dairy2} className='home_img' alt="" />
            </div>

            </div>
        </section>
      </React.Fragment>  
  )
}

export default Home