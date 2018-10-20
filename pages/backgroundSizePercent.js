import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
        <body>
            <header className="profile-box" role="banner">
            </header>
        </body>
        <style jsx> {`
    body {
      padding: 0;
      margin: 0;
      font-family: "Helvetica Neue", Arial, sans-serif;
    }
    .profile-box {
      height: 600px;
      background-image: url(static/cat.jpg);
      background-size: 100% auto;
      background-repeat: no-repeat;
    }
  `}</style>

    </Layout>
)