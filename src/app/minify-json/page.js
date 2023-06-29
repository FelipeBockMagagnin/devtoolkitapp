'use client'

import Title from "@/components/Title";
import { useState } from "react";

export default function Page() {
    const [jsonOutput, setJsonOutput] = useState('');
    const [jsonError, setJsonError ] = useState('')

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

        </>
    )
}