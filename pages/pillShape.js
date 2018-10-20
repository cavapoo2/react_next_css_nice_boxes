import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
        <body>
            <ul>
                <li>
                    <a className="obrund" href="#">A ”pill-shape”</a>
                </li>
                <li>
                    <a className="obrund" href="#">Also known as an obrund item</a>
                </li>
            </ul>
        </body>
        <style jsx> {`
    body {
      padding: 2em;
      font-family: 'Avenir Next', Avenir, Corbel, 'Franklin Gothic', 'Century Gothic', CenturyGothic, AppleGothic, sans-serif;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      display: inline-block;
      margin-right: 1em;
      font-size: 2em;
    }
    a {
      text-decoration: none;
      color: #fff;
      background-color: #59f;
      padding: 1em;
    }
    .obrund {
      border-radius: 999em;
    }
`}  </style>

    </Layout>
)