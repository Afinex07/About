import React from 'react'
import herome from '../public/hero-img.png'
import { motion } from 'framer-motion'
export default function hero() {
  return (
    <div>
      <div className="bg-primary pt-5">
  <div className="container">

      <div className="row align-items-center no-gutters">
          <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="py-5 py-lg-0">
                  <motion.h1 className="text-white" style={{fontWeight:600, maxwidth:'2000px'}}
                  initial={{ opacity: 0, y: -50}}
                  animate={{ opacity: 1, y: 0}}
                  transition={{ duration: 5}}
                  >Welcome to Geeks UI Learning Application
                  </motion.h1>
                  <motion.p className="text-white-50 mb-4 lead" style={{fontWeight:600}}
                  initial={{ opacity: 0, y: 50}}
                  animate={{ opacity: 1, y: 0}}
                  transition={{ duration: 5, delay: 2}}
                  >
                      Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.
                  </motion.p>
                  <a href="pages/course-filter-list.html" className="btn btn-success mb-5 mr-1">Browse Courses</a>
                  <a href="pages/sign-in.html" className="btn btn-white mb-5" style={{background:"white"}}>Are You Instructor?</a>
              </div>
          </div>
          <div className=" col-xl-7 col-lg-6 col-md-12 text-lg-right text-center">
               {/* <img src="../public/hero-img.png" alt="" class="img-fluid"/> */}
               <img src={herome} alt="HeroImage"  className='img-fluid'/>
          </div>
      </div>
  </div>
 </div>
    
    </div>
  )
}
