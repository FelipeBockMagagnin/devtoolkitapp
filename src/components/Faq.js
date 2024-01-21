import React from "react";

export default function Faq({menus, className}) {
    return (
        <div className={className} id="accordion-collapse" data-accordion="collapse">
            {menus.map((menu, index) => {
                return (
                    <div key={index}>
                        <h2 id={"accordion-collapse-heading-" + index}>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target={"#accordion-collapse-body-" + index} aria-expanded={index == 0 ? 'true' : 'false' } aria-controls={"accordion-collapse-body-" + index}>
                                <span>{menu.title}</span>
                                <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div id={"accordion-collapse-body-" + index} className="hidden" aria-labelledby={"accordion-collapse-heading-" + index}>
                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <p className="mb-2 text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{__html: menu.text}}></p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}