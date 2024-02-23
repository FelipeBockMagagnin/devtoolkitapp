'use client'

import Title from "@/components/Title";
import { useState } from "react";
import { minify } from "terser";
import Faq from "./Faq";

export default function MinifyJS() {
    const [JSOutput, setJSOutput] = useState('');
    const [JSError, setJSError ] = useState('')

    const menus = [
        {
            title: '1. What is a JavaScript Minifier?',
            text: ' JavaScript Minifier is a tool designed to compress JavaScript code, making it more efficient by removing unnecessary characters such as white spaces, comments, and line breaks. This process reduces file size and enhances website performance.'
        },
        {
            title: '2. How does a JavaScript Minifier work?',
            text: 'A JavaScript Minifier works by parsing through the code and removing redundant elements like comments, white spaces, and renaming variables to shorter names where applicable. This optimization process helps in reducing the overall size of the JavaScript file without altering its functionality.'
        },
        {
            title: '3. Why should I use a JavaScript Minifier?',
            text: 'Using a JavaScript Minifier provides several advantages including:<br/><br/><b>Improved Website Loading Speed</b>: Minified files load faster, enhancing user experience.<br/><br/><b>Reduced Bandwidth Usage</b>: Smaller file sizes lead to lower bandwidth consumption, which is beneficial especially for mobile users.<br/><br/><b>Streamlined Code</b>: Minification results in cleaner code that is easier to maintain and deploy.'
        },
        {
            title: '4. Is JavaScript Minification a recommended practice?',
            text: 'Yes, JavaScript Minification is widely recommended as it improves website performance by reducing file sizes and optimizing loading times.'
        },
        {
            title: '5. Can JavaScript Minification alone improve my website\'s performance?',
            text: 'While JavaScript Minification contributes to better performance, it\'s one of several factors to consider. Optimization should also include efficient coding practices and server configuration.'
        },
        {
            title: '6. How often should I minify JavaScript files?',
            text: 'JavaScript files should be minified whenever updates or changes are made to the codebase to ensure optimal performance.'
        }
    ]

    async function minify_js(e) {
        setJSError('')
        setJSOutput('')

        if(!e.target.value){
            return
        }

        try{
            const code = await minify(e.target.value)
            setJSOutput(code.code)
        } catch(err) {
            console.log(err);
            setJSError(err.message)
            return
        }
    }

    return (
        <>
            <Title>Javascript Minifier</Title>

            <div  className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Input</label>
                    <textarea onChange={(event) => minify_js(event)} id="message" rows="6" className="sm:h-96 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                </div>

                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Output</label>
                    <textarea disabled value={JSOutput} id="message" rows="6" className="sm:h-96 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                    <p className="text-xs text-red-600 dark:text-white">{JSError}</p>
                </div>
            </div>

            <div className="mt-5 mb-5">
                <span className="text-4xl font-extrabold text-gray-800">About this Tool</span>
                <br/>
                <span>
                    This is the best JavaScript Minifier online tool, it simplifies code by removing redundant characters, improving website performance. Its optimization features streamline development, ensuring faster loading times and enhanced user experiences.                
                </span>
            </div>

            <Faq menus={menus}/>
        </>
    )
}