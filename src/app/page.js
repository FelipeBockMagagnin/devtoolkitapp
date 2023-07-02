import React from "react"
import Title from "@/components/Title"
import Script from 'next/script'
import menus from '../data/menus'

export const metadata = {
  title: 'DevToolkit',
  description: 'Enhance your coding workflow with a vast array of online developer tools. From code minification and validation to JSON parsing and HTML/CSS optimization.',
}

export default function Home() {
  return (
    <div>
      <Title><div className="text-center">Dev Toolkit</div></Title>

      <div className="mb-2 text-center text-gray-500 dark:text-gray-400">
        Every tool you need in one place
      </div>

      <div className="flex justify-center flex-wrap">
            {menus.map((menu, index) => {
              return (
                <div key={index}>
                  <a href={menu.link} class="flex border m-2 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    {<menu.icon class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></menu.icon>}
                    <span class="ml-1">{menu.name}</span>
                  </a>
                </div>
              )
            })}
      </div>
      

      <div className="mb-6 mt-4 text-center text-gray-500 dark:text-gray-400">
        More tools available soon!
      </div>      


      <div className="text-lg mt-4 text-center dark:text-white">
        About DevToolkit:
      </div>

      <div className="text-center text-gray-500 dark:text-gray-400 md:w-2/4 m-auto">
        Supercharge your development workflow with our extensive collection of online developer tools. 
        From code minification and validation to JSON parsing and HTML/CSS optimization, our platform offers a 
        comprehensive suite of tools to streamline your coding tasks. Boost productivity, ensure code quality, 
        and save valuable time with our user-friendly interface and powerful features. Whether you are a front-end developer, 
        back-end engineer, or a coding enthusiast, our platform provides the essential tools you need for efficient and seamless development. 
        Discover the ultimate resource for online developer tools and take your coding prowess to the next level.
      </div>  
    </div>
  )
}

