import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/finished">
      <a style={linkStyle}>Finished</a>
    </Link>
    <Link href="/textWithIcon">
      <a style={linkStyle}>TextWithIcon</a>
    </Link>
    <Link href="/backgroundClip">
      <a style={linkStyle}>background clip</a>
    </Link>
    <Link href="/fixedBackground">
      <a style={linkStyle}>fixed background</a>
    </Link>
    <Link href="/backgroundSizePercent">
      <a style={linkStyle}>background size percent</a>
    </Link>
    <Link href="/backgroundSizeCover">
      <a style={linkStyle}>background size cover</a>
    </Link>
    <Link href="/multipleBackgrounds">
      <a style={linkStyle}>multiple backgrounds</a>
    </Link>
  <Link href="/borderRadius">
      <a style={linkStyle}>border radius</a>
    </Link>
  <Link href="/pillShape">
      <a style={linkStyle}>pill shape</a>
    </Link>
  <Link href="/borderImage">
      <a style={linkStyle}>border image</a>
    </Link>










  </div>
)

export default Header