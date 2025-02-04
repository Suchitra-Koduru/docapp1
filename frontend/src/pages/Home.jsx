// import React from 'react'
// import Header from '../components/Header'
// import SpecialityMenu from '../components/SpecialityMenu'
// import TopDoctors from '../components/TopDoctors'
// import Banner from '../components/Banner'

// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <SpecialityMenu />
//       <TopDoctors />
//       <Banner />
//     </div>
//   )
// }

// export default Home  

import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      {/* <div className="relative bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Find the Best Doctors for You</h1>
        <p className="mt-3 text-lg">
          Book appointments with experienced doctors & specialists near you.
        </p>
        <button className="mt-5 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Book Appointment
        </button>
      </div> */}

      {/* Main Sections */}
      <div className="container mx-auto px-4 mt-10">
        <SpecialityMenu />
        <TopDoctors />
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          What Our Patients Say
        </h2>
        <div className="mt-8 flex justify-center space-x-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md w-1/3">
            <p className="text-gray-600">
              "Amazing service! The doctor was very kind and helpful."
            </p>
            <p className="mt-3 text-blue-600 font-semibold">- Rahul S.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md w-1/3">
            <p className="text-gray-600">
              "Booking an appointment was so easy and quick!"
            </p>
            <p className="mt-3 text-blue-600 font-semibold">- Priya M.</p>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <Banner />

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-5 mt-10">
        <p>&copy; 2025 DocApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
