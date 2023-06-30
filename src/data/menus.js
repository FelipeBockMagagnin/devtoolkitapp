import { FiFileText, FiFile, FiImage } from 'react-icons/fi';

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
    }
]


export default menus;