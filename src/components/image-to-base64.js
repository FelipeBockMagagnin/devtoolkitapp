'use client'

import Title from "@/components/Title";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiClipboard } from 'react-icons/fi';


export default function ImageToBase64() {
    const [img, setImg] = useState('')
    const [ base64, setBase64 ] = useState('')
    const [ error, setError] = useState('')

    useEffect(() => {
        generate()
    }, [])

    function generate(e) {
        console.log(e)

        if(!e) return
         // check max. file size is not exceeded
        // size is in bytes
        if (e.target.files[0].size > 2000000) {
            setError("File too large");
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        console.log(e.target.files[0])

        reader.onload = () => {
            setBase64(reader.result)
        };
        reader.onerror = error => {
            setError(error)
            console.log("Error: ", error);
        };
    }

    return (
        <>
            <Title>Image to Base64 Converter</Title>

            <div class="grid gap-6 mb-6 md:grid-cols-2">

                <div>
                    <label for="message" class="block text-sm font-medium text-gray-900 dark:text-white">Upload Image</label>
                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" onChange={(e) => generate(e)} />
                        </label>
                    </div>
                </div>

                {base64 || error ? <div>
                    <label for="message" class="block text-sm font-medium text-gray-900 dark:text-white">
                        Base 64 Output 
                        <button data-tooltip-target="tooltip-default" type="button" onClick={() => {navigator.clipboard.writeText(base64)}} class="text-white bg-blue-700 ml-2 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-0.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FiClipboard/></button>
                        <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Copy to clipboard
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </label> 
                    <textarea disabled value={base64} id="message" rows="6" class="h-64 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                    <p class="text-xs text-red-600 dark:text-white">{error}</p>
                </div> : ''}

                {base64 ? <div style={{position: 'relative'}}>
                    <img src={base64} alt='place holder image' style={{width: '100%'}}  />
                </div> : ''}

                {base64 ? <div>
                    <label for="message" class="block text-sm font-medium text-gray-900 dark:text-white">
                        HTML img code
                        <button data-tooltip-target="tooltip-default" type="button" onClick={() => {navigator.clipboard.writeText("<img src='" + base64 + "'/>")}} class="text-white bg-blue-700 ml-2 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-0.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FiClipboard/></button>
                        <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Copy to clipboard
                            <div class="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </label> 
                    <textarea disabled value={"<img src='" + base64 + "'/>"} id="message" rows="6" class="h-64 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                </div> : ''}
            </div>
        </>
    )
}