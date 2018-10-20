import Layout from '../components/MyLayout.js'

export default () => (
  <Layout>
   <header className="profile-box" role="banner"></header>

    <style jsx> {`
    body {
      margin: 0;
    }
    .profile-box {
      height: 600px;
      background-image: url(static/big-cat.jpg);
      background-size: cover;
      background-position: 50% 30%;
      background-repeat: no-repeat;
    }
  `}</style>

  </Layout>
)