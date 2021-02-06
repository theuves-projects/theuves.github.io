import '../styles/globals.css'
import Header from '../components/header'

const WebSite = ({ Component, pageProps }) => (
  <>
    <Header />
    <div className="main">
      <Component {...pageProps} />
      <style jsx>{`
        .main {
          max-width: 600px;
          margin: 0 auto;
        }
    `}</style>
    </div>
  </>
)

export default WebSite
