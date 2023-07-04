'use client'

import Title from "@/components/Title";
import { useEffect, useState } from "react";
import xml2js from 'xml2js';

export default function JsonToXml() {
   const [jsonInput, setJsonInput] = useState('');
   const [jsonOutput, setJsonOutput] = useState('');
   const [jsonError, setJsonError] = useState('');

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

         <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
               <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">JSON Input</label>
               <textarea onChange={(event) => setJsonInput(event?.target?.value)} id="message" rows="6" class="sm:h-72 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
            </div>

            <div>
               <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">XML Output</label>
               <textarea disabled value={jsonOutput} id="message" rows="6" class="sm:h-72 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
               <p class="text-xs text-red-600 dark:text-white">{jsonError}</p>
            </div>
         </div>
      </>
   )
}