import Layout from '../components/MyLayout.js'

export default () => (
    <Layout>
        <body>
            <div className="round"></div>
            <div className="round oval"></div>
        </body>

        <style jsx> {`
  div {
    display: inline-block;
    margin-right: 1em;
  }
  .round {
    width: 300px;
    height: 300px;
    -webkit-border-radius: 50%;
            border-radius: 50%;
    background-color: #59f;
  }
  .oval {
    width: 600px;
  }

  `}</style>

    </Layout>
)