import fs from 'fs'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'

export default function Home({ source, frontMatter }) {
    const router = useRouter()
    const {post} = router.query
    const content = hydrate(source)

    return (
        <>
            <h1 className="title">
                {frontMatter.title}
            </h1>
            <p className="subtitle">
                {frontMatter.subtitle}
            </p>
            <article className="article">
                {content}
            </article>
            <style jsx>{`
                .subtitle {
                    font-style: italic;
                    color: gray;
                }
                .author {
                    color: #333;
                    text-align: right;
                    font-size: 14px;
                }    
            `}</style>
        </>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: [
            '/blog/hello-world'
        ],
        fallback: 'blocking'
    }
}

export const getStaticProps = async () => {
    const postList = fs.readdirSync('./blog')
    const source = fs.readFileSync('./blog/' + postList[0], 'utf-8')
    const { content, data } = matter(source)
    const mdxSource = await renderToString(content, { scope: data })

    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    }
}
