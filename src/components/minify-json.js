'use client'

import Faq from "@/components/Faq";
import Title from "@/components/Title";
import { useState } from "react";

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
            text: 'Minifying JSON files offers several benefits, including: <br/><br/> <b>Reduced file size:</b> Minifying removes unnecessary characters, resulting in smaller file sizes. This is particularly important for optimizing network bandwidth and improving page load times. <br/><br/> <b>Improved performance:</b> Smaller JSON files are parsed and processed faster by applications, resulting in improved performance. <br/><br/> <b>Enhanced security:</b> Minification helps to obfuscate the data in your JSON files, making it harder for unauthorized users to interpret or manipulate the information.'
        },
        {
            title: 'Can I minify JSON manually?',
            text: 'Yes, you can manually minify JSON files by removing whitespace and comments. However, it can be a time-consuming and error-prone process. It is recommended to use a JSON minifier tool or library, which automates the minification process and ensures accurate results.'
        },
        {
            title: 'How does the JSON minifier work?',
            text: 'JSON minifiers employ algorithms to remove unnecessary characters while preserving the structure and validity of the JSON data. They strip out comments, whitespace, line breaks, and any other non-essential characters that do not affect the data\'s integrity.'
        },
        {
            title: 'Are there any risks in minifying JSON files?',
            text: 'When minifying JSON files, it\'s important to note that comments are removed. If your JSON files contain important comments that document the structure or provide context, make sure to keep backups of the original files or maintain separate copies with comments intact for reference.'
        }
    ]

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

            <div  class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Input</label>
                    <textarea onChange={(event) => minify_json(event)} id="message" rows="6" class="sm:h-96 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                </div>

                <div>
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Output</label>
                    <textarea disabled value={jsonOutput} id="message" rows="6" class="sm:h-96 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                    <p class="text-xs text-red-600 dark:text-white">{jsonError}</p>
                </div>
            </div>

            <Faq menus={menus}/>
        </>
    )
}