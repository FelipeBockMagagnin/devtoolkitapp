'use client'

import Title from "@/components/Title";
import Image from "next/image";
import { useEffect, useState } from "react";
import Faq from "@/components/Faq";

export default function PlaceholderImageGenerator() {
    const [img, setImg] = useState('')
    const [width, setWidth] = useState(200)
    const [height, setHeight] = useState(200)

    const [widthGenerated, setWidthGenerated] = useState(200)
    const [heightGenerated, setHeightGenerated] = useState(200)

    useEffect(() => {
        generate()
    }, [])

    function generate() {
        const element = document.createElement("canvas");
        const context = element.getContext("2d");

        element.width = width;
        element.height = height;

        // Fill in the background
        context.fillStyle = "#aaaaaa";
        context.fillRect(0, 0, element.width, element.height);

        console.log("bold " + width / 10 + "px sans-serif")
        // Place the text
        context.font = "bold " + width / 10 + "px sans-serif";
        context.fillStyle = "#333333";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(`${width}x${height}`, element.width / 2, element.height / 2);

        const dataUrl = element.toDataURL();

        setWidthGenerated(width)
        setHeightGenerated(height)

        setImg(dataUrl)
    }

    function download(){
        var a = document.createElement("a");
        a.href = img;
        a.download = "img_placeholder" + width + "_" + height + ".png"; //File name Here
        a.click();
    }

    const menus = [
        {
            title: 'What is a Placeholder Image Generator?',
            text: 'A Placeholder Image Generator tool creates temporary images with diferent sizes to fill spaces in design projects, aiding in visualizing layouts before finalizing actual graphics.'
        },
        {
            title: 'How does the Generator work?',
            text: 'Our dynamic tool generates placeholder images based on specified dimensions, offering quick and customizable solutions for design mock-ups.'
        },
        {
            title: 'Can I set custom sizes for the placeholder images?',
            text: 'Absolutely! Tailor the dimensions to your needs, ensuring a seamless fit within your design layout.'
        },
        {
            title: 'Why use Placeholder Images in design projects?',
            text: 'Placeholder images simulate real content, allowing designers to focus on layout and structure without the distraction of finalized graphics.'
        },
        {
            title: 'Can I use the generated images commercially?',
            text: 'Certainly! Our tool offers copyright-free images, making them suitable for both personal and commercial design endeavors.'
        }
    ]

    return (
        <>
            <Title>Placeholder Image Generator</Title>

            <div className="grid gap-6 mb-6 md:grid-cols-4 md:w-2/4">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Height</label>
                    <input value={height} onChange={(e) => setHeight(e.target.value)} type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Width</label>
                    <input value={width} onChange={(e) => setWidth(e.target.value)} type="number" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div className="text-center md:text-left flex justify-center md:justify-start">
                    <button onClick={() => generate()} type="button" className="md:mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Generate</button>
                    <button onClick={() => download()} type="button" className="md:mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download</button>
                </div>

                
            </div>

            <Image src={img} alt='place holder image' width={widthGenerated} height={heightGenerated} />

            <div className="mt-5 mb-5">
                <span className=" text-4xl tracking-tight font-extrabold text-gray-800 mb-2">About this tool</span>
                <br/>
                <span>
                    Your go-to free online tool to effortlessly create placeholders with custom width and height. Tailor images to your needs with custom sizes for web and app design. Just set your specifications, click &apos;Generate&apos; and download your dynamic dummy image instantly. Simplify your workflow with our efficient and user-friendly Dynamic Dummy Image Generator, making design mock-ups a breeze.                
                </span>
            </div>

            <Faq menus={menus}/>
        </>
    )

    
}