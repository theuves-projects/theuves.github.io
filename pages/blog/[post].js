import fs from 'fs'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'

export default function Home({ source, frontMatter }) {
    if (!source) return 'Artigo não encontrado.'
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
    const paths = fs.readdirSync('./blog')
        .map((filename) => {
            return '/blog/' + filename.replace('.mdx', '')
        })

    return {
        paths: paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context) => {
    const postList = fs.readdirSync('./blog')
    const filename = context.params.post + '.mdx'

    if (!postList.includes(filename)) {
        return {
            props: {}
        }
    }

    const source = fs.readFileSync('./blog/' + filename, 'utf-8')
    const { content, data } = matter(source)
    const mdxSource = await renderToString(content, { scope: data })

    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    }
}
