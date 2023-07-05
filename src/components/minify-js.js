'use client'

import Title from "@/components/Title";
import { useState } from "react";
import { minify } from "terser";

export default function MinifyJS() {
    const [JSOutput, setJSOutput] = useState('');
    const [JSError, setJSError ] = useState('')

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

        </>
    )
}