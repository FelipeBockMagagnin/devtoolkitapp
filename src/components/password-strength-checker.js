'use client'

import Title from "@/components/Title";
import Image from "next/image";
import { useEffect, useState } from "react";
import Faq from "./Faq";

export default function PasswordStrengthChecker() {
    const [password, setPassword] = useState('')

    const [ seconds, setSeconds] = useState(0);
    const [ time, setTime] = useState(0);

    const menus = [
        {
            title: '1. What is a Password Strength Checker Tool?',
            text: 'A Password Strength Checker Tool is a utility designed to evaluate the security level of passwords based on various criteria such as length, complexity, and uniqueness.'
        },
        {
            title: '2. How does a Password Strength Checker Tool work?',
            text: 'A Password Strength Checker Tool analyzes passwords entered by users and provides feedback on their strength, highlighting weaknesses and suggesting improvements to enhance security.'
        },
        {
            title: '3. Why should I use a Password Strength Checker Tool?',
            text: 'Using a Password Strength Checker Tool helps users create robust passwords that are resistant to hacking attempts, reducing the risk of unauthorized access to sensitive accounts and data.'
        },
        {
            title: '4. What criteria does a Password Strength Checker Tool consider when assessing password strength?',
            text: 'This tool consider factors such as length, character variety (uppercase, lowercase, numbers, symbols), avoidance of common words or patterns, and uniqueness compared to previously used passwords.'
        },
        {
            title: '5. Can a Password Strength Checker Tool guarantee absolute security for my passwords?',
            text: 'While Password Strength Checker Tools provide valuable insights, no tool can guarantee absolute security. It\'s essential for users to follow best practices like using unique, complex passwords and enabling additional security measures like two-factor authentication.'
        }
    ]

    function test(password) {
        console.log(password)

        const seconds = CheckPassword(password)
        setSeconds(seconds)
        setTime(TimeCalculator(seconds));
    }

    return (
        <>
            <Title><div className='text-center'>Password Strength Checker</div></Title>

            <div className="md:w-2/4 text-center m-auto">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input value={password} onChange={(e) => { test(e.target.value); setPassword(e.target.value) }} type="password" id="first_name" className="w-full md:w-2/4 m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div className="mt-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Time to crack your password:
                </div>

                <div className="block text-sm font-medium text-gray-900 dark:text-white">
                    {time}
                </div>

                {time != 0 ? <div className={"block text-2xl font-bold " + getClassNames(seconds)}>
                    {getStrongValue(seconds)}
                </div> : ''}
            </div>

            <div className="mt-5 mb-5">
            <span className="text-4xl font-extrabold text-gray-800">About this Tool</span>
            <br />
            <span>
                Our tool evaluates password security by analyzing length, complexity, and uniqueness. Enhance account protection with our user-friendly password assessment tool for robust online security.
            </span>
         </div>

         <Faq menus={menus} />
        </>
    )

    function getStrongValue(seconds) {
        if(Math.floor((seconds % 31536000) / 2628000) > 0){
            return 'Strong';
        }

        if(Math.floor(((seconds % 31536000) % 2628000) / 86400) > 0){
            return 'Medium';
        }

        if(Math.floor((seconds % (3600 * 24)) / 3600) > 0){
            return 'Weak';
        }

        return 'Very Weak'
    }

    function getClassNames(seconds){
        if(Math.floor((seconds % 31536000) / 2628000) > 0){
            return "text-green-500 dark:text-green-400";
        }

        if(Math.floor(((seconds % 31536000) % 2628000) / 86400) > 0){
            return "text-yellow-500 dark:text-yellow-400";
        }

        if(Math.floor((seconds % (3600 * 24)) / 3600) > 0){
            return "text-red-500 dark:text-red-400";
        }

        return "text-red-500 dark:text-red-400";
    }

    function CheckPassword(password) {
    var HashesPerSecond = 1000000000;

    var CharacterSets = [
        "0123456789",
        "abcdefghijklmnopqrstuvwxyz",
        "abcdefghijklmnopqrstuvwxyz0123456789",
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+",
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+[]\"{}|;':,./<>?`~"
    ];

        // Figure out which character set the password is using (based on the most 
        // "complex" character in it).
        var base = '';
        var baseKey = null;
        for (var t = 0; t < password.length; t++) {
            var char = password[t];
            var foundChar = false;
            for (var characterSetKey = 0; characterSetKey < CharacterSets.length; characterSetKey++) {
                var characterSet = CharacterSets[characterSetKey];
                if (baseKey <= characterSetKey && characterSet.indexOf(char) > -1) {
                    baseKey = characterSetKey;
                    base = characterSet;
                    foundChar = true;
                    break;
                }
            }
            // If the character we were looking for wasn't anywhere in any of the 
            // character sets, assign the largest (last) character set as default.
            if (!foundChar) {
                base = CharacterSets[CharacterSets.length - 1];
                break;
            }
        }

        var attempts = 0;
        var charactersInBase = base.length;
        var charactersInPassword = password.length;
        for (var position = 0; position < charactersInPassword; position++) {
            
            var powerOf = charactersInPassword - position - 1;
            var charAtPosition = base.indexOf(password[position]) + 1;
            
            if (powerOf == 0) {
                attempts = attempts + charAtPosition;
            }
        
            else {
                var multiplier = Math.pow(charactersInBase, powerOf);
                var newAttempts = charAtPosition * multiplier;
                attempts = attempts + newAttempts;
            }
        }

        // We can (worst case) try a billion passwords a second. Calculate how many days it
        // will take us to get to the password.
        var perDay = HashesPerSecond * 60 * 60 * 24;

        // This allows us to calculate a number of days to crack. We use days because anything
        // that can be cracked in less than a day is basically useless, so there's no point in
        // having a smaller granularity (hours for example).
        var days = attempts / perDay;

        // If it's going to take more than a billion days to crack, just return a billion. This
        // helps when code outside this function isn't using bcmath. Besides, if the password 
        // can survive 2.7 million years it's probably ok.
        if (days > 1000000000) {
            return attempts/HashesPerSecond;
        }

        if(attempts/HashesPerSecond < 1){
            return 1
        }

        return attempts/HashesPerSecond
    }

    function TimeCalculator(seconds) {
        let y = Math.floor(seconds / 31536000);
        let mo = Math.floor((seconds % 31536000) / 2628000);
        let d = Math.floor(((seconds % 31536000) % 2628000) / 86400);
        let h = Math.floor((seconds % (3600 * 24)) / 3600);
        let m = Math.floor((seconds % 3600) / 60);
        let s = Math.floor(seconds % 60);
      
        let yDisplay = y > 0 ? y + (y === 1 ? " year, " : " years, ") : "";
        let moDisplay = mo > 0 ? mo + (mo === 1 ? " month, " : " months, ") : "";
        let dDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
        let hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
        let mDisplay = m > 0 ? m + (m === 1 ? " minute " : " minutes, ") : "";
        let sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds ") : "";
        return yDisplay + moDisplay + dDisplay + hDisplay + mDisplay + sDisplay;
      }

}
