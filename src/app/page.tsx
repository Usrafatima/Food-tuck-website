import Image from "next/image";
import hero from './public/hero.png';
import check from './public/check.png';
import pic1 from './public/pic1.svg';
import pic2 from './public/pic2.svg';
import pic3 from './public/pic3.svg';
import mushroom from './public/mushroom.svg';
import burger from './public/burger.svg';
import chicken from './public/chicksalad.svg'
import donut  from './public/donuts.svg';
import Hamburger from './public/Hamburger.png';
import Cookie from './public/Cookie.png';
import Wine from './public/Wine.png';
import Clients from './public/Clients.png';
import leaf from './public/leafs.svg';
import leafplate from './public/leafplate.svg';
import fryballs from './public/fryballs.svg';
import chef1 from './public/chef1.png';
import chef2 from './public/chef2.png';
import chef3 from './public/chef3.png';
import chef4 from './public/chef4.png';
import flower from './public/flower.png';
import ellipse from './public/Ellipse 6.png';
import quotes from './public/Quotes.png';
import star from './public/star.png';
import Dot from './public/Dot.png'
import restu from './public/restu banner.png';
import burger2 from './public/burger2.png';
import icon from './public/Icon.png';
import pizza from './public/pizza.png';
import taco from './public/taco.png';

