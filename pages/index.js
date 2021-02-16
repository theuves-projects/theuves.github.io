import Posts from '../components/posts'
import getPosts from '../utils/get-posts'

export default function Home({ posts }) {
  return (
    <>
      <div className="bio">
        <p className="bio-text">
          Arquiteto de Soluções no{' '}
          <a href="https://grupomytec.com.br">Grupo Mytec</a>{' '}
          focado em AWS, desenvolvedor JavaScript trabalhando em projetos
          independentes e mantenedor de projetos open source como o{' '}
          <a href="https://github.com/theuves">PortuJS</a>.
        </p>
        <div className="bio-image">
          <img src="/profile.jpeg" className="bio-image-src" />
        </div>
      </div>
      <h2 className="subtitle">
        Últimos posts
      </h2>
      <Posts posts={posts} />
      <style jsx>{`
        .bio {
          display: flex;
          margin-bottom: 20px;
          align-items: center;
          padding: 20px 30px;
          background-color: #f2f5d7;
        }
        .bio-image {
          display: flex;
          width: 180px;
          align-items: center;
        }
        .bio-image-src {
          width: 100%;
        }
        .bio-text {
          flex: 1;
          font-size: 1em;
          padding-right: 60px;
          color: #333;
        }
        .subtitle {
          font-size: 1.75em;
          margin-bottom: 30px;
        }
        .subtitle::after {
          content: '';
          display: block;
          background-color: #eee;
          width: 100%;
          height: 1px;
        }
        @media (max-width: 620px) {
          .bio-text {
            padding-right: 40px;
          }
        }
        @media (max-width: 470px) {
          .footer {
            margin-top: 20px;
          }
          .bio-text {
            padding-right: 0;
          }
          .bio-image {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export const getStaticProps = async () => {
  let data = []
  const posts = getPosts()

  for (let post of posts) {
    data.push({
      title: (await post).data.title,
      date: (await post).data.date,
      url: `/blog/${(await post).url}`,
      mdxSource: (await post).mdxSource
    })
  }

  // Sort the posts by release date
  data = data.sort((a, b) => {
    const dateA = (new Date(a.date)).getTime()
    const dateB = (new Date(b.date)).getTime()

    if (dateA < dateB) return 1
    if (dateA > dateB) return -1
    return 0
  })

  return {
    props: {
      posts: data
    }
  }
}