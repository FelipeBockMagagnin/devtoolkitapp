'use client'

import Link from 'next/link';
import { DarkThemeToggle } from '../lib/flowbite';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

export default function NavBar() {

  useEffect(() => {
    const env = process.env.NODE_ENV
    if (env == "production"){
      ReactGA.initialize('G-SFFSZM7F21');
      ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: document.title });
    }    
  }, [])

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">      
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button data-drawer-toggle="logo-sidebar" data-drawer-target="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span className="sr-only"></span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
               </button>
               <Link href='/' className="flex ml-2 md:mr-24">
               <span className="self-center text-xl font-extrabold text-gray-800 sm:text-2xl whitespace-nowrap dark:text-white">
                  Dev Toolkit
                </span>
               </Link>
            </div>
            <div className="flex items-center">
     
            </div>
          </div>
        </div>
      </nav>
  )
}