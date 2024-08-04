import React from 'react'

const Landing = () => {
  return (
    <div className="pt-2 gradient">
    <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p className="uppercase tracking-loose w-full text-white">Do you want to extract data of any products?</p>
        <h1 className="my-4 text-5xl font-bold leading-tight text-white">
        My Scraper is here for scraping data .
                </h1>
        <p className="leading-normal text-2xl mb-8 text-white">
        Join us and enjoy the scraping process!                    </p>
        <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Tutorial
        </button>
      </div>
      <div className="w-full md:w-3/5 py-6 text-center">
        <img className="w-full md:w-4/5 z-50" src="homeSpider.png" alt="mySpider" />
      </div>
    </div>
  </div>
  )
}

export default Landing;