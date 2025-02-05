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
      className='flex flex-col justify-start items-center w-full border-b-1 border-emerald-950 transition-all duration-300 overflow-hidden fixed bg-emerald-700'
      style={{ height: activeDropdown !== null ? "16rem" : "2.5rem" }}
    >
      <div className='flex justify-center items-center w-full h-10 gap-96'>
        <div className='flex justify-start items-center h-10 gap-2 w-auto'>
          <Link
            className='flex justify-center items-center w-36 text-emerald-50 text-2xl font-bold'
            to='/pandora'
          >
            Pandora
          </Link>
          {headerButtons.map((item, index) => (
            <button
              key={index}
              className='flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-emerald-50 rounded-lg outline-none cursor-pointer hover:outline-1 hover:outline-emerald-600 hover:text-emerald-200 hover:bg-emerald-800 transition-all duration-500'
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
            className='flex justify-center items-center w-auto px-4 h-4/5 gap-2 font-medium text-emerald-50 rounded-lg outline-none focus:outline-1 focus:outline-emerald-600 hover:bg-emerald-800 hover:text-emerald-200 transition-all duration-200'
          >
            Feedback
          </a>
        </div>

        <div className='flex justify-start items-center h-full w-auto gap-2'>
          <Link
            to='/'
            className='flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-emerald-50 rounded-lg outline-none focus:outline-1 focus:outline-emerald-600 hover:text-emerald-200 hover:bg-emerald-800 transition-all duration-200'
          >
            Contact Us
          </Link>
          <Link
            to='/pandora/register'
            className='flex justify-center items-center w-32 h-4/5 gap-2 font-medium text-emerald-50 border rounded-sm border-emerald-600 outline-none focus:outline-1 focus:outline-emerald-950 hover:bg-emerald-950 hover:text-emerald-200 hover:border-emerald-950 transition-all duration-200'
          >
            Try it now
          </Link>
        </div>
      </div>

      {activeDropdown !== null && (
        <div className='flex justify-start items-center w-3/4 h-full gap-10 text-emerald-50 py-4 px-10 overflow-hidden'>
          {headerButtons[activeDropdown].content.map((item, index) => (
            <a
              key={index}
              href=''
              className='flex justify-center items-center text-lg w-64 h-48 font-medium transition-all duration-200 rounded-md border-emerald-950 border hover:bg-emerald-950 hover:text-emerald-200'
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
