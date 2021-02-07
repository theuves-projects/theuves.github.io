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
    `}</style>
    </div>
  </>
)

export default WebSite
