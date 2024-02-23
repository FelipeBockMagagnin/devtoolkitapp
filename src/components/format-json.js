'use client'

import Title from "@/components/Title";
import { useState } from "react";
import Faq from "./Faq";

export default function FormatJson() {
    const [jsonOutput, setJsonOutput] = useState('');
    const [jsonError, setJsonError ] = useState('')

    const menus = [
        {
            title: '1. What is a JSON Formatter Tool?',
            text: 'A JSON Formatter Tool is a utility designed to parse and format JSON (JavaScript Object Notation) data in a structured and human-readable manner. It helps organize JSON objects, arrays, and key-value pairs for better comprehension and analysis.'
        },
        {
            title: '2. How does a JSON Formatter Tool work?',
            text: 'A JSON Formatter Tool processes JSON data and presents it in a well-formatted layout, typically with indentation and color-coded syntax highlighting. This makes complex JSON structures easier to read and understand.'
        },
        {
            title: '3. Why should I use a JSON Formatter Tool?',
            text: 'Using a JSON Formatter Tool offers several benefits:<br/><b>Improved readability</b>: Formats JSON data in a visually appealing way, making it easier to interpret.<br/><b>Error detection</b>: Highlights syntax errors and inconsistencies in the JSON structure for easier debugging.<br/><b>Enhanced collaboration</b>: Facilitates sharing and communication of JSON data among team members and stakeholders.'
        },
        {
            title: '4. Are there any risks associated with using a JSON Formatter Tool?',
            text: 'JSON Formatter Tools are generally safe to use. However, users should exercise caution when handling sensitive or confidential data to avoid unintentional exposure during formatting or sharing processes.'
        },
        {
            title: '5. Can a JSON Formatter Tool handle nested JSON structures?',
            text: 'Yes, JSON Formatter Tools are designed to handle nested JSON structures efficiently, providing clear indentation and formatting for each level of nesting.'
        }
    ]

    function format_json(e) {
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
       

        var newString = JSON.stringify(jsonObject, null, '\t')

        setJsonOutput(newString)
    }

    return (
        <>
            <Title>JSON Formatter</Title>

            <div  className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Input</label>
                    <textarea onChange={(event) => format_json(event)} id="message" rows="6" className="sm:h-96 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                </div>

                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Output</label>
                    <textarea disabled value={jsonOutput} id="message" rows="6" className="sm:h-96 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                    <p className="text-xs text-red-600 dark:text-white">{jsonError}</p>
                </div>
            </div>

            <div className="mt-5 mb-5">
                <span className="text-4xl font-extrabold text-gray-800">About this Tool</span>
                <br/>
                <span>
                    Our tool organizes JSON data into a structured, readable format, enhancing comprehension and analysis. Simplify code visualization and debugging with our intuitive JSON formatting online tool.
                </span>
            </div>

            <Faq menus={menus}/>
        </>
    )
}