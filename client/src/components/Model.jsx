import React from "react";
import { Link } from "react-router-dom";
// import close from "../images/close.svg";
// import livingRoom from "../images/living-room.svg";
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="w-auto p-3 transition ease-in duration-300"  onClick={() => setShowModal(true)} >
        <span className="bg-emerald-500 transition ease-in duration-300 cursor-pointer hover:bg-emerald-700 shadow-2xl border-2 border-emerald-50 text-white font-bold py-2 px-4 rounded">
          Add Inventory
        </span>
      </div>
      {showModal ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >

            {/*content*/}

            <div
              class="
        border-t-8
        border-emerald-500
          flex flex-col
          bg-white
          rounded
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          w-50
          max-w-md
        "
            >
              <div class="font-medium self-center text-xl sm:text-3xl text-gray-600">
                Web Home Automation
              </div>
              <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
                Enter your details to create a room
              </div>

              <div class="mt-10">
                <form enctype="multipart/form-data">
                  <div class="flex flex-col mb-5 ">
                    <label
                      for="name"
                      class="mb-1 text-xs tracking-wide text-gray-600"
                    >Name:</label
                    >
                    <div class="relative">
                      <div
                        class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                      >
                        <i class="fas fa-at text-emerald-500"></i>
                      </div>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        class="
                    text-sm
                    placeholder-gray-500
                    rounded
                    pl-2
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-emerald-400
                  "
                        placeholder="Enter the inventory name"
                      />
                    </div>
                  </div>

                  <div class="flex flex-col mb-5">
                    <label
                      for="Description"
                      class="mb-1 text-xs tracking-wide text-gray-600"
                    >Description:</label
                    >
                    <div class="relative">
                      <div
                        class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                      >
                        <i class="fas fa-at text-emerald-500"></i>
                      </div>

                      <input
                        id="Description"
                        type="text"
                        name="email"
                        class="
                    text-sm
                    placeholder-gray-500
                    rounded
                    pl-2
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-emerald-400
                  "
                        placeholder="Enter the inventory description"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col mb-6">
                    <label
                      for="text"
                      class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Type:</label
                    >
                    <div class="relative">
                      <div
                        class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                      >
                        <span>
                          <i class="fas fa-lock text-emerald-500"></i>
                        </span>
                      </div>

                      <input
                        id="text"
                        type="text"
                        name="Number of items"
                        class="
                    text-sm
                    placeholder-gray-500
                    pl-2
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-emerald-400
                  "
                        placeholder="Enter the item type"
                      />
                    </div>
                  </div>
                  <div class="flex flex-col mb-6">
                    <label
                      for="file"
                      class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                    >Image:</label
                    >
                    <div class="relative">
                      <div
                        class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    rounded
                    h-full
                    w-10
                    text-gray-400
                  "
                      >
                        <span>
                          <i class="fas fa-lock text-emerald-500"></i>
                        </span>
                      </div>

                      <input
                        id="file"
                        type="file"
                        name="Upload image"
                        className="
                        bg-gray-200
                        pl-2
                        border border-gray-400
                          
                        inline-block
                    text-sm
                    rounded
                    
                    w-full
                    py-2  " />
                    </div>
                  </div>


                  <div class="flex w-full">
                    <button
                      type="submit"
                      class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  // focus:outline-none
                  text-white
                  text-sm
                  sm:text-base
                  bg-emerald-600
                  hover:bg-emerald-400
                  py-2
                  rounded
                  w-full
                  transition
                  duration-150
                  ease-in
                  mx-3
                "
                    >
                      <span class="mr-2 uppercase">Create</span>
                      <span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </button>
                    <button
                      className=" flex
                    mt-2
                    items-center
                    justify-center
                    // focus:outline-none
                    text-white
                    text-sm
                    rounded
                    sm:text-base
                    bg-emerald-600
                    hover:bg-emerald-400
                    py-2
                    w-full
                    transition-all
                    duration-150
                    ease-in"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >

                      <span class="mr-2 uppercase">Close</span>
                      {/* <img src={close} className="h-6 w-6" alt="" srcset="" /> */}
                      <svg fill="#ffffff" viewBox="0 0 30 30" className="h-6 w-6"  >
                        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}