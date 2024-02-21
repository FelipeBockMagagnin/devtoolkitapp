'use client'

import Faq from "@/components/Faq";
import Title from "@/components/Title";
import { useState } from "react";
import { FiClipboard } from 'react-icons/fi';

export default function MinifyJson() {
    const [jsonOutput, setJsonOutput] = useState('');
    const [jsonError, setJsonError ] = useState('')

    const menus = [
        {
            title: 'What is JSON minification?',
            text: 'JSON minification is the process of removing unnecessary characters, such as whitespace and comments, from a JSON (JavaScript Object Notation) file. The goal is to reduce the file size, making it more compact and efficient for transmission over the network.'
        },
        {
            title: 'Why should I minify my JSON files?',
            text: 'Minifying JSON files offers several benefits, including: <br/> <b>Reduced file size:</b> Minifying removes unnecessary characters, resulting in smaller file sizes. This is particularly important for optimizing network bandwidth and improving page load times. <br/> <b>Improved performance:</b> Smaller JSON files are parsed and processed faster by applications, resulting in improved performance. <br/> <b>Enhanced security:</b> Minification helps to obfuscate the data in your JSON files, making it harder for unauthorized users to interpret or manipulate the information.'
        },
        {
            title: 'Can I minify JSON manually?',
            text: 'Yes, you can manually adjust your JSON files by removing whitespace and comments. However, it can be a time-consuming and error-prone process. It is recommended to use a JSON minifier tool or library, which automates the minification process and ensures accurate results.'
        },
        {
            title: 'How does the JSON minifier work?',
            text: 'It employ algorithms to remove unnecessary characters while preserving the structure and validity of the JSON data. They strip out comments, whitespace, line breaks, and any other non-essential characters that do not affect the data\'s integrity.'
        },
        {
            title: 'Are there any risks in minifying JSON files?',
            text: 'When minifying JSON files, it\'s important to note that comments are removed. If your JSON files contain important comments that document the structure or provide context, make sure to keep backups of the original files or maintain separate copies with comments intact for reference.'
        }
    ]

    const jsonExemple = {
        "name": "Test Doe",
        "age": 12,
        "email": "testdoe@example.com"
    };

    function minify_json(e) {
        setJsonError('')
        setJsonOutput('')

        if(!e.target.value){
            return
        }

        let json = e.target.value;
        try{
            var jsonObject = JSON.parse(json);
        } catch(err) {
            console.log(err.message);
            setJsonError(err.message)
            return
        }

        var newString = JSON.stringify(jsonObject, null, 0)

        setJsonOutput(newString)
    }

    return (
        <>
            <Title>JSON Minifier</Title>

            <div  className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Input</label>
                    <textarea onChange={(event) => minify_json(event)} id="message" rows="6" className="sm:h-96 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                </div>

                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Output</label>
                    
                    <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Copy to clipboard
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                    <textarea disabled value={jsonOutput} id="message" rows="6" className="sm:h-96 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                        
                    </textarea>
                    <button data-tooltip-target="tooltip-default" type="button" onClick={() => {navigator.clipboard.writeText(jsonOutput)}} className="relative float-right bottom-7 text-white bg-blue-700 ml-2 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-1 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <FiClipboard/>
                    </button>
                    <p className="text-xs text-red-600 dark:text-white">{jsonError}</p>
                </div>
            </div>

            <div className="mt-5 mb-5 text-gray-800">
                <span className="text-4xl font-extrabold text-gray-800">Example of JSON code minified</span>

                <div  className="grid gap-6 mb-6 md:grid-cols-2 mt-3">
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">JSON string</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >{JSON.stringify(jsonExemple, null, 2) }</textarea>
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">Minified JSON data</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >{JSON.stringify(jsonExemple)}</textarea>
                    </div>
                </div>
            </div>

            <div className="mt-5 mb-5">
                <span className="text-4xl font-extrabold text-gray-800">About this tool</span>
                <br/>
                <span>
                    Compress JSON data swiftly with our user-friendly tool. No downloads, no fuss. Insert Json content and get your optimized file instantly. Simplify data handling for quicker sharing and efficient storage. Use our JSON minifier online tool and experience seamless JSON compression.
                </span>
            </div>

            <Faq menus={menus}/>
        </>
    )
}