import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
        <body>
            <div className="profile-box"></div>
            <div className="profile-box padding-box-clipped"></div>
            <div className="profile-box content-box-clipped"></div>
        </body>

  <style jsx> {`
    body {
      padding: 2em;
      margin: 0;
      font-family: "Helvetica Neue", Arial, sans-serif;
      background-color: #fff;
    }
    /* this default box is the same as background-clip: border-box; */
    .profile-box {
      display: inline-block;
      height: 200px;
      width: 400px;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-image: url(static/cat.jpg);
      border: 10px solid rgba(220, 220, 160, 0.5);
      padding: 10px;
    }
    .padding-box-clipped {
      background-clip: padding-box;
    }
    .content-box-clipped {
      background-clip: content-box;
    }
  `}</style>
    </Layout>
)