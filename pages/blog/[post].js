import fs from 'fs'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'

export default function Home({ source, frontMatter }) {
    const content = hydrate(source)

    return (
        <>
            <div className="metadata">
                <span>
                    Matheus Alves / {(new Date(frontMatter.date)).toLocaleDateString('pt-BR', { dateStyle: 'medium' })}
                </span>
            </div>
            <h1 className="title">
                {frontMatter.title}
            </h1>
            <article className="article">
                {content}
            </article>
            <style jsx>{`
                .metadata {
                    color: #333;
                    font-style: italic;
                    text-align: right;
                    font-size: 14px;
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
    const filename = context.params.post + '.mdx'
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
