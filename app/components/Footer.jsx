import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-8 py-12 mt-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
        <h2 className="text-2xl font-bold mb-4">DDNYC</h2>
        <p className="text-gray-400 text-sm">
            Creative design agency located in the heart of NYC.  
            We build brands, craft experiences, and drive results.
        </p>
        </div>

            <div>
            <h3 className="text-xl font-semibold mb-4">Blogs & News</h3>
            <ul className="space-y-3">
                 <li>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                        How design impacts conversions
                    </a>
                    </li>
                    <li>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                        Top 5 UI/UX trends for 2025
                    </a>
                    </li>
                    <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition">
                    Branding strategies that work
                </a>
                </li>
            </ul>
            </div>

    <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition">Work</a></li>

                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition">Agency</a></li>

                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition">Services</a></li>
                
                <li><a href="#" className="text-gray-300 hover:text-orange-500 transition">Industry</a></li>
            </ul>
    </div>
    </div>

    <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © 2025 DDNYC. All rights reserved.
    </div>
</footer>

  )
}

export default Footer