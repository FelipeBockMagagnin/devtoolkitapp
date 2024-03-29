
import './globals.css'
import { Inter } from 'next/font/google'
import { Flowbite } from '../lib/flowbite';
import SideBar from '@/components/SideBar';
import NavBar from '@/components/NavBar';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Dev Toolkit',
   description: 'Every tool you need in one place',
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <head>
            { process.env.NODE_ENV == "production" && <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8872911814581203" crossOrigin="anonymous"></Script> }
         </head>
         <body className={[inter.className + '; dark:bg-gray-800']}>
            <Flowbite>
               <NavBar></NavBar>

               <SideBar></SideBar>

               <div className="p-4 sm:ml-64 rounded-lg dark:border-gray-700 mt-14">
                  {children}
               </div>

            </Flowbite>

         </body>
      </html>
   )
}
