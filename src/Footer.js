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
                  <i className="fas fa-gem mr-2"></i>Sychology Elevator
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              
              {/* <div className="mb-4">
                <h6 className="text-uppercase font-bold mb-4">
                  Products
                </h6>
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
              </div> */}
              
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
                <p><i className="fas fa-home mr-2"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-2"></i> Sychologyelevatorcompany@gmail.com</p>
                <p><i className="fas fa-phone mr-2"></i> + 9119796610</p>
                {/* <p><i className="fas fa-print mr-2"></i> + 01 234 567 89</p> */}
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
