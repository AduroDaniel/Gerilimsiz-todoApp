import Link from 'next/link'

function Navbar() {
  return (
    <nav style={navStyle}>

      <Link href='/'>
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href='/about'>
        <a style={linkStyle}>About</a>
      </Link>

    </nav>
  )
}

const linkStyle = {
  textDecoration: 'none',
  weight: 'bold',
  color: '#ffffff',
  marginRight: '15px',
}

const navStyle = {
  background: '#05052b',
  textAlign: 'right',
  padding: '10px',
  color: '#ffffff'
}

export default Navbar