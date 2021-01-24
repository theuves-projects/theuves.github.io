export default function Home() {
  return (
    <main className="main">
      <header className="header">
        <h1 className="header-title">
          Matheus Alves
        </h1>
        <ul className="header-list">
          <li className="header-item">
            <a className="header-link" href="/">Home</a>
          </li>
          <li className="header-item">
            <a className="header-link" href="/portfolio">Portfolio</a>
          </li>
          <li className="header-item">
            <a className="header-link" href="/blog">Blog</a>
          </li>
          <li className="header-item">
            <a className="header-link" href="https://github.com/theuves">GitHub</a>
          </li>
          <li className="header-item">
            <a className="header-link" href="https://linkedin.com/u/theuves">LinkedIn</a>
          </li>
        </ul>
      </header>
      <p className="bio">
        Arquiteto de Soluções no <a className="link" href="https://grupomytec.com.br">Grupo Mytec</a> focado em AWS, desenvolvedor JavaScript trabalhando em projetos independentes e mantenedor de projetos open source como PortuJS.
      </p>
      <h2>
        Últimos posts
      </h2>
      <div className="last-posts">
        <div className="post">
          <div className="post-date">Maio 7, 2020</div>
          <div className="post-title">
            <a className="post-link" href="#">Impedindo que a tela desligue com JavaScript</a>
          </div>
        </div>
        <div className="post">
          <div className="post-date">Jan 19, 2019</div>
          <div className="post-title">
            <a className="post-link" href="#">Um pouco sobre CSS Grid Layout</a>
          </div>
        </div>
        <div className="post">
          <div className="post-date">Dez 23, 2018</div>
          <div className="post-title">
            <a className="post-link" href="#">Largura e altura exatas no CSS</a>
          </div>
        </div>
        <div className="post">
          <div className="post-date">Dez 17, 2018</div>
          <div className="post-title">
            <a className="post-link" href="#">Arredondando números com JavaScript</a>
          </div>
        </div>
        <div className="post">
          <div className="post-date">Dez 16, 2018</div>
          <div className="post-title">
            <a className="post-link" href="#">Números grandes em JavaScript com BigInt</a>
          </div>
        </div>
        <footer className="footer">
          <p>Desenvolvido por @theuves com Next.js. Você pode me contatar por e-mail e caso se interesse pelo código-fonte pode encontrá-lo em meu GitHub.</p>
        </footer>
      </div>
      <style jsx>{`
        .main {
          max-width: 620px;
          margin: 0 auto;
        }
        .header {
          text-align: center;
          padding: calc(var(--margin) / 2) 0;
          margin-bottom: var(--margin);
          border-bottom: solid 2px black;
        }
        .header-title {
          margin-bottom: 0;
          display: inline-block;
          font-size: 2.5em;
          line-height: 175%;
          text-transform: lowercase;
        }
        .header-list {
          padding-left: 0;
        }
        .header-item {
          display: inline-block;
        }
        .header-item:not(:first-child) {
          margin-left: 10px;
        }
        .header-item:not(:last-child) {
          margin-right: 10px;
        }
        .bio {
          margin-bottom: var(--margin);
        }
        .bio .link {
          color: var(--link-color);
          box-shadow: inset 0 -2px 0 0 var(--link-color);
        }
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
        }
        .post-link:hover {
          background-color: #eee;
        }
        .post-link:active {
          background-color: #ddd;
        }
        .footer {
          border-top: solid 1px #666;
          margin-top: var(--margin);
          color: gray;
          font-size: 14px;
        }
      `}</style>
    </main>
  )
}
