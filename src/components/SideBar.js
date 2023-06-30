'use client'
import React, { useEffect } from "react";
import { LuFileJson } from 'react-icons/lu';
import { initFlowbite } from 'flowbite'

export default function SideBar() {
    useEffect(() => {
        initFlowbite()
    })

    let menus = [
        {
            name: 'JSON Minifier',
            icon: LuFileJson,
            link: '/minify-json'
        },
        {
            name: 'JSON Formatter',
            icon: LuFileJson,
            link: '/format-json'
        },
        {
            name: 'Lorem Ipsum',
            icon: LuFileJson,
            link: '/lorem-ipsum'
        }
    ]

    return (
        <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                    {menus.map((menu, index) => {
                        return (
                            <li key={index}>
                                <a href={menu.link} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <LuFileJson class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                    <span class="ml-1">{menu.name}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}