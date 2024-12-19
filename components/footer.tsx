
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function Footer() {
    return (
        <div className="text-gray-600 bg-black body-font">
            {/**Main Footer div */}
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            {/**socail media link div */}
          <div className="w-64 flex md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                target="_blank"
                
                className="text-gray-600 ml-1  p-2 rounded-full hover:bg-gray-200"
              >
                <IoLogoTwitter/>


              </a>
              <a
                href="https://facebook.com/knyttneve"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-600 ml-1 p-2 rounded-full hover:bg-gray-200"
                >
               
               <IoLogoFacebook />
              </a>
              <a
                href="https://www.linkedin.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-600 ml-1 p-2 rounded-full hover:bg-gray-200"
                >
                  
                <IoLogoLinkedin />
                 </a>
             
              <a
                href="https://youtube.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1  p-2 rounded-full hover:bg-gray-200"
                target="_blank"
              >
               <IoLogoYoutube />
              </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-10">
                Find A Store
              </h2>
              <nav className="list-none mb-10">
                <li className="my-3">
                  <a className="text-white hover:text-gray-800 ">Become A Member</a>
                </li>
                <li className="my-3">
                  <a className="text-white hover:text-gray-800 ">SignUp for Email</a>
                </li>
                <li className="my-3">
                  <a className="text-white hover:text-gray-800 ">Send Us Facebook</a>
                </li>
                <li className="my-3">
                  <a className="text-white hover:text-gray-800">Student Discounts</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-10">
                Get Help
              </h2>
              <nav className="list-none mb-10">
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Order Status</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Delivery</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Returns</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Payment Options</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Contact Us on Nike.com Inquiries</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Contact Us on All Other Inquiries</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-10">
               About Nike
              </h2>
              <nav className="list-none mb-10">
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800 my-6">News</a>
                </li >
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Careers</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Investors</a>
                </li>
                <li className="my-3">
                  <a className="text-gray-600 hover:text-gray-800">Sustainability</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <IoLocationSharp className="text-white text-xl" />
            <span className="text-xl text-white mx-2">India</span>
            <p className="text-gray-500 text-sm text-center sm:text-left p-1">
            © 2023 Nike, Inc. All Rights Reserved
              
            </p>
            <div className="flex  items-center ml-auto"> 
                <ul className="flex space-x-6">
                <li>
                  <a className="text-gray-600 hover:text-gray-800 my-6">News</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Careers</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Investors</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Sustainability</a>
                </li>
             </ul>
            </div>
              
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                

          </div>
        </div>
     </div>    
      
    );
  }
  