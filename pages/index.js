import Posts from '../components/posts'
import getPosts from '../utils/get-posts'

export default function Home({ posts }) {
  return (
    <>
      <p className="bio">
        Arquiteto de Soluções no{' '}
        <a href="https://grupomytec.com.br">Grupo Mytec</a>{' '}
        focado em AWS, desenvolvedor JavaScript trabalhando em projetos
        independentes e mantenedor de projetos open source como o PortuJS.
      </p>
      <h2>
        Últimos posts
      </h2>
      <Posts posts={posts} />
      <footer className="footer">
        <p>
          Desenvolvido por <a href="https://twitter.com/theuves">@theuves</a>{' '}
          com Next.js. Você pode me contatar por{' '}
          <a href="mailto:theuves@gmail.com">e-mail</a> e caso se interesse
          pelo código-fonte pode encontrá-lo no{' '}
          <a href="https://github.com/theuves/theuves.github.io">meu GitHub</a>.
        </p>
      </footer>
      <style jsx>{`
        .bio {
          margin-bottom: var(--margin);
        }
        .footer {
          border-top: solid 1px #666;
          margin-top: var(--margin);
          color: gray;
          font-size: 14px;
        }
        .footer a {
          color: gray;
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
      })
  }

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