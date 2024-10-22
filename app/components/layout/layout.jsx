import Head from "next/head"

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Gradiweb Test</title>
      <meta name="description" content='Gradiweb Test' />
      <link rel="icon" href="/assets/white-logo.svg" />
    </Head>
    <div className="layout">{children}</div>
  </>
)

export default Layout
