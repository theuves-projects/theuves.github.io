import formatDate from '../utils/format-date'

export default function Posts({ posts }) {
    return (
        <div className="last-posts">
            {posts.map(post => (
                <div key={post.url} className="post">
                    <div className="post-title">
                        <span className="post-date">
                            {formatDate(post.date)}
                        </span>
                        <a className="post-link" href={post.url}>
                            {post.title}
                        </a>
                    </div>
                </div>
            ))}
            <style jsx>{`
                .post {
                    display: flex;
                    margin-bottom: 5px;
                }
                .post-date {
                    padding: 2px 6px;
                    margin-right: 15px;
                    border-radius: 3px;
                    font-size: .9em;
                    font-family: monospace;
                    color: #eee;
                    background-color: #4caf50;
                }
                .post-title {
                    flex: 1;
                }
                .post-link {
                    color: var(--link-color);
                    padding: 2px 6px;
                    transition: linear .05s;
                    text-decoration: none;
                }
                .post-link:hover {
                    background-color: #eee;
                }
                .post-link:active {
                    background-color: #ddd;
                }
                @media (max-width: 620px) {
                    .post-date {
                        margin-right: 0px;
                        display: block;
                        font-style: italic;
                        background-color: transparent;
                        color: gray;
                    }
                    .post-link {
                        padding: 0;
                    }
                    .post-link:hover,
                    .post-link:active {
                        background-color: transparent;
                    }
                }
            `}</style>
        </div>
    )
}