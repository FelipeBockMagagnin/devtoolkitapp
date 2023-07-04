import { FiFileText, FiFile, FiImage, FiLock, FiRepeat} from 'react-icons/fi';
import { LuFileJson } from 'react-icons/lu';
import { FaExchangeAlt } from 'react-icons/fa';



const menus = [
    {
        name: 'Javascript Minifier',
        icon: FiFile,
        link: '/minify-js'
    },
    {
        name: 'JSON Minifier',
        icon: LuFileJson,
        link: '/minify-json'
    },
    {
        name: 'JSON Formatter',
        icon: LuFileJson,
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
    },
    {
        name: 'XML to JSON',
        icon: FiRepeat,
        link: '/xml-to-json'
    },
    {
        name: 'JSON to XML',
        icon: FiRepeat,
        link: '/json-to-xml'
    }
]


export default menus;