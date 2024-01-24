'use client'

import Title from "@/components/Title";
import { useEffect, useState } from "react";
import Faq from "./Faq";

export default function UrlParser() {
    const [url, setUrl] = useState({});
    const [params, setParams] = useState([]);

    const [error, setError] = useState('')

    const menus = [
        {
            title: 'What is a URL Parser?',
            text: "A URL parser is a vital tool that dissects web addresses, helping users comprehend the information encoded in a URL. Whether you're a tech enthusiast or a casual internet user, understanding URL parsing is key to navigating the online realm effectively."
        },
        {
            title: 'How Does it Work?',
            text: 'URL parsers decode the various components of a URL, breaking down the address into understandable segments. From the protocol and domain to specific parameters, a URL parser simplifies the information, making it accessible and user-friendly. This process ensures a seamless browsing experience by translating complex web addresses into a language we can comprehend.'
        },
        {
            title: 'Why is it Important?',
            text: 'URL parsing plays a crucial role in enhancing user experience and optimizing online navigation. By breaking down complex URLs, these parsers empower users to grasp the structure of web addresses effortlessly. This understanding is particularly valuable for developers, digital marketers, and anyone who wants to make the most out of their online interactions.'
        },
        {
            title: 'Benefits of Using a URL Parser',
            text: '<b>User-Friendly Navigation:</b> URL parsers simplify web addresses, making it easier for users to understand and navigate websites effortlessly.<br/><br/><b>Development Efficiency:</b> Developers leverage URL parsers to extract specific information from URLs, streamlining the development process and enhancing overall efficiency.<br/><br/><b>SEO Optimization:</b> Understanding URL components allows for strategic placement of keywords, contributing to improved search engine optimization (SEO) for websites.<br/><br/><b>Enhanced Security:</b> By dissecting URLs, users can identify and avoid potentially harmful links, contributing to a more secure online experience.'
        },
    ]

    useEffect(() => {
        getUrlData('https://www.devtoolkitapp.com/url-parser?query=value')
    }, [])

    function getUrlData(value) {
        setError('')
        setUrl({})
        setParams([])

        if (!value) {
            return
        }

        try {
            const url = new URL(value);
            setUrl(url)
            let params = [];
            url.searchParams.forEach((key, value) => {
                console.log(key, value)
                params.push(<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {value}
                    </th>
                    <td class="px-6 py-4">
                        {key}
                    </td>
                </tr>)
            })   
            setParams(params);
        } catch (err) {
            console.log(err.message);
            setError(err.message)
            return;
        }
    }

    return (
        <>
            <Title>URL Parser</Title>

            <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">URL</label>
                <input onChange={(event) => getUrlData(event.target.value)} placeholder="https://www.devtoolkitapp.com/url-parser?query=value" className="block p-2.5 w-full md:w-2/4 text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
                <p className="text-xs text-red-600 dark:text-white">{error}</p>
            </div>

            <div class='grid md:grid-cols-2'>
                {url?.protocol && <div class="max-w-2/4 relative overflow-x-auto w-auto mt-5">
                    <span class="text-gray-900 font-medium">URL Data:</span>
                    <table class="w-full text-sm md:w-2/4 text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            {url.protocol && <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Protocol
                                </th>
                                <td class="px-6 py-4">
                                    {url.protocol.replace(':', '')}
                                </td>
                            </tr>}
                            {url.host && <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Host
                                </th>
                                <td class="px-6 py-4">
                                    {url.host}
                                </td>
                            </tr>}
                            {url.hostname &&<tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Hostname
                                </th>
                                <td class="px-6 py-4">
                                    {url.hostname}
                                </td>
                            </tr>}
                            {url.origin &&<tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Origin
                                </th>
                                <td class="px-6 py-4">
                                    {url.origin}
                                </td>
                            </tr>}
                            {url.pathname &&<tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Pathname
                                </th>
                                <td class="px-6 py-4">
                                    {url.pathname}
                                </td>
                            </tr>}
                            {url.port &&<tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Port
                                </th>
                                <td class="px-6 py-4">
                                    {url.port}
                                </td>
                            </tr>}
                            {url.hash &&<tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Hash
                                </th>
                                <td class="px-6 py-4">
                                    {url.hash}
                                </td>
                            </tr>}
                            {url.search &&<tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Search
                                </th>
                                <td class="px-6 py-4">
                                    {url.search}
                                </td>
                            </tr>}
                            {url.username &&<tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Username
                                </th>
                                <td class="px-6 py-4">
                                    {url.username}
                                </td>
                            </tr>}
                            {url.password &&<tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Password
                                </th>
                                <td class="px-6 py-4">
                                    {url.password}
                                </td>
                            </tr>}
                        </tbody>
                    </table>
                </div>}

                {params.length > 0 && <div class="max-w-2/4 relative overflow-x-auto w-auto mt-5">
                    <span class="text-gray-900 font-medium">Params:</span>
                    <table class="w-full text-sm md:w-2/4    text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            {params}
                        </tbody>
                    </table>
                </div>}
            </div>

            <div className="mt-5 mb-5">
                <span className=" text-4xl tracking-tight font-extrabold text-gray-800 mb-2">About URL Parser</span>
                <br/>
                <span>
                    Simplify web addresses with our user-friendly URL Parser tool. Decode and understand complex URLs for enhanced digital efficiency.
                </span>
            </div>

            <Faq className='mt-5' menus={menus}/>
        </>
    )
}