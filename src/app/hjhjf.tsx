
export default function Footer() {
    return (
      <div className="flex flex-col items-center justify-center p-6 md:p-20">
        {/* Container for Heading and Email */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-6">
          {/* Heading */}
          <div className="px-4 md:px-40 md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">
              <span className="text-[#FF9F0D]">Sti</span>
              <span className="text-white">ll You Need Our Support?</span>
            </h1>
            <p className="text-white mt-4">
              Don't wait, make a smart & logical quote here. It's pretty easy.
            </p>
          </div>
  
          {/* Email Input and Subscribe Button */}
          <div className="w-full max-w-[459px] flex mt-4 md:mt-0 md:ml-8"> {/* Adjust margin here */}
            <div className="w-full flex border-2 border-[#FF9F0D]">
              <form className="flex w-full">
                {/* Email Input */}
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 p-4 border-r border-[#FF9F0D] rounded-l-md"
                />
                {/* Subscribe Button */}
                <button className="w-[163px] h-[56px] bg-[#FF9F0D] text-white rounded-r-md">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
  
        {/* Horizontal line */}
        <hr className="w-[80%] border-[#FF9F0D] my-6" />
  
        {/* About Us and Opening Hours */}
        <div className="text-white w-full flex flex-col md:flex-row justify-start md:justify-between">
    <div className="text-left md:w-[50%] mb-6 md:mb-0">
      <h1 className="text-xl font-bold">About Us.</h1>
      <p className="w-[320px]">
        Corporate clients and leisure travellers have been relying on Groundlink
        for dependable, safe, and professional chauffeured car service in major
        cities across the world.
      </p>
      <div className="relative flex items-start md:w-[50%]">
        <Image
          src={clock}
          alt="Opening Hours"
          className="w-[77px] h-[71px] border-2 bg-[#FF9F0D] mr-4"
        />
        <div className="absolute text-white p-1 px-24">
          <h1 className="text-xl font-bold">Opening Hours</h1>
          <p className="w-[250px]">Mon-Sat (8.00-6.00)</p>
          <p>Sunday - Closed</p>
        </div>
      </div>
    </div>
  
    {/* Centered and spaced elements below */}
    <div className="flex flex-col md:flex-row justify-center gap-6">
      <div className="w-[30%]">
        <ul>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>Reporting</li>
          <li>Documentation</li>
          <li>Support Policy</li>
          <li>Privacy</li>
        </ul>
      </div>
  
      <div className="w-[30%]">
        <ul>
          <li>FAQ</li>
          <li>Terms & Conditions</li>
          <li>Reporting</li>
          <li>Documentation</li>
          <li>Support Policy</li>
          <li>Privacy</li>
        </ul>
      </div>
  
  
  
    {/* Below images with content */}
    <div className="flex flex-col lg:flex-col items-center gap-6 mt-6">
      <div className="flex flex-col lg:flex-col items-center">
        <Image src={mask} alt="" />
        <div className="lg:ml-4">
          <p>20 Feb 2022</p>
          <p>Keep Your Business</p>
        </div>
      </div>
  
      <div className="flex flex-col lg:flex-col items-center">
        <Image src={mask} alt="" />
        <div className="lg:ml-4">
          <p>20 Feb 2022</p>
          <p>Keep Your Business</p>
        </div>
      </div>
  
      <div className="flex flex-col lg:flex-col items-center">
        <Image src={mask} alt="" />
        <div className="lg:ml-4">
          <p>20 Feb 2022</p>
          <p>Keep Your Business</p>
        </div>
      </div>
    </div>
  </div>
  
    </div>
    </div>
    );
  }
  