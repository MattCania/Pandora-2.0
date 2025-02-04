import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CaptureHeader() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const headerButtons = [
    {
      label: "Services",
      content: ["Transaction Records", "Inventory", "Transaction Analytics"],
    },
    {
      label: "Products",
      content: ["Premium Privileges", "Banking Tool"],
    },
    {
      label: "About Us",
      content: ["Contacts", "FAQ", "Our Company"],
    },
  ];

  const toggleMenu = (index: any) => {
    setActiveDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <header
      className='flex flex-col justify-start items-center w-full border-b-1 border-b-gray-600 transition-all duration-300 overflow-hidden fixed backdrop-blur-md'
      style={{ height: activeDropdown !== null ? "16rem" : "2.5rem" }}
    >
      <div className='flex justify-center items-center w-full h-10 gap-96'>
        <div className='flex justify-start items-center h-10 gap-2 w-auto'>
          <Link
            className='flex justify-center items-center w-36 text-black text-2xl font-bold'
            to='/pandora'
          >
            Pandora
          </Link>
          {headerButtons.map((item, index) => (
            <button
              key={index}
              className='flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-black rounded-lg outline-none hover:outline-1 hover:outline-black hover:text-white hover:bg-gray-800 transition-all duration-500'
              onClick={() => toggleMenu(index)}
            >
              {item.label}
              <FontAwesomeIcon
                icon={activeDropdown === index ? faCaretUp : faCaretDown}
              />
            </button>
          ))}
          <a
            href='/'
            className='flex justify-center items-center w-auto px-4 h-4/5 gap-2 font-medium text-black rounded-lg outline-none focus:outline-1 focus:outline-black hover:bg-gray-800  hover:text-white transition-all duration-200'
          >
            Feedback
          </a>
        </div>

        <div className='flex justify-start items-center h-full w-auto gap-2'>
          <Link
            to='/'
            className='flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-black rounded-lg outline-none focus:outline-1 focus:outline-black hover:text-white hover:bg-gray-800 transition-all duration-200'
          >
            Contact Us
          </Link>
          <Link
            to='/pandora/register'
            className='flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-black border border-black outline-none focus:outline-1 focus:outline-black hover:bg-black hover:text-white transition-all duration-200'
          >
            Try it now
          </Link>
        </div>
      </div>

      {activeDropdown !== null && (
        <div className='flex justify-start items-center w-3/4 h-full gap-10 text-black py-4 px-10 overflow-hidden'>
          {headerButtons[activeDropdown].content.map((item, index) => (
            <a
              key={index}
              href=''
              className='flex justify-center items-center text-lg w-64 h-48 font-medium transition-all duration-200 rounded-md border-black border hover:bg-black hover:text-white'
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
