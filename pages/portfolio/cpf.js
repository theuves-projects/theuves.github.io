function Page() {
  return (
    <div>
      <article>
        <header className="header">
          <div className="header-icon">
            <img className="header-icon-src" src="/images/logo-cpf.png" />
          </div>
          <div className="header-content">
            <h1 className="header-title">
              cpf
            </h1>
            <p className="header-timeline">
              Dezembro, 2015 &mdash; presente
            </p>
          </div>
        </header>
        <main className="content">
          <p>
            Uma biblioteca em JavaScript criada em 2015 para ajudar
            programadores a implementarem soluções com a validação, formatação
            e geração de números de CPF (Cadastro de Pessoas Físicas).
            Atualmente o projeto conta com cerca de 500 mil instalações no NPM
            e centenas de usuários em repositórios públicos do GitHub.
          </p>
        </main>
        <footer className="footer">
          <a className="button" href="https://github.com/theuves/cpf">
            Repositório no GitHub
          </a>
        </footer>
      </article>
      <style jsx>{`
        .header {
          display: flex;
        }
        .header-icon {
          margin-right: 25px;
          border-radius: 100%;
          width: 100px;
        }
        .header-icon-src {
          width: 100%;
        }
        .header-content {
          flex: 1;
        }
        .header-title,
        .header-timeline {
          margin: 0;
        }
        .header-title {
          font-size: 2em;
        }
        .header-timeline {
          color: gray;
          font-style: italic;
        }
        .content {
          padding: 20px 0;
        }
        .button {
          display: inline-block;
          padding: 10px 20px;
          color: white;
          background-color: #238636;
        }
      `}</style>
    </div>
  )
}

export default Page