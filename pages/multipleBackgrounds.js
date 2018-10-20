import Layout from '../components/MyLayout.js'

export default () => (
  <Layout>
<body>
  <div className="multi-bg-shorthand">
  </div>
</body>

  <style jsx> {`
    .multi-bg-shorthand {
      width: 300px;
      height: 200px;
      background: url(static/spades.png) left top no-repeat,
                  url(static/hearts.png) right top no-repeat,
                  url(static/diamonds.png) left bottom no-repeat,
                  url(static/clubs.png) right bottom no-repeat,
                  pink;
    }

 `} </style>

  </Layout>
)