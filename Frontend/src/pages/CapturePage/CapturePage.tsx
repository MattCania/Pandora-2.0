import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faHouse,
  faFolderOpen,
  faBox,
  faChartLine,
  faBuilding,
  faFolder,
  faBank,
} from "@fortawesome/free-solid-svg-icons";

export default function CapturePage() {
  const offers: any = [
    {
      label: "Transaction Records",
      description:
        "Record Transactions ranging from expenses, purchases, and inventory",
      icon: faFolder,
    },
    {
      label: "Inventory",
      description: "Record and manage inventory purchases, stock, and sold",
      icon: faBox,
    },
    {
      label: "Analytics",
      description:
        "Track your expense, manage your income, and improve future transactions",
      icon: faChartLine,
    },
    {
      label: "Organization",
      description:
        "Create or join existing organizations, manage your finance as a team",
      icon: faBuilding,
    },
    {
      label: "Finance Manager",
      description:
        "Connect your bank account, or create a virtual wallet manager to track your income and expense",
      icon: faBank,
    },
  ];

  return (
    <section
      className='flex flex-col justify-start items-center w-full overflow-x-hidden overflow-y-auto'
      style={{
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <div className='flex flex-col w-full lg:w-3/4 h-auto '>
        {/* Page 1 */}
        <div className='flex flex-col lg:flex-row h-screen w-full justify-center items-center gap-2 lg:grow-0 lg:shrink-0'>
          {/* Left Section */}
          <div className='flex flex-col justify-center items-start w-full lg:w-1/2 p-2'>
            <h1 className='flex justify-start items-center font-bold text-6xl text-zinc-800 h-auto w-full py-8 border-b-2 border-zinc-800'>
              The Financial Tool you will ever need!
            </h1>
            <p className='flex justify-start items-center font-medium text-2xl text-zinc-800 h-auto w-full py-2'>
              Pandora will help you organize your Financial Records, analyze
              future expenses, and manage your income and expense
            </p>
            <Link
              className='flex justify-center items-center text-md font-bold text-emerald-100 bg-zinc-800 p-4 border-1 border-zinc-950 rounded-md hover:text-emerald-950 hover:bg-emerald-100 transition-all gap-4 duration-500'
              to='/pandora/login'
            >
              Get started for free <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
          {/* Right Section */}
          <div className='flex flex-col justify-center items-start w-full lg:w-1/2 h-5/6 rounded-2xl p-2 bg-emerald-800 gap-2'>
            <h1 className='flex justify-center text-center items-center font-bold text-4xl text-white h-auto w-full py-2 md:py-4'>
              Offers
            </h1>

            {offers.map((item: any, index: any) => (
              <Link
                key={index}
                className='flex justify-center items-center border border-emerald-600 w-full h-20 rounded-xl text-white text-3xl font-medium px-4 hover:bg-zinc-950 hover:text-zinc-100 hover:border-zinc-950 transition-all duration-500'
                to=''
              >
                <div className='flex flex-col w-full justify-between'>
                  <h1 className='text-2xl'>{item.label}</h1>
                  <p className='flex justify-start text-start items-center font-medium text-sm text-white h-auto w-full'>
                    {item.description}
                  </p>
                </div>
                <FontAwesomeIcon icon={item.icon} />
              </Link>
            ))}
          </div>
        </div>

        {/* Page 2 No Idea Yes */}

        {/* <div className='flex h-screen border justify-between items-center grow-0 shrink-0'>
          <div className='flex flex-col justify-center items-center'>
            <div className=''></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
