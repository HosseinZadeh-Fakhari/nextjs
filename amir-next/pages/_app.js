import '../styles/template-style/MainHaeder.css'

import Layout from '../public/site-template/layout'

function MyApp({ Component, pageProps }) {
  return(  <Layout> <Component {...pageProps} /></Layout>
)}

export default MyApp
