'use client'

import Title from "@/components/Title";
import { useState } from "react";

export default function Page() {
    const [loremIpsumText, setLoremIpsumText] = useState('')
    const [paragraphs, setParagraphs] = useState(1)
    const [words, setWords] = useState(1)

    function generate(_words, _paragraphs) {
        var loremText = '';
        var wordsList = [
            'Lorem',
            'ipsum',
            'dolor',
            'sit',
            'amet',
            'consectetur',
            'adipiscing',
            'elit',
            'sed',
            'do',
            'eiusmod',
            'tempor',
            'incididunt',
            'ut',
            'labore',
            'et',
            'dolore',
            'magna',
            'aliqua',
            'Ut',
            'enim',
            'ad',
            'minim',
            'veniam',
            'quis',
            'nostrud',
            'exercitation',
            'ullamco',
            'laboris',
            'nisi',
            'ut',
            'aliquip',
            'ex',
            'ea',
            'commodo',
            'consequat',
            'Duis',
            'aute',
            'irure',
            'dolor',
            'in',
            'reprehenderit',
            'in',
            'voluptate',
            'velit',
            'esse',
            'cillum',
            'dolore',
            'eu',
            'fugiat',
            'nulla',
            'pariatur',
            'Excepteur',
            'sint',
            'occaecat',
            'cupidatat',
            'non',
            'proident',
            'sunt',
            'in',
            'culpa',
            'qui',
            'officia',
            'deserunt',
            'mollit',
            'anim',
            'id',
            'est',
            'laborum',
        ];

        for (var i = 0; i < _paragraphs; i++) {
            var paragraph = '';
            for (var j = 0; j < _words; j++) {
                var randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];

                if(j == 0 || paragraph.substring(paragraph.length - 2).includes('.')){
                    randomWord = randomWord.charAt(0).toUpperCase() + randomWord.slice(1)
                }

                paragraph += randomWord;
                
                if(Math.floor(Math.random() * 10) == 0 || j == words-1){
                    paragraph += '. '
                } else {
                    paragraph += ' '
                }
            }
            loremText += '<p>' + paragraph + '</p>';
        }
        setLoremIpsumText(loremText);
    }

    return (
        <>
            <Title>Lorem Ipsum Generator</Title>

            <div class='flex'>
                <div className="m-2">
                    <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Paragraphs - {paragraphs}</label>
                    <input id="minmax-range" type="range" onChange={(e) => {setParagraphs(e.target.value); generate(words, e.target.value);}} min="1" max="20" value={paragraphs} class="w-full md:w-52 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-11" />
                </div>

                <div className="m-2">
                    <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Words - {words}</label>
                    <input id="minmax-range" type="range" onChange={(e) => {setWords(e.target.value); generate(e.target.value, paragraphs);}} min="1" max="100" value={words} class="w-full md:w-52 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-11" />
                </div>
            </div>

            <div class="grid gap-6 mb-6 md:w-2/4" dangerouslySetInnerHTML={{__html: loremIpsumText}}></div>
        </>
    )
}