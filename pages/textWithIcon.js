import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
        <body>
            <p className="text-with-icon">Activate flux capacitor</p>
        </body>
        <style jsx> {`
    .text-with-icon {
      display: inline-block;
      padding-right: 4em;
      background-image: url(static/diamonds.png);
      background-repeat: no-repeat;
      background-position: right 3em top 50%;
    }
  `}
        </style>

    </Layout>
)