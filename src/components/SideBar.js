'use client'
import React, { useEffect } from "react";
import { LuFileJson } from 'react-icons/lu';
import { initFlowbite } from 'flowbite'
import menus from '../data/menus'

export default function SideBar() {
    useEffect(() => {
        initFlowbite()
    })

    return (
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {menus.map((menu, index) => {
                        return (
                            <li key={index}>
                                <a href={menu.link} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    {<menu.icon className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></menu.icon>}
                                    <span className="ml-1">{menu.name}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}