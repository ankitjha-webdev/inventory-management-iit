import React from 'react'
import { Link } from 'react-router-dom'
import { About } from '../components/About'
import Base from '../components/Base'
export const Home = () => {
  return (
    <Base>
  <div>
            <div className='text-emerald-600 mx-auto max-w-7xl'>
                <header className="bg-white">
                   
                    <div className="container px-6 py-16 mx-auto">
                        <div className="items-center lg:flex">
                            <div className="w-full lg:w-1/2">
                                <div className="lg:max-w-lg">
                                    <h1 className="text-2xl font-semibold text-gray-600 uppercase  lg:text-3xl">
                                   {/* " {!"data" ? "Loading..." : "data"}" */}

                                   Inventory Management
                                    
                                    </h1>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                                      Inventory Management System for is a web application that allows you to manage your inventory. You can add, edit, delete, and search for products.  You can also view your inventory in a table format. 
                                    </p>
                                    <Link to="/register">
                                    <button className=" w-full border-4 border-gray-100 px-6 py-4 skew-x-2 skew-y-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-emerald-600 shadow-lg rounded-md lg:w-auto hover:bg-emerald-400 focus:outline-none focus:bg-emerald-500">
                                        Signup for free!
                                    </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                <img
                                    className="w-full h-full lg:max-w-2xl"
                                    src="{login}"
                                    alt="Catalogue-pana.svg"
                                />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <About/>
            {/* <StackComp/> */}
        </div>
    </Base>    
  )
}