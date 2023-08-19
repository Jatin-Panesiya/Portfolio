import React from "react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import AOS from 'aos'
import 'aos/dist/aos.css' 
import { useEffect } from "react";

const Porfolio = () => {

    const portfolios = [
        {
            id:1,
            src:project1,
            name:"Netflix Login Page Clone",
            demo:"https://netflix-login-jatin.netlify.app/",
            code:"https://github.com/Jatin-Panesiya/Html_css_projects/tree/main/Netflix%20Login%20Page%20Clone"
        },
        {
            id:2,
            src:project2,
            name:"GFX Artist Website",
            demo:"https://manthangfx.netlify.app/",
            code:"https://github.com/Jatin-Panesiya/Html_css_projects/tree/main/GFX%20Artist%20Website"

        },
        {
            id:3,
            src:project3,
            name:"To Do List",
            demo:"https://jatintodolist.netlify.app/",
            code:"https://github.com/Jatin-Panesiya/Javascript_Projects/tree/main/To%20Do%20List"

        },
        {
            id:4,
            src:project4,
            name:"Static Ecommerce Website",
            demo:"https://jatinflipkart.netlify.app/",
            code:"https://github.com/Jatin-Panesiya/Html_css_projects/tree/main/flipkart%20clone"

        },
        {
            id:5,
            src:project5,
            name:"Shopping Cart",
            demo:"https://jatin-cart.netlify.app/",
            code:"https://github.com/Jatin-Panesiya/Javascript_Projects/tree/main/Cart"

        },
        {
            id:6,
            src:project6,
            name:"Personal Portfolio",
            demo:"https://rutu-portfolio.netlify.app/",
            code:"https://github.com/Jatin-Panesiya/Html_css_projects/tree/main/Portfolio"

        },
    ]

    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
     
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b py-32 from-black to-gray-800 w-full text-white "
    >
      <div className="max-w-6xl p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline  border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6 text-lg uppercase text-center">Check out some of my work here</p>
        </div>

        <div  data-aos="fade-up"  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 " >
        {
            portfolios.map(({id,src,name,demo,code})=>{
                return(
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img src={src} alt="" className="rounded-md duration-300 hover:scale-105" />
            <p className="text-center pt-5 text-lg uppercase text-blue-400">{name}</p>
            <div className="flex items-center justify-center ">
              <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border border-blue-400 rounded-xl text-center"  href={demo} target="_blank" rel="noreferrer">Demo</a>
              <a href={code} target="_blank" rel="noreferrer"  className="border border-blue-400 rounded-xl text-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >Code</a>
            </div>
          </div>
                )

            })
        }
          
        </div>
      </div>
    </div>
  );
};

export default Porfolio;
