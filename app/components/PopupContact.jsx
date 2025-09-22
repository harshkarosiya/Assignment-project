"use client"
import React, { useState, useEffect } from "react";

function PopupContact() {
    const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setIsOpen(false);
  }
 
 
  return (

    <div>

         {isOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold text-center mb-4">
              Contact Us
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border rounded"
                rows={4}
                required
              />
              <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    
    </div>

  )
}

export default PopupContact