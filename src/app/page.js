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
            <a key={index} href={menu.link} className="flex rounded-xl bg-white p-2 px-4 m-2 border w-full md:w-auto hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              {<menu.icon className="mt-1 h-8 w-8 text-indigo-400  group-hover:text-gray-900 dark:group-hover:text-white"></menu.icon>}
              <div className="ml-2">
                <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">{menu.name}</h5>
                <p className="mt-0 font-normal text-sm text-gray-700 dark:text-gray-400">{menu.description}</p>
              </div>
            </a>
          )
        })}
      </div>


      <div className="mb-6 mt-4 text-center text-gray-500 dark:text-gray-400">
        More tools available soon!
      </div>
    </div>
  )
}