export default function Home() {

  return (
    <div>
      <div>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
  rel="stylesheet"
  crossOrigin="anonymous"
/>
</div>
    <div className="max-w m-auto px-40 pt-8 flex items-center justify-between">
      {/* Left Side: Text */}
      <div className="text-section">
        <h1 className="text-[#FF9F0D] pt-5 ">Its Quick & amusing</h1>
        <p className="text-5xl font-bold w-[300px]">
          <span className="text-[#FF9F0D] text-4xl">Th</span>
          <span className="text-white">e</span>
          <span className="text-white w-[15%] text-4xl"> Art of speed food Quality</span>
        </p>
        <p className="text-white w-[60%] pt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas, et, perferendis iste suscipit ratione commodi
        </p>
        <div className="pt-5">
          <button className="border-2 bg-[#FF9F0D] text-white w-[190px] h-[60px] rounded-full">
            See Menu
          </button>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="hidden sm:block md:block">
        <Image src={hero} alt="Hero Image" width={877.8} height={670} />
      </div>
    </div>
     <div className="max-w m-auto px-40 pt-8 flex items-center justify-between">
     {/* Left Side: Text */}
     <div className="text-section">
       <h1 className="text-[#FF9F0D] pt-0 ">about us</h1>
       <p className="text-4xl font-bold">
         <span className="text-[#FF9F0D] text-4xl">We</span>
         
         <span className="text-white w-[15%] text-4xl">Create the best foody product</span>
      </p>
      <p className="text-white w-[450px] pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. 
        Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
      <div>
       <p className="flex items-center space-x-2 pt-5">
  <Image src={check} alt="Check Icon" />
  <span className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
</p>
<p className="flex items-center space-x-2 pt-5">
  <Image src={check} alt="Check Icon" />
  <span className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
</p>
<p className="flex items-center space-x-2 pt-5">
  <Image src={check} alt="Check Icon" />
  <span className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
</p>
</div>

       <div className="pt-5">
         <button className="border-2 bg-[#FF9F0D] text-white w-[190px] h-[60px] rounded-full">
           Read more
         </button>
       </div>
     </div>

     {/* Right Side: Image */}
     <div className="grid grid-rows-2 grid-cols-2 gap-4 max-w-[700px] mx-auto pt-28 ml-60">
  {/* Large Image */}
  <div className="row-span-1 col-span-2">
    <Image
      src={pic1}
      alt="Large Image"
      className="w-[660px] h-[330px] object-cover"
    />
  </div>
  {/* First Small Image */}
  <div>
    <Image
      src={pic2}
      alt="Small Image 1"
      className="w-[322px] h-[190px] object-cover"
    />
  </div>
  {/* Second Small Image */}
  <div>
    <Image
      src={pic3}
      alt="Small Image 2"
      className="w-[322px] h-[190px] object-cover"
    />
  </div>
</div>

   </div>
   <div>
   <div className="max-w m-auto px-40 pt-42 flex items-center justify-center text-center">
  {/* Left Side: Text */}
  <div className="text-section">
    <h1 className="text-[#FF9F0D] pt-0">about us</h1>
    <p className="text-4xl font-bold">
      <span className="text-[#FF9F0D] text-4xl">Ch</span>
      <span className="text-white w-[15%] text-4xl text-center">oose Food Item</span>
    </p>
  </div>
  
</div>
<div className="mt-20 flex flex-row space-x-10 justify-center">
  <div>
    <Image src={mushroom} alt=""/>
    </div>
    <Image src={burger} alt=""/>
    <Image src={chicken} alt=""/>
    <Image src={donut} alt=""/>
  </div>
   </div>
   <div className="text-section flex flex-col ml-[1000px] mt-28">
       <h1 className="text-[#FF9F0D] pt-0 ">Why Choose us</h1>
       <p className="text-4xl font-bold">
         <span className="text-[#FF9F0D] text-4xl">Ex</span>
         
         <span className="text-white w-[15%] text-4xl">tra Ordinary taste And Experienced</span>
      </p>
      <p className="text-white w-[450px] pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. 
      Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
      <div className="flex flex-row gap-4">
      <div className="flex flex-row gap-4 mt-5 space-x-5">
  <div className="relative w-[102px] h-[100px] bg-[#FF9F0D] flex items-center justify-center border-2">
    <Image 
      src={Hamburger} 
      alt="Hamburger" 
      width={56} 
      height={56} 
    />
    <p className="absolute -bottom-6 text-white text-center w-full">Fast Food</p>
  </div>
  
  <div className="relative w-[102px] h-[100px] bg-[#FF9F0D] flex items-center justify-center border-2 ">
    <Image 
      src={Cookie} 
      alt="Cookie" 
      width={56} 
      height={56} 
    />
    <p className="absolute -bottom-6 text-white text-center w-full">Lunch</p>
  </div>
  
  <div className="relative w-[102px] h-[100px] bg-[#FF9F0D] flex items-center justify-center border-2">
    <Image 
      src={Wine} 
      alt="Wine" 
      width={56} 
      height={56} 
    />
    <p className="absolute -bottom-6 text-white text-center w-full">Dinner</p>
  </div>
</div>

   </div>
   <div className="flex mt-5">
  <div className="border-2 bg-white mt-8 w-[374px] h-[93px] flex items-center px-4">
    <span className="text-[#FF9F0D] text-4xl mr-4">30+</span>
    <div className="flex flex-col">
      <span className="text-2xl">Years of</span>
      <span className="text-2xl font-bold">Experienced</span>
    </div>
  </div>
</div>

  </div>
  {/* Menu */ }
  <div>
  <Image src={Clients} alt=""  className="w-full h-full pt-10"/>
</div>
<div className="text-section text-center ">
    <h1 className="text-[#FF9F0D] ">Choose & pick</h1>
    <p className="text-4xl font-bold">
      <span className="text-[#FF9F0D] text-4xl">Fr</span>
      <span className="text-white w-[15%] text-4xl text-center">om Our Menu</span>
    </p>
    <div > 
    <ul className="text-white flex flex-row justify-center space-x-10 mt-3">
      <li className="text-[#FF9F0D]">Breakfast</li>
      <li>Lunch</li>
      <li>Dinner</li>
      <li>Dessert</li>
      <li>Drink</li>
      <li>Snack</li>
      <li>Soups</li>
    </ul>
    </div>
    <div className="relative ml-64 mt-16">
  <div className="absolute -left-16 top-0">
    <Image src={leaf} alt="Leaf" />
  </div>

  <div className="left-2">
    <Image src={leafplate} alt="Leaf Plate" />
  
    {/* Container for two sets of menus side by side */}
    <div className="flex space-x-96 mx-96 -mt-80"> {/* Flexbox to display two columns */}
    
      {/* First menu set */}
      <div className="flex flex-col text-white">
        {/* First menu item */}
        <div className="relative mb-10">
          <Image src={fryballs} alt="Fryballs" className="ml-5" />
          <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
            <h1 className="font-bold">Lettuce Leaf</h1>
            <p className="text-sm">Lacus nisi, et ac dapibus velit in consequat</p>
            <p className="text-[#FF9F0D]">12.5$</p>
          </div>
        </div>

        {/* Second menu item */}
        <div className="relative mb-10">
          <Image src={fryballs} alt="Fryballs" className="ml-5" />
          <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
            <h1 className="font-bold">Fresh Breakfast</h1>
            <p>Lacus nisi, et ac dapibus velit in consequat</p>
            <p className="text-[#FF9F0D]">14.5$</p>
          </div>
        </div>

        {/* Third menu item */}
        <div className="relative mb-10">
          <Image src={fryballs} alt="Fryballs" className="ml-5" />
          <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
            <h1 className="font-bold">Mild Butter</h1>
            <p>Lacus nisi, et ac dapibus velit in consequat</p>
            <p className="text-[#FF9F0D]">12.5$</p>
          </div>
        </div>

        {/* Fourth menu item */}
        <div className="relative">
          <Image src={fryballs} alt="Fryballs" className="ml-5" />
          <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
            <h1 className="font-bold">Fresh Bread</h1>
            <p>Lacus nisi, et ac dapibus velit in consequat</p>
            <p className="text-[#FF9F0D]">12.5$</p>
          </div>
        </div>
      </div>

      {/* Second menu set */}
      <div className="flex flex-col text-white">
        {/* First menu item */}
        <div className="relative mb-10">
          <Image src={fryballs} alt="Fryballs" className="ml-5" />
          <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
            <h1 className="font-bold">Lettuce Leaf</h1>
            <p>Lacus nisi, et ac dapibus velit in consequat</p>
            <p className="text-[#FF9F0D]">12.5$</p>
          </div>
        </div>

        {/* Second menu item */}
        <div className="relative mb-10">
          <Image src={fryballs} alt="Fryballs" className="ml-5" />
          <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
            <h1 className="font-bold">Fresh Breakfast</h1>
            <p>Lacus nisi, et ac dapibus velit in consequat</p>
            <p className="text-[#FF9F0D]">14.5$</p>
          </div>
        </div>

        {/* Third menu item */}
        <div className="relative mb-10">
          <Image src={fryballs} alt="Fryballs" className="ml-5" />
          <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
            <h1 className="font-bold">Mild Butter</h1>
            <p>Lacus nisi, et ac dapibus velit in consequat</p>
            <p className="text-[#FF9F0D]">12.5$</p>
          </div>
        </div>

        {/* Fourth menu item */}
        <div className="relative">
          <Image src={fryballs} alt="Fryballs" className="ml-5" />
          <div className="absolute top-0 left-0 ml-28 text-start w-[300px] z-10">
            <h1 className="font-bold">Fresh Bread</h1>
            <p>Lacus nisi, et ac dapibus velit in consequat</p>
            <p className="text-[#FF9F0D]">12.5$</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Chefs */ }
<div className="text-section text-center mt-24">
    <h1 className="text-[#FF9F0D] pt-0">Chefs</h1>
    <p className="text-4xl font-bold">
      <span className="text-[#FF9F0D] text-4xl">Me</span>
      <span className="text-white w-[15%] text-4xl text-center">et Our Chefs</span>
    </p>
</div>
<div className="mt-10 flex flex-row justify-center space-x-7">
  <Image src={chef1} alt="" />
  <Image src={chef2} alt=""/>
  <Image src={chef3} alt=""/>
  <Image src={chef4} alt=""/>
</div>

<div className="flex justify-center items-center my-10 border-2 border-[#FF9F0D] w-[155px] h-[50px] rounded-full text-white mx-auto">
  <button className="text-center">See more</button>
</div>



  </div>
  <div className="text-section text-center px-56 my-10">
  <h1 className="text-[#FF9F0D] pt-0">Testimonials</h1>
  <p className="text-3xl font-bold text-white w-[25%] mx-auto">
    What our client are saying
  </p>
</div>

<div className="flex justify-center items-center my-10">
  <div className="border-2 w-[868px] h-[451px] bg-white flex flex-col items-center justify-center relative p-5">

    {/* Flower Image */}
    <div className="mx-auto relative z-10 mb-5">
      <Image src={flower} alt="Flower" className="mx-auto -rotate-45" />
    </div>

    {/* Ellipse Image */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 ">
      <Image src={ellipse} alt="Ellipse" />
    </div>

    {/* Quotes Image */}
    <div className="absolute top-36 left-1/2 transform -translate-x-1/2 z-0">
      <Image src={quotes} alt="Quotes" />
    </div>

    {/* Paragraph */}
    <div className="px-4 mb-96">
      <p className="text-black w-[500px] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem asperiores fugit distinctio adipisci fuga mollitia culpa eaque corrupti vero iusto? Atque, eaque voluptas! Quisquam aspernatur ipsum suscipit consequuntur nemo ad vitae iste possimus ullam temporibus! Accusantium, veritatis sapiente 
      </p>
    </div>

    {/* Stars Image */}
    {/* <div className="mb-5 top-28">
      <Image src={star} alt="Stars" className="mx-auto" />
    </div>


    <h1 className="text-black text-3xl font-bold  ">Alamin Hasan</h1>
    <p className="text-black text-xl my-2">Food Specialist</p> */}

  </div>

</div>
<div className="flex justify-center">
<Image src={Dot} alt=""  />
</div>
<div className="w-full h-full my-10">
  <Image src={restu} alt=""  />
</div>
< div className="text-section text-center">
    <h1 className="text-[#FF9F0D] pt-0">Blog Post</h1>
    <p className="text-4xl font-bold">
      <span className="text-[#FF9F0D] text-4xl">La</span>
      <span className="text-white w-[15%] text-4xl text-center">test News & Blog</span>
    </p>
   
</div>
<div className="flex flex-row mt-10 space-x-6 justify-center">
  {/* First Card */}
  <div className="border-2 w-[424px] h-[550px] bg-black text-white">
    <Image src={burger2} alt="" className="w-[424px] h-[349px]" />

    <p className="ml-6 mt-4 text-[#FF9F0D]">10 February 2022</p>

    <h1 className="ml-6 font-bold mt-2 text-lg">
      Pellentesque Non Efficitur Mi Aliquam Cinvallis Mi Quis
    </h1>

    <div className="flex items-center ml-6 mt-4 space-x-48">
      <p className="text-sm">Learn More</p>
      <Image src={icon} alt="Icon" className="w-20 h-5" />
    </div>
  </div>

  {/* Second Card */}
  <div className="border-2 w-[424px] h-[550px] bg-black text-white">
    <Image src={pizza} alt="" className="w-[424px] h-[349px]" />

    <p className="ml-6 mt-4 text-[#FF9F0D]">10 February 2022</p>

    <h1 className="ml-6 font-bold mt-2 text-lg">
      Pellentesque Non Efficitur Mi Aliquam Cinvallis Mi Quis
    </h1>

    <div className="flex items-center ml-6 mt-4 space-x-48">
      <p className="text-sm">Learn More</p>
      <Image src={icon} alt="Icon" className="w-20 h-5 " />
    </div>
  </div>

  {/* Third Card */}
  <div className="border-2 w-[424px] h-[550px] bg-black text-white">
    <Image src={taco} alt="" className="w-[424px] h-[349px]" />

    <p className="ml-6 mt-4 text-[#FF9F0D]">10 February 2022</p>

    <h1 className="ml-6 font-bold mt-2 text-lg">
      Pellentesque Non Efficitur Mi Aliquam Cinvallis Mi Quis
    </h1>

    <div className="flex items-center ml-6 mt-4 space-x-48">
      <p className="text-sm">Learn More</p>
      <Image src={icon} alt="Icon" className="w-20 h-5" />
    </div>
  </div>
</div>

    </div>
 
  );
}

