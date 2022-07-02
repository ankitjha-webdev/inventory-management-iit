import React from 'react'
import Base from '../components/Base'
import Modal from '../components/Model'
export const Dashboard = () => {
  return (

    <Base>


      <div className="mb-auto h-screen">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 p-3">
              <div className="bg-white border-2 border-gray-300 rounded-lg shadow-md">
                <div className="flex flex-wrap p-5">
                  <div className="w-full p-3">
                    <h3 className="text-gray-900 font-bold text-xl mb-2">
                      Dashboard
                    </h3>
                    <p className="text-gray-600 text-base">
                      Inventory Dashboard for the entire college. This is where you can see all of the inventory for the college. You can also see the current inventory for each department.
                    </p>
                  </div>
                  {/* Button add inventory */}
                
                  <Modal/>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  )
}
