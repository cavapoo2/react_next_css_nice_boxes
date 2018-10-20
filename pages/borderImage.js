import Layout from '../components/MyLayout.js'

export default () => (
  <Layout>
<body>
  <div className="motto">
    <p>Home sweet home.</p>
  </div>
</body>

    <style jsx>{`

.motto {
  font-family: 'Goudy Old Style', Garamond, 'Big Caslon', 'Times New Roman', serif;
  font-style: italic;
  max-width: 400px;
  text-align: center;
  font-size: 2em;
  border: 40px solid #f9b256;
  -webkit-border-image: url(static/picture-frame.png) 40;
     -moz-border-image: url(static/picture-frame.png) 40;
       -o-border-image: url(static/picture-frame.png) 40;
          border-image: url(static/picture-frame.png) 40;
}
`}</style>
  </Layout>
)