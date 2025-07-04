import Link from "next/link";
import Image from "next/image";


import { HydrateClient } from "~/trpc/server";

export default async function Home() {
 

  

  return (
    <HydrateClient>
      <main className="bg-gradient-to-br from-[#FAE500] to-[#FF0000] min-h-screen ">
        <header className="flex justify-between  bg-gradient-to-r from-orange-400 to yellow-100 shadow-lg boreder-b-2">
          <div className="items-center text-4xl font-bold text-green-900 p-4">
            <h1>VNMills</h1>
          </div>
          <div className="flex items-center gap-4 p-4 text-xl text-black">
            <p>more</p>
            <p>contact us</p>
          </div>

        </header>
        <section >
          <div className="flex justify-center gap-2 p-4 ">
            <Image width={800} height={600} 
             
            className="rounded-lg shadow-lg "
             alt="image" 
             src="https://media.istockphoto.com/photos/landscape-shot-rice-mill-with-reflection-and-sunset-picture-id471247018?k=6&m=471247018&s=612x612&w=0&h=TgWGpWiLGa_VWNtK-xTwS3kMxDyJqRZkV5qe1YFnGik=" />
             <div className="  p-4 border-2 shadow-lg gap-2">
              <h1 className=" text-4xl text-center text-brown-400 font-bold p-4 mb-2">Welcome to VNMills</h1>
               <p className="flex text-justify text-green-800 text-xl p-4 ">We are a leading rice milling company dedicated to delivering high-quality rice products 
              through advanced technology, strict quality control, and sustainable practices. Our mill processes a wide variety of rice, including Basmati,
               non-Basmati, parboiled, and organic varieties, tailored for both domestic and international markets.</p>
             </div>
            
          </div>
        </section>
        <section>
          <div className="flex justify-center gap-2 p-4">
            <Image width={800} height={600}
            className="rounded-lg shadow-lg "
             alt="image" 
             src="https://kj1bcdn.b-cdn.net/media/53760/rice-varieties.jpeg" />
             <div className="  p-4 border-2 shadow-lg gap-2">
              <h1 className=" text-4xl text-center text-brown-400 font-bold p-4 mb-2">Our Products</h1>
              <p className="flex text-justify text-green-800 text-xl p-4 ">We offer a diverse range of rice products, including Basmati, non-Basmati, parboiled, and organic rice. 
                Our products are known for their quality, aroma, and taste, catering to both domestic and international markets.</p>
             </div>
          </div>
            
        </section>
          
      </main>
    </HydrateClient>
  );
}
