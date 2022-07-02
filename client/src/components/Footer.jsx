import { Link } from 'react-router-dom'
export const Footer = () => {
    const openInNewTab = url => {
        // 👇️ setting target to _blank with window.open
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <footer className="bg-emerald-500 text-gray-100 h-28">  
            <div className="container  px-6 py-4">
                <div className="flex flex-wrap justify-center "> 
                    <div className="w-full lg:w-auto text-center lg:text-left">
                        <p className="text-sm leading-loose">
                            © 2022 All rights reserved. 
                        </p> 
                    </div>
                    <div className="w-full lg:w-auto text-center text-gray-100 mx-2 lg:text-left">
                        <p className="text-sm leading-loose">
                              Made with <span className="text-white font-semibold bg-white rounded-full  m-1">❤</span> by <Link to="
                            https://www.linkedin.com/in/ankitkumarcse/" className="text-gray-100 font-bold">Ankit Kumar</Link>
                        </p>
                      <div className='grid grid-flow-col-dense  mt-2 w-auto'>
                       <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" onClick={() => openInNewTab('https://github.com/ankitjha-webdev/')}  className='bg-white w-8 h-8 cursor-pointer rounded-full' />
                       <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt='' onClick={() => openInNewTab('https://www.linkedin.com/in/ankitkumarcse/')}  className='bg-white -ml-20 w-8 h-8 cursor-pointer rounded-full' />
                      </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}