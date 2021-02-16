export default function Header() {
  return (
    <header className="header">
      <span className="header-title">
        Matheus Alves
      </span>
      <ul className="header-list">
        <li className="header-item">
          <a className="header-link" href="/">Início</a>
        </li>
        <li className="header-item">
          <a className="header-link" href="/portfolio">Portfólio</a>
        </li>
        <li className="header-item">
          <a className="header-link" target="_blank" href="https://github.com/theuves">
            GitHub <img className="header-external" src="/external-link.svg" />
          </a>
        </li>
        <li className="header-item">
          <a className="header-link" target="_blank" href="https://www.linkedin.com/in/theuves/">
            LinkedIn <img className="header-external" src="/external-link.svg" />
          </a>
        </li>
      </ul>
      <style jsx>{`
        .header {
          text-align: center;
          padding: calc(var(--margin) / 2) 0;
          margin-bottom: var(--margin);
          border-bottom: solid 1px black;
        }
        .header-title {
          margin-bottom: 0;
          display: inline-block;
          font-size: 3.3em;
          line-height: 100%;
          margin-bottom: 5px;
          text-transform: lowercase;
          color: black;
          font-weight: bold;
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
        .header-link {
          text-transform: uppercase;
          text-decoration: none;
          font-size: .9em;
          color: black;
        }
        .header-external {
          width: .8em;
          color: #666;
        }
        .header-link:hover {
          color: #666;
        }
        @media (max-width: 620px) {
          .header {
            padding: 0 0 5px 0;
            margin-bottom: 20px;
            border-bottom: none;
          }
          .header-title {
            font-size: 2.5em;
          }
          .header-item:not(:first-child) {
            margin-left: 5px;
          }
          .header-item:not(:last-child) {
            margin-right: 5px;
          }
        }
      `}</style>
    </header>
  )
}