import cheerio from 'cheerio'
import hydrate from 'next-mdx-remote/hydrate'

export default function Posts({ posts }) {
    return (
        <div className="last-posts">
            {posts.map(({ title, date, url, mdxSource }) => (
                <article className="article" key={title}>
                    <h3 className="title">
                        <a className="title-link" href={url}>
                            {title}
                        </a>
                    </h3>
                    <div className="date">
                        Publicado em {formatDate(date)}
                    </div>
                    <div
                        className="preview"
                        dangerouslySetInnerHTML={{
                            __html: getFirstParagraph(mdxSource)
                        }}
                    />
                </article>
            ))}
            <style jsx>{`
                .article {
                    margin-bottom: 30px;
                }
                .title {
                    margin-bottom: 0;
                    font-size: 1.5em;
                    font-weight: lighter;
                }
                .title-link {
                    color: #364496;
                }
                .title-link:hover {
                    opacity: .8;
                }
                .date {
                    margin-bottom: 10px;
                    color: gray
                }
                .preview {
                    font-style: italic;
                    color: #333;
                }
                .footer {
                    display: flex;
                }
            `}</style>
        </div>
    )
}

function formatDate(date) {
    const dt = new Date(date)
    return dt.toLocaleDateString('pt-BR', {
        dateStyle: 'long'
    })
}

function getFirstParagraph(mdxSource) {
    const renderedHTML = mdxSource.renderedOutput
    const $ = cheerio.load(renderedHTML)
    const p1 = $('p:nth-child(1)').text()
    const p2 = $('p:nth-child(2)').text()
    const preview = [p1.split(' '), p2.split(' ')]
        .flat()
        .slice(0, 40)
        .join(' ')
        .replace(/[,]$/, '') + '...'
    return preview
}