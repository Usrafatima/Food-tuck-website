import Image from "next/image";
import menu from '../public/menu.png';
import menu1 from '../public/menu1.png';
import menuburger from '../public/menuburger.png';
import clients from '../public/Client & customers.png';
import cupcake from '../public/cupcake.png';
import juice from '../public/juice.png';
import logo from '../public/Logo.png';

export default function Menu(){
    return (
        <div className=" bg-white text-black">
          {/* Image */}
          <Image src={menu} alt="Our Menu" className="w-full h-auto" />
      
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-2">
             {/* Heading */}
             <h1 className="text-white text-2xl md:text-4xl font-bold">
              Our Menu
             </h1>
      
            {/* Breadcrumb */}
             <nav className="text-white text-sm md:text-base">
               <span className="text-gray-400">Home</span>
               <span className="mx-2">{'>'}</span>
               <span className="font-bold">Menu</span>
             </nav>
           </div>
        <div className="bg-white text-black">
        {/* Starter Menu */}
        <div className="flex items-center sm:text-center ">
          {/* Image */}
          <div className="w-[448px] h-[626px] p-10 ml-80">
            <Image src={menu1} alt="Our Menu" className="w-full h-full object-cover" />
          </div>
          <div className="ml-20 -mt-5">
          <h1 className="text-4xl font-bold mt-5 pt-5">Starter Menu</h1>
          {/* 1st item */}
            <div className="flex flex-row space-x-20 pt-5">
            <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
            <p className="text-[#FF9F0D] text-2xl">32$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Toasted French bread toasted with romano, cheddar
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 " />
  {/* second item */}
            <div className="flex flex-row space-x-44 pt-5">
            <p className="font-bold text-2xl text-[#FF9F0D]">Berries and creme tart</p>
            <p className="text-[#FF9F0D] text-2xl">43$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Gorgonzola, ricotta, mozeralla, taleggio
            </p>
            <p className="text-[#828282] pt-3">700 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 " />
  {/* third item */}
            <div className="flex flex-row space-x-16 pt-5">
            <p className="font-bold text-2xl">Tormentoso Bush Pizza PIntoage</p>
            <p className="text-[#FF9F0D] text-2xl">14$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Ground cumin, avacadoes, peeled and cubed
            </p>
            <p className="text-[#828282] pt-3">1000 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 " />
              {/* 4th item */}
            <div className="flex flex-row space-x-40 pt-5">
            <p className="font-bold text-2xl">Spicy Vegan Potato Curry</p>
            <p className="text-[#FF9F0D] text-2xl">35$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Speradable cream cheese, crumbled blue cheese
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 " />
      </div>
         
      {/* main course */}
         </div>
         <div className="ml-20 -mt-5 ">
         <h1 className="text-4xl font-bold pt-5 ml-80 mt-20">Main Course</h1>
         <div className="ml-80 mt-2">
                    {/* 1st item */}
                    <div className="flex flex-row space-x-20 pt-5">
            <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
            <p className="text-[#FF9F0D] text-2xl">32$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Toasted French bread toasted with romano, cheddar
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3  w-1/2" />
  {/* second item */}
            <div className="flex flex-row space-x-44 pt-5">
            <p className="font-bold text-2xl text-[#FF9F0D]">Berries and creme tart</p>
            <p className="text-[#FF9F0D] text-2xl">43$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Gorgonzola, ricotta, mozeralla, taleggio
            </p>
            <p className="text-[#828282] pt-3">700 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 w-1/2 " />
  {/* third item */}
            <div className="flex flex-row space-x-16 pt-5">
            <p className="font-bold text-2xl">Tormentoso Bush Pizza PIntoage</p>
            <p className="text-[#FF9F0D] text-2xl">14$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Ground cumin, avacadoes, peeled and cubed
            </p>
            <p className="text-[#828282] pt-3">1000 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3  w-1/2" />
              {/* 4th item */}
            <div className="flex flex-row space-x-40 pt-5">
            <p className="font-bold text-2xl">Spicy Vegan Potato Curry</p>
            <p className="text-[#FF9F0D] text-2xl">35$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Speradable cream cheese, crumbled blue cheese
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <div className="w-[448px] h-[626px] p-10 ml-[800px] -mt-[650px]">
            <Image src={menuburger} alt="Our Menu" className="w-full h-full object-cover" />
          </div>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-10 pt-10 w-1/2" />
      </div>
      </div>
      <div className="">
      <Image src={clients} alt=""  className="w-full h-full pt-10"/>
      </div>
      {/* deserts */}
      <div className="flex items-center ">
      <div className="w-[448px] h-[626px] p-10 ml-80">
            <Image src={cupcake} alt="Our Menu" className="w-full h-full object-cover" />
          </div>
          <div className="ml-20 -mt-5">
          <h1 className="text-4xl font-bold mt-5 pt-5">Starter Menu</h1>
          {/* 1st item */}
            <div className="flex flex-row space-x-20 pt-5">
            <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
            <p className="text-[#FF9F0D] text-2xl">32$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Toasted French bread toasted with romano, cheddar
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 " />
  {/* second item */}
            <div className="flex flex-row space-x-44 pt-5">
            <p className="font-bold text-2xl text-[#FF9F0D]">Berries and creme tart</p>
            <p className="text-[#FF9F0D] text-2xl">43$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Gorgonzola, ricotta, mozeralla, taleggio
            </p>
            <p className="text-[#828282] pt-3">700 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 " />
  {/* third item */}
            <div className="flex flex-row space-x-16 pt-5">
            <p className="font-bold text-2xl">Tormentoso Bush Pizza PIntoage</p>
            <p className="text-[#FF9F0D] text-2xl">14$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Ground cumin, avacadoes, peeled and cubed
            </p>
            <p className="text-[#828282] pt-3">1000 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 " />
              {/* 4th item */}
            <div className="flex flex-row space-x-40 pt-5">
            <p className="font-bold text-2xl">Spicy Vegan Potato Curry</p>
            <p className="text-[#FF9F0D] text-2xl">35$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Speradable cream cheese, crumbled blue cheese
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 " />
      </div>
           {/* main course */}
           </div>
         <div className="ml-20 -mt-5 ">
         <h1 className="text-4xl font-bold pt-5 ml-80 mt-20">Main Course</h1>
         <div className="ml-80 mt-2">
                    {/* 1st item */}
                    <div className="flex flex-row space-x-20 pt-5">
            <p className="font-bold text-2xl">Alder Chicken Chinook Salmon</p>
            <p className="text-[#FF9F0D] text-2xl">32$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Toasted French bread toasted with romano, cheddar
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3  w-1/2" />
  {/* second item */}
            <div className="flex flex-row space-x-44 pt-5">
            <p className="font-bold text-2xl text-[#FF9F0D]">Berries and creme tart</p>
            <p className="text-[#FF9F0D] text-2xl">43$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Gorgonzola, ricotta, mozeralla, taleggio
            </p>
            <p className="text-[#828282] pt-3">700 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3 w-1/2 " />
  {/* third item */}
            <div className="flex flex-row space-x-16 pt-5">
            <p className="font-bold text-2xl">Tormentoso Bush Pizza PIntoage</p>
            <p className="text-[#FF9F0D] text-2xl">14$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Ground cumin, avacadoes, peeled and cubed
            </p>
            <p className="text-[#828282] pt-3">1000 CAL</p>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-3  w-1/2" />
              {/* 4th item */}
            <div className="flex flex-row space-x-40 pt-5">
            <p className="font-bold text-2xl">Spicy Vegan Potato Curry</p>
            <p className="text-[#FF9F0D] text-2xl">35$</p>
            </div>
            <p className="text-[#4F4F4F] pt-3">
            Speradable cream cheese, crumbled blue cheese
            </p>
            <p className="text-[#828282] pt-3">560 CAL</p>
            <div className="w-[448px] h-[626px] p-10 ml-[800px] -mt-[650px]">
            <Image src={juice} alt="Our Menu" className="w-full h-full object-cover" />
          </div>
            <hr className="border-t-2 border-[#E0E0E0] border-dotted mt-10 pt-10 w-1/2" />
      </div>
      <div className="text-center">
      <p className="text-1xl">Partners & Clients</p>
      <h1 className="text-3xl font-bold">We work with the best people</h1>
      </div>
      <div className="flex justify-center  p-10">
      <Image src={logo} alt=""/>
      </div>
      </div>

      
         </div>
         </div>
    
    
    )}      