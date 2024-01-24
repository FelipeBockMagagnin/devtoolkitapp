import React from "react";

export default function Faq({menus, className}) {
    return (
        <div className={className} id="accordion-collapse" data-accordion="collapse">
            <h2 class="mb-2 text-4xl tracking-tight font-extrabold text-gray-800 dark:text-white">Frequently asked questions</h2>
            {menus.map((menu, index) => {
                return (
                    <div key={index}>

                        <h3 class="flex items-center mt-4 text-lg font-medium text-gray-800 dark:text-white">
                            <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-800 dark:text-gray-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            {menu.title}
                        </h3>
                        <p class="text-gray-800 dark:text-gray-800" dangerouslySetInnerHTML={{__html: menu.text}}></p>
                    </div>
                )
            })}
            <div className="mb-16"></div>
        </div>
    )
}