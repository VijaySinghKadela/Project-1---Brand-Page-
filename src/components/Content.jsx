import Button from './Button';
const content = () => {
  return (
    <div className='lg:mt-20 lg:px-56 sm:mt-16  max-sm:mt-16 sm:w-full sm:flex sm:justify-center   sm:h-screen max-sm:w-full max-sm:flex max-sm:justify-center   max-sm:h-screen'>
      <div className="left-container flex flex-col lg:w-full max-sm:w-full sm:px-24 max-sm:px-12  max-h-screen-xl  ">
        <div className='headling_img flex gap-34 flex-row '>
        <h1 className='font-extrabold lg:mx-36 lg:text-8xl sm:text-6xl md:text-6xl max-sm:text-5xl max-md:text-4xl  '>YOUR FEET DESERVE THE BEST</h1>
        
        </div>
        <p className='lg:mt-16 sm:mt-8 max-sm:mt-12 max-sm:text-sm lg:text-xl lg:mx-24 '>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
     
        <Button/>


        {/* <p>Also Available On</p>
        <div className='icons-img'>
            <img src="../public/Image/flipkart.png" alt="" />
            <img src="../public/Image/amazon_logo.png" alt="" />
        </div>  */}
        {/* <div className='img '>
            <img className='size-.0 lg:block max-sm:hidden max-md:hidden' src="./public/Image/shoe_image.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default content;
