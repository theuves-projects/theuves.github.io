import Posts from '../components/posts'

export default function Home() {
  return (
    <>
      <p className="bio">
        Arquiteto de Soluções no{' '}
        <a href="https://grupomytec.com.br">Grupo Mytec</a>{' '}
        focado em AWS, desenvolvedor JavaScript trabalhando em projetos
        independentes e mantenedor de projetos open source como PortuJS.
      </p>
      <h2>
        Últimos posts
      </h2>
      <Posts />
      <footer className="footer">
        <p>
          Desenvolvido por @theuves com Next.js. Você pode me contatar por
          e-mail e caso se interesse pelo código-fonte pode encontrá-lo em meu
          GitHub.
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
      `}</style>
    </>
  )
}
