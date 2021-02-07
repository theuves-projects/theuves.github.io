import fs from 'fs'
import renderToString from 'next-mdx-remote/render-to-string'
import matter from 'gray-matter'

export default function getPosts() {
    const filesList = fs.readdirSync('./blog')

    return filesList.map(async (file) => {
        const source = fs.readFileSync(`./blog/${file}`, 'utf-8')
        const { content, data } = matter(source)
        const mdxSource = await renderToString(content, { scope: data })
        const url = file.substr(0, file.length - '.mdx'.length)

        return {
            mdxSource,
            data,
            url,
        }
    })
}
