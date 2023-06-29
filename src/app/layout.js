import './globals.css'
import { Inter } from 'next/font/google'
import { Flowbite } from '../lib/flowbite';
import SideBar from '@/components/SideBar';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Dev Tollkit',
   description: 'Every tool you need in one place',
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={[inter.className + '; dark:bg-gray-800']}>
            <Flowbite>
               <NavBar></NavBar>

               <SideBar></SideBar>

               <div class="p-4 rounded-lg dark:border-gray-700 mt-14">
                  {children}
               </div>

            </Flowbite>

         </body>
      </html>
   )
}
