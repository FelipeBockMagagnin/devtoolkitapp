'use client'

import Faq from "@/components/Faq";
import Title from "@/components/Title";
import { useEffect, useState } from "react";
import xml2js from 'xml2js';

export default function XmlToJson() {
   const [jsonInput, setJsonInput] = useState('');
   const [jsonOutput, setJsonOutput] = useState('');
   const [jsonError, setJsonError] = useState('');
   const [ignoreAttrs, setIgnoreAttrs] = useState(true);

   const menus = [
      {
         title: '1. What is XML2JSON Converter?',
         text: 'XML2JSON Converter is an online tool designed to convert XML data into JSON format. It simplifies the process of transforming XML files into JSON, making it easier to work with data, perform analysis, and integrate into various systems.'
      },
      {
         title: '2. How does XML2JSON Converter work?',
         text: 'XML2JSON Converter utilizes a powerful conversion engine that parses the XML structure and converts it into an equivalent JSON representation. It handles complex XML structures efficiently, ensuring accurate and reliable results.'
      },
      {
         title: '3. Are there any limitations on XML file complexity?',
         text: 'XML2JSON Converter is designed to handle complex XML structures, including nested elements, attributes, namespaces, and more. You can confidently convert XML files with varying levels of complexity and achieve accurate JSON output.'
      },
      {
         title: '4. Can I integrate the converted JSON data into other systems?',
         text: 'Certainly! The JSON output generated by XML2JSON Converter is compatible with various systems and platforms. You can easily integrate the converted JSON data into your applications, databases, APIs, or any other system that supports JSON format.'
      }
   ]
   
   useEffect(() => {
      convert(jsonInput)
   }, [ignoreAttrs, jsonInput, jsonError])

   function convert() {
      setJsonError('')
      setJsonOutput('')
      if (!jsonInput) {
         setJsonInput();
         return;
      }

      setJsonInput(jsonInput);

      var parser = new xml2js.Parser({ignoreAttrs: ignoreAttrs});
      parser.parseStringPromise(jsonInput).then(function (result) {
            console.dir(result);
            console.log('Done');
            setJsonOutput(JSON.stringify(result, null, '\t'))
         })
         .catch(function (err) {
            // Failed
            console.log(err.message);
            setJsonError(err.message)
         });

   }

   function handleAttChange(e){
      setIgnoreAttrs(!e.target.checked); 
   }

   return (
      <>
         <Title>XML to JSON</Title>

         <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
               <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">XML Input</label>
               <textarea onChange={(event) => setJsonInput(event?.target?.value)} id="message" rows="6" className="sm:h-72 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
               <label className="mt-3 relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" checked={!ignoreAttrs} onChange={handleAttChange}/>
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show Attributes</span>
               </label>
            </div>

            <div>
               <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">JSON Output</label>
               <textarea disabled value={jsonOutput} id="message" rows="6" className="sm:h-72 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
               <p className="text-xs text-red-600 dark:text-white">{jsonError}</p>
            </div>
         </div>

         <Faq menus={menus} />
      </>
   )
}