import React, { useState } from "react";

function Contactus() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    country: "1",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="" style={{backgroundColor:"#f7f6f5",marginTop:"-10px"}} >
      <h2 className="text-startpx-11 p-4 px-24 text-2xl font-bold leading-tight text-black mt-2">
        Contact us
      </h2>
      <main className="py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information Block */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-envelope text-xl"></i>
                  <span className="text-lg font-semibold">Email</span>
                </div>
                <span>Sychologyelevatorcompany@gmail.com</span>
              </div>
              <div className="bg-gray-100 p-4">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-phone text-xl"></i>
                  <span className="text-lg font-semibold">Phone</span>
                </div>
                <span>+9119796610</span>
              </div>
            </div>
            <div className="bg-gray-100 p-4 mt-4">
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-xl"></i>
                <span className="text-lg font-semibold">Office location</span>
              </div>
              <span>#007, Street name, Bigtown BG23 4YZ, England</span>
            </div>
            <div className="mt-4 w-full">
              <iframe
                title="office location"
                className="w-full h-80"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Block */}
          <div>
            <h2 className="pb-4 text-2xl">Leave a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fname" className="block text-gray-700">
                    Fname
                  </label>
                  <input
                    type="text"
                    className="block w-full mt-1 border-gray-300 rounded p-2"
                    id="fname"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lname" className="block text-gray-700">
                    Lname
                  </label>
                  <input
                    type="text"
                    className="block w-full mt-1 border-gray-300 rounded p-2"
                    id="lname"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full mt-1 border-gray-300 rounded p-2"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChang9876543210e={handleChange}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="phone" className="block text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  className="block w-full mt-1 border-gray-300 rounded p-2"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1234567890"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="country" className="block text-gray-700">
                  Country
                </label>
                <select
                  className="block w-full mt-1 border-gray-300 rounded p-2"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="1">USA</option>
                  <option value="2">Non USA</option>
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  className="block w-full mt-1 border-gray-300 rounded p-2"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              {/* <button type="submit" className="mt-4 bg-gray-900 text-white py-2 px-6 rounded">Send Message</button> */}
              <a href="/">
                <button
                  type="button"
                  className="rounded-md text-medium font-semibold bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Send Message
                </button>
              </a>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contactus;
