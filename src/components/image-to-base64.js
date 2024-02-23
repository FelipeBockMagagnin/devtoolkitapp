'use client'

import Title from "@/components/Title";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiClipboard } from 'react-icons/fi';
import Faq from "./Faq";

export default function ImageToBase64() {
    const [img, setImg] = useState('')
    const [ base64, setBase64 ] = useState('')
    const [ error, setError] = useState('')

    const menus = [
        {
            title: '1. What is an Image to Base64 Converter?',
            text: 'An Image to Base64 Converter is an online tool that transforms images into Base64 encoded strings, allowing easy embedding of images directly into HTML, CSS, or JavaScript code.'
        },
        {
            title: '2. How does an Image to Base64 Converter work?',
            text: 'An Image to Base64 Converter encodes images into Base64 format, which represents binary data as ASCII characters. This encoded string can then be used within web applications, eliminating the need for separate image files.'
        },
        {
            title: '3. What are the advantages of using an Image to Base64 Converter?',
            text: 'Using an Image to Base64 Converter offers several advantages:<br/><br/><b>Simplified file management:</b> Embedding images directly into code reduces the need for additional image files.<br/><br/><b>Faster loading times:</b> Base64 encoded images can be loaded with the rest of the page content, reducing HTTP requests and improving performance.<br/><br/><b>Enhanced security:</b> Base64 encoded images can be included inline within code, minimizing the risk of external resource manipulation.'
        },
        {
            title: '4. Can any type of image be converted to Base64 format?',
            text: 'Yes, an Image to Base64 Converter can process various image formats including PNG, JPEG, GIF, and SVG, converting them into Base64 encoded strings.'
        },
        {
            title: '5. Are there limitations to using Base64 encoded images?',
            text: 'While Base64 encoded images offer benefits, they can also result in larger file sizes compared to binary image files. This can impact page load times and increase bandwidth usage, particularly for large or high-resolution images.'
        },
        {
            title: '6. How can I use Base64 encoded images in my web projects?',
            text: 'Base64 encoded images can be directly embedded into HTML documents using the <img> tag with the src attribute set to the Base64 string. They can also be utilized within CSS files for background images or within JavaScript for dynamic image loading.'
        },
        {
            title: '7. Is the use of Base64 encoded images recommended for all web projects?',
            text: 'The decision to use Base64 encoded images depends on specific project requirements and performance considerations. While Base64 encoding offers advantages in certain scenarios, it\'s essential to weigh the trade-offs in terms of file size, caching, and page load times before implementation.'
        }
    ]

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

            <div className="grid gap-6 mb-6 md:grid-cols-2">

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white">Upload Image</label>
                    <div className="flex items-center justify-center w-full">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={(e) => generate(e)} />
                        </label>
                    </div>
                </div>

                {base64 || error ? <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white">
                        Base 64 Output 
                        <button data-tooltip-target="tooltip-default" type="button" onClick={() => {navigator.clipboard.writeText(base64)}} className="text-white bg-blue-700 ml-2 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-0.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FiClipboard/></button>
                        <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Copy to clipboard
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </label> 
                    <textarea disabled value={base64} id="message" rows="6" className="h-64 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                    <p className="text-xs text-red-600 dark:text-white">{error}</p>
                </div> : ''}

                {base64 ? <div style={{position: 'relative'}}>
                    <img src={base64} alt='place holder image' style={{width: '100%'}}  />
                </div> : ''}

                {base64 ? <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white">
                        HTML img code
                        <button data-tooltip-target="tooltip-default" type="button" onClick={() => {navigator.clipboard.writeText("<img src='" + base64 + "'/>")}} className="text-white bg-blue-700 ml-2 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-0.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><FiClipboard/></button>
                        <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Copy to clipboard
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </label> 
                    <textarea disabled value={"<img src='" + base64 + "'/>"} id="message" rows="6" className="h-64 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                </div> : ''}
            </div>

            <div className="mt-5 mb-5">
                <span className="text-4xl font-extrabold text-gray-800">About this Tool</span>
                <br/>
                <span>
                    Our tool converts images to Base64 strings, facilitating seamless integration into web projects. Simplify image management and enhance loading speed effortlessly with our converter.                
                </span>
            </div>

            <Faq menus={menus}/>
        </>
    )
}