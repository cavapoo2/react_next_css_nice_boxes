import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
        <body>
            <header className="profile-box" role="banner">
                <div className="profile-photo">
                    <img src="static/profile.jpg" alt="Charles the Cat" />
                    <h1 className="username">@CharlesTheCat</h1>
                </div>
            </header>
        </body>

  <style jsx> {`
    /**
    * 1. "Artificial" height applied to body, just to trigger a scrollable are.
    *    and see the effects.
    */
    body {
      padding: 0;
      margin: 0;
      font-family: "Helvetica Neue", Arial, sans-serif;
      height: 4000px; /* [1] */
    }
    /**
    * 1. Note that the positioning of the background now is in relation to the
    *    viewport, so we can't position it in the vertical middle of the header.
    */
    .profile-box {
      position: relative;
      height: 600px;
      background-image: url(img/big-cat.jpg);
      background-position: 50% 0; /* [1] */
      background-repeat: no-repeat;
      background-attachment: fixed;
      box-shadow: inset 0 -.5em .5em rgba(0, 0, 0, 0.3);
      border-bottom: 1px solid #666;
    }

    .profile-photo {
      width: 160px;
      min-height: 200px;
      position: absolute;
      bottom: 60px;
      left: 5%;
      padding: .5em;
      -webkit-border-radius: .5em;
              border-radius: .5em;
      background-color: #fff;
      box-shadow: .25em .25em .5em rgba(0, 0, 0, 0.3);
    }
    .profile-photo img {
      display: block;
      max-width: 100%;
      height: auto;
    }
    .username {
      font-size: 20px;
      color: #666;
      margin: .35em 0 0;
    }
`}  </style>

    </Layout>
)