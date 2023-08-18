import React from 'react'
import heroImage from '../assets/images/heroImage.jpg'
import  {BiRightArrowCircle} from 'react-icons/bi'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name="home" className=' bg-gradient-to-b from-black via-black to-gray-800'>

        <div className='max-w-6xl px-10 md:px-0 py-36 mx-auto justify-around flex items-center  main-responsive '>
            <div className='flex flex-col justify-center h-4 '>

                <h2 className='text-4xl sm:text-5xl font-bold text-white     '>
                    I'm a Jatin Panesiya <br />
                    <p className='text-2xl sm:text-3xl'>  Front-end Web Developer </p>     
                </h2>

                <p className='text-gray-500 py-4 max-w-md flex justify-center'>
                Fresher Front-end web developer with a strong foundation in front- end and web development. Skilled in HTML, CSS, JavaScript, React.js,  and in Tailwind CSS. Passionate about creating user-friendly web applications, Responsive Designs and staying up-to-date with emerging technologies.
                </p>

                <div>
                    <Link to="portfolio"  smooth duration={600} className='group flex items-center text-white w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 gap-2 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 text-xl duration-300'> <BiRightArrowCircle size={25} /></span>
                    </Link>
                </div>
            </div>

            <div className=''>
                <img src={heroImage} alt="my profile" className='rounded-xl img-responsive'/>
            </div>
        </div>

    </div>
  )
}

export default Home