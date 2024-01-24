'use client'

import Title from "@/components/Title";
import { useEffect, useState } from "react";
import Faq from "@/components/Faq";

export default function Page() {
    const [loremIpsumText, setLoremIpsumText] = useState('')
    const [paragraphs, setParagraphs] = useState(1)
    const [words, setWords] = useState(20)

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

    useEffect(() => {
        generate(words, paragraphs)
    }, [])
    
    const menus = [
        {
            title: 'What is Lorem Ipsum?',
            text: "Lorem Ipsum is placeholder text commonly used in the design and printing industry. It's perfect for filling spaces in a layout to visualize the final appearance." 
        },
        {
            title: 'Why use Lorem Ipsum in design projects?',
            text: 'Lorem Ipsum helps mimic the look and feel of actual text, aiding designers in focusing on layout and structure without the distraction of meaningful content.'
        },
        {
            title: 'How does the Lorem Ipsum Generator work?',
            text: 'Our dynamic generator creates random Lorem Ipsum text based on your specified word and paragraph count, offering quick and customizable placeholder content.'
        },
        {
            title: 'Can I use the Lorem Ipsum generated content commercially?',
            text: "Yes, Lorem Ipsum is free to use and doesn't have any copyright restrictions, making it ideal for both personal and commercial design projects."
        },
        {
            title: 'Can I choose the length of Lorem Ipsum text?',
            text: 'Yes, our tool allows you to select the desired word and paragraph count, providing flexibility for various design needs.'
        }
    ]

    return (
        <>
            <Title>Lorem Ipsum Generator</Title>

            <div className='flex'>
                <div className="m-2">
                    <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Paragraphs - {paragraphs}</label>
                    <input id="minmax-range" type="range" onChange={(e) => {setParagraphs(e.target.value); generate(words, e.target.value);}} min="1" max="20" value={paragraphs} className="w-full md:w-52 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-11" />
                </div>

                <div className="m-2">
                    <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Words - {words}</label>
                    <input id="minmax-range" type="range" onChange={(e) => {setWords(e.target.value); generate(e.target.value, paragraphs);}} min="1" max="100" value={words} className="w-full md:w-52 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-11" />
                </div>
            </div>

            <div className="grid gap-6 mb-6 md:w-2/4" dangerouslySetInnerHTML={{__html: loremIpsumText}}></div>

            <Faq menus={menus}/>
        </>
    )
}