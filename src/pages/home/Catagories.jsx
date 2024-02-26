import React from 'react'
import { useTheme } from '../../hooks/ThemeContext';

const categoryItems = [
    {id: 1, title: "White marble", despriction: "(86 dishes)", image: "/images/home/category/img7.png"},
    {id: 2, title: "Tank", despriction: "(27+ Items)", image: "/images/home/category/img3.png"},
    {id: 4, title: "Kitchen black marble", despriction: "(255 Items)", image: "/images/home/category/img4.png"},
    {id: 3, title: "Wash Basin Mirror", despriction: "(48+)", image: "/images/home/category/img2.png"},
    {id: 4, title: "Basin", despriction: "(55+ Items)", image: "/images/home/category/img5.png"},
    {id: 4, title: "Pipe", despriction: "(more than+)", image: "/images/home/category/img6.avif"}
]

const Catagories = () => {
    const { isDarkMode } = useTheme();
  return (
    <div className={`max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16 ${isDarkMode ? 'dark' : ''}`}>
        <div className='text-center'>
            <p className='subtitle'>Customer Favorites</p>
            <h2 className='title'>Popular Catagories🫶</h2>
        </div>

        {/* category cards */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
            {
                categoryItems.map((item, i) => (
                    <div key={i} className='shadow-lg rounded-xl bg-orange-100 py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-x-8 transition-all duration-300 z-10'>
                        <div className='w-full mx-auto flex items-center justify-center'><img src={item.image} alt="" className='rounded w-28 h-28' /></div>
                        <div className='mt-5 space-y-1'>
                            <h5 className='text-[#1E1E1E] font-semibold'>{item.title}</h5>
                            <p className='text-secondary text-sm'>{item.despriction}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Catagories