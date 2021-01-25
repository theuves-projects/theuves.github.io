import Posts from '../components/posts'
import getPosts from '../utils/get-posts'
import formatDate from '../utils/format-date'

export default function Blog({ posts }) {
    return <Posts posts={posts} />
}

export const getStaticProps = async () => {
    const data = []
    const posts = getPosts()

    for (let post of posts) {
        data.push({
            title: (await post).data.title,
            date: formatDate((await post).data.date),
            url: `/blog/${(await post).url}`,
        })
    }

    return {
        props: {
            posts: data
        }
    }
}