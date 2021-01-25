export default () => (
    <header className="header">
        <a className="header-title" href="/">
            Matheus Alves
        </a>
        <ul className="header-list">
            <li className="header-item">
              <a className="header-link" href="/">Home</a>
            </li>
            <li className="header-item">
              <a className="header-link" href="/blog">Blog</a>
            </li>
            <li className="header-item">
              <a className="header-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="header-item">
              <a className="header-link" href="https://github.com/theuves">GitHub</a>
            </li>
            <li className="header-item">
              <a className="header-link" href="https://linkedin.com/u/theuves">LinkedIn</a>
            </li>
        </ul>
        <style jsx>{`
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
          text-decoration: none;
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
          color: black;
          text-decoration: none;
        }
        .header-link:hover {
          text-decoration: line-through;
        }
      `}</style>
    </header>
)