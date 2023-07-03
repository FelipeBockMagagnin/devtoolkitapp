import { FiFileText, FiFile, FiImage, FiLock } from 'react-icons/fi';

const menus = [
    {
        name: 'Javascript Minifier',
        icon: FiFile,
        link: '/minify-js'
    },
    {
        name: 'JSON Minifier',
        icon: FiFile,
        link: '/minify-json'
    },
    {
        name: 'JSON Formatter',
        icon: FiFile,
        link: '/format-json'
    },
    {
        name: 'Lorem Ipsum Generator',
        icon: FiFileText,
        link: '/lorem-ipsum'
    },
    {
        name: 'Placeholder Generator',
        icon: FiImage,
        link: '/placeholder-image-generator'
    },
    {
        name: 'Password Strength',
        icon: FiLock,
        link: '/password-strength-checker'
    },
    {
        name: 'Image to Base64',
        icon: FiImage,
        link: '/image-to-base64'
    }
]


export default menus;