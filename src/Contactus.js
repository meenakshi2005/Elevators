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
    <div
      className=""
      style={{ backgroundColor: "#f7f6f5", marginTop: "-10px" }}
    >
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
                  {/* <i className="fas fa-envelope text-xl"></i> */}
                  <span className="text-lg font-semibold">Email</span>
                </div>
                <span>Sychologyelevatorcompany@gmail.com</span>
              </div>
              <div className="bg-gray-100 p-4">
                <div className="flex items-center space-x-2">
                  {/* <i className="fas fa-phone text-xl"></i> */}
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
              <span>
                HNO, 848, CHANDRA LOK COLONY, MODINAGAR ROAD, Modinagar Hapur,
                HAPUR, Hapur, Hapur, Uttar Pradesh, 245101
              </span>
            </div>
            <div className="mt-4 w-full">
              <iframe 
              title="office location"
              className="w-full h-80"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3498.3925944256953!2d77.75696417550466!3d28.737693175607482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQ0JzE1LjciTiA3N8KwNDUnMzQuMyJF!5e0!3m2!1sen!2sin!4v1727760937129!5m2!1sen!2sin"></iframe>
          
            </div>
          </div>

          {/* Contact Form Block */}
          <div className="m-10">
            <h2 className="pb-4 text-2xl">Leave a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label htmlFor="name" className="block text-gray-700">
                  Full Name
                </label>
                <input
                  type="name"
                  className="block w-full mt-1 border-gray-300 rounded p-2"
                  id="name"
                  name="neme"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
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
                  onChange={handleChange}
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
  <option value="2">Canada</option>
  <option value="3">UK</option>
  <option value="4">Australia</option>
  <option value="5">India</option>
  <option value="6">Germany</option>
  <option value="7">France</option>
  <option value="8">Japan</option>
  <option value="9">China</option>
  <option value="10">Brazil</option>
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
              <a href="/">
                <button
                  type="button"
                  className="rounded-md text-medium m-6 font-semibold bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
