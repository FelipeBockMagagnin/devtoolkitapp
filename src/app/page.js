import React from "react"
import Title from "@/components/Title"
import Script from 'next/script'
import { LuFileJson } from 'react-icons/lu';
import menus from '../data/menus'

export default function Home() {
  return (
    <div>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-SFFSZM7F21" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SFFSZM7F21');
        `}
      </Script>
      <Title><div className="text-center">Dev Toolkit</div></Title>

      <div className="mb-2 text-center text-gray-500 dark:text-gray-400">
        Every tool you need in one place
      </div>

<div className="flex justify-center">
{menus.map((menu, index) => {
        return (
          <div key={index}>
            <a href={menu.link} class="flex border m-2 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <LuFileJson class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span class="ml-1">{menu.name}</span>
            </a>
          </div>
        )
      })}
</div>
      

      <div className="mb-2 text-center text-gray-500 dark:text-gray-400">
        More soon
      </div>
    </div>
  )
}

