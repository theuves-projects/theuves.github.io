import '../styles/globals.css'
import Header from '../components/header'

const WebSite = ({ Component, pageProps }) => (
  <>
    <title>
      Matheus Alves (@theuves)
    </title>
    <Header />
    <div className="main">
      <Component {...pageProps} />
      <style jsx>{`
        .main {
          padding: 0 10px;
          margin: 0 auto;
          max-width: 620px;
        }
        @media (max-width: 470px) {
          .main {
            padding: 0 15px;
          }
        }
    `}</style>
    </div>
  </>
)

export default WebSite
