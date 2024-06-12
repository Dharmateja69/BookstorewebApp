import React from 'react'
const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-xl font-semibold mb-2">Send us a message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Reach out to us</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13H9a3 3 0 0 1 0-6h3a3 3 0 0 1 0 6z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"></path>
              </svg>
              <p className="text-gray-700">123 Main St, Cityville, State, 12345</p>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.17v.67c0 2.62-1.55 4.99-3.97 6.09m0 0a9.01 9.01 0 0 1-8.06 0m8.06 0A9.01 9.01 0 0 0 3 12.84v-.67m0 0C6.46 11.11 10.67 10 12 10c1.33 0 5.54 1.11 9 2.17v.67"></path>
              </svg>
              <p className="text-gray-700">info@example.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 7v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7"></path>
              </svg>
              <p className="text-gray-700">+123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact