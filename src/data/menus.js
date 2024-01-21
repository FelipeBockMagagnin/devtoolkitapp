import { FiFileText, FiFile, FiImage, FiLock, FiRepeat, FiLink} from 'react-icons/fi';
import { LuFileJson } from 'react-icons/lu';
import { FaExchangeAlt } from 'react-icons/fa';



const menus = [
    {
        name: 'Javascript Minifier',
        icon: FiFile,
        description: 'Compress your JS',
        link: '/minify-js'
    },
    {
        name: 'JSON Minifier',
        icon: LuFileJson,
        description: 'Compress your JSON',
        link: '/minify-json'
    },
    {
        name: 'JSON Formatter',
        icon: LuFileJson,
        description: 'Beautify your JSON code',
        link: '/format-json'
    },
    {
        name: 'Lorem Ipsum Generator',
        icon: FiFileText,
        description: 'Generate Lorem Ipsum Text',
        link: '/lorem-ipsum'
    },
    {
        name: 'Placeholder Generator',
        icon: FiImage,
        description: 'Create custom placeholder images',
        link: '/placeholder-image-generator'
    },
    {
        name: 'Password Strength',
        icon: FiLock,
        description: 'Check your passwords security',
        link: '/password-strength-checker'
    },
    {
        name: 'Image to Base64',
        icon: FiImage,
        description: 'Convert Image to Base64',
        link: '/image-to-base64'
    },
    {
        name: 'XML to JSON',
        icon: FiRepeat,
        description: 'Convert XML to JSON',
        link: '/xml-to-json'
    },
    {
        name: 'JSON to XML',
        icon: FiRepeat,
        description: 'Convert JSON to XML',
        link: '/json-to-xml'
    },
    {
        name: 'URL Parser',
        icon: FiLink,
        description: 'Parse a URL into components',
        link: '/url-parser'
    }
]


export default menus;