import Image from 'next/image';
import menu from '../public/menu.png';

export default function Shop(){
    return(
        <div className=" bg-white text-black">
        {/* Image */}
        <Image src={menu} alt="Our Menu" className="w-full h-[350px]" />
    
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-2 -mt-28">
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
         <div className='bg-white text-black p-96'>
            
         </div>
         </div>
    )
}