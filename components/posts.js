import formatDate from '../utils/format-date'

export default function Posts({ posts }) {
    return (
        <div className="last-posts">
            {posts.map(post => (
                <div key={post.url} className="post">
                    <div className="post-date">
                        {formatDate(post.date)}
                    </div>
                    <div className="post-title">
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
                    width: 130px;
                    color: #666;
                }
                .post-title {
                    flex: 1;
                }
                .post-link {
                    color: var(--link-color);
                    padding: 0 5px;
                    transition: linear .05s;
                    text-decoration: none;
                }
                .post-link:hover {
                    background-color: #eee;
                }
                .post-link:active {
                    background-color: #ddd;
                }
            `}</style>
        </div>
    )
}