import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-gray-100 text-gray-600">
        
        <section className="flex justify-center lg:justify-between p-4 border-b border-gray-300">
          {/* <div className="hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div> */}
          <div className="flex  space-x-4">
            <a href="#" className="text-gray-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-gray-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-600">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container mx-auto px-4 py-6 text-center md:text-left text-start">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <span>
            <img src="logo.png" alt="React Logo" width="200" style={{borderRadius:"10px"}}/>
          </span>
              <div className="mb-4">
                <h6 className="text-uppercase font-bold mb-4">
                Sychology Elevator
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              
             
              
              <div className="mb-4">
                <h6 className="text-uppercase font-bold mb-4">Useful Links</h6>
                <p>
                  <a href="#!" className="text-gray-600">Home</a>
                </p>
                <p>
                  <a href="#!" className="text-gray-600">About</a>
                </p>
                <p>
                  <a href="#!" className="text-gray-600">Services</a>
                </p>
                <p>
                  <a href="#!" className="text-gray-600">Elevators</a>
                </p>
              </div>
              
              <div className="mb-4">
              <h6 className="text-uppercase font-bold mb-4">Contact</h6>
                <p> HNO, 848, CHANDRA LOK COLONY, MODINAGAR ROAD, Modinagar Hapur,
                HAPUR, Hapur, Hapur, Uttar Pradesh, 245101</p>
                <p>Sychologyelevatorcompany@gmail.com</p>
                <p>+ 9119796610</p>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="text-center p-4 bg-gray-200">
          © 2021 Copyright:
          <a className="font-bold text-gray-600" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div> */}
      </footer>
    </div>
  )
}

export default Footer
