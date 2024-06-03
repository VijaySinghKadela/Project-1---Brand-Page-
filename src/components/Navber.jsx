import 'remixicon/fonts/remixicon.css';

const Navber = () => {
   

    const item = [
        "MENU","LOCATION","ABOUT","CONTACT"
    ]
  return (
    <div className="w-full max-h-screen-xl p-4 flex justify-around ">
      <div className="logo ">
        <img src="./public/Image/brand_logo.png" alt="" />
      </div>
      <div className="nav-item ">
     
        <ul className="flex gap-6 font-semibold capitalize text-xl max-sm:hidden max-md:hidden ">

        {item.map((val,index)=>(<li key={index}>{val}</li>))}
        </ul>
      </div>
      <div className='menu-btn flex gap-4'>
        <div className='menu'>
        <i className="ri-menu-line min-sm:black md:hidden"></i>
        
      </div>
      <div className="btn">
        <button className="py-1 px-4 bg-red-700 text-white rounded-sm font-semibold">Login</button>
      </div>
      </div>
    </div>
  );
};

export default Navber;
