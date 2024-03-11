import React from 'react'
import heroImage from '../assets/heroImage.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import {} from "react-icons/fa"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full'>
      <div className='max-w-screen-xl mx-auto h-full flex flex-col items-center justify-between px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-screen'>
          <h2 className='text-4xl sm:text-7xl font-bold text-#1E3851'>Hi, I am Shreyansh</h2>
          <p className='text-gray-500 py-4 text-xl sm:text-3xl'>A Software Developer</p>
          <div>
            <button className='font-general-medium 
            flex justify-center items-center w-36 sm:w-48 mt-12 
            mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500'>
                Portfolio
              <span className='ml-1'>
                <MdKeyboardArrowRight />
              </span>
            </button>
            {/* download cv */}

          </div>
          <div className='flex md:mt-10'>
          <ul class="flex gap-4 sm:gap-8">
           
                <a href="https://github.com/Shreyansh99" target="__blank" class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                  <i class="text-xl sm:text-2xl md:text-3xl">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                        </path>
                        </svg>
                        </i>
                        </a>
                        <a href="https://twitter.com/Shreyan67748546" target="__blank" class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                          <i class="text-xl sm:text-2xl md:text-3xl">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                </path>
                                </svg>
                                </i>
                                </a>
                                <a href="https://www.linkedin.com/in/shreyansh-kumar-basak-598ba4190/" target="__blank" class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300">
                                  <i class="text-xl sm:text-2xl md:text-3xl">
                                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                        </path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2">
                                          </circle>
                                          </svg></i>
                                          </a>
                                          </ul>
          </div>
        </div>
        <div>
          <img className='md:w-max mx-auto w-3/4' src={heroImage} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Home