'use client'

import Title from "@/components/Title";
import { useEffect, useState } from "react";
import xml2js from 'xml2js';
import Faq from "./Faq";

export default function JsonToXml() {
   const [jsonInput, setJsonInput] = useState('');
   const [jsonOutput, setJsonOutput] = useState('');
   const [jsonError, setJsonError] = useState('');

   const menus = [
      {
         title: '1. What is a JSON to XML Converter Tool?',
         text: 'A JSON to XML Converter Tool is a utility that transforms JSON (JavaScript Object Notation) data into XML (eXtensible Markup Language) format for compatibility with XML-based systems and applications.'
      },
      {
         title: '2. How does a JSON to XML Converter Tool work?',
         text: 'A JSON to XML Converter Tool parses JSON data and maps its elements to corresponding XML tags, converting the structure and content into a valid XML document.'
      },
      {
         title: '3. Why should I use a JSON to XML Converter Tool?',
         text: 'Using a JSON to XML Converter Tool enables interoperability between systems using different data formats, facilitating data exchange and integration across diverse platforms and technologies.'
      },
      {
         title: '4. Are there any limitations to using a JSON to XML Converter Tool?',
         text: 'While JSON to XML conversion facilitates data interchange, complex JSON structures or nested arrays may require additional processing to ensure accurate representation in XML format.'
      },
      {
         title: '5. What are the benefits of converting JSON to XML format?',
         text: 'Converting JSON to XML format allows seamless integration with XML-based systems, leveraging existing XML processing tools, libraries, and standards for data manipulation and analysis.'
      },
   ]

   useEffect(() => {
      convert(jsonInput)
   }, [jsonInput, jsonError])

   function convert() {
      setJsonError('')
      setJsonOutput('')
      if (!jsonInput) {
         setJsonInput();
         return;
      }

      setJsonInput(jsonInput);

      let json = jsonInput;
      try {
         var jsonObject = JSON.parse(json);
      } catch (err) {
         console.log(err.message);
         setJsonError(err.message)
         return
      }

      setJsonOutput(OBJtoXML(jsonObject))
   }

   function OBJtoXML(obj) {
      var xml = '';
      for (var prop in obj) {
         xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
         if (obj[prop] instanceof Array) {
            for (var array in obj[prop]) {
               xml += "<" + prop + ">";
               xml += OBJtoXML(new Object(obj[prop][array]));
               xml += "</" + prop + ">";
            }
         } else if (typeof obj[prop] == "object") {
            xml += OBJtoXML(new Object(obj[prop]));
         } else {
            xml += obj[prop];
         }
         xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
      }
      var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
      return xml
   }

   return (
      <>
         <Title>JSON to XML</Title>

         <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
               <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">JSON Input</label>
               <textarea onChange={(event) => setJsonInput(event?.target?.value)} id="message" rows="6" className="sm:h-72 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
            </div>

            <div>
               <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">XML Output</label>
               <textarea disabled value={jsonOutput} id="message" rows="6" className="sm:h-72 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
               <p className="text-xs text-red-600 dark:text-white">{jsonError}</p>
            </div>
         </div>

         <div className="mt-5 mb-5">
            <span className="text-4xl font-extrabold text-gray-800">About this Tool</span>
            <br />
            <span>
               Our tool effortlessly transforms JSON data into XML format, fostering compatibility and seamless integration across diverse systems and platforms. Simplify data interchange with our converter.
            </span>
         </div>

         <Faq menus={menus} />
      </>
   )
}