import MinifyJson from '../../components/minify-json';

export const metadata = {
    title: 'JSON Minifier - Dev Toolkit',
    description: 'Minify and compact your JSON (JavaScript Object Notation), removing unnecessary characters, such as whitespace and comments with this JSON minifier online tool.',
}

export default function Page() {
    return (<MinifyJson/>)
}