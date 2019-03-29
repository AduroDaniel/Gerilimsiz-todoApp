import Link from 'next/link'

function Footer() {
  return (
    <footer style={navStyle}>

      <div>
        <p style={boldText}>Copyright &copy; 2019 </p>
      </div>

    </footer>
  )
}

  const boldText = {
    textDecoration: 'none',
    weight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginRight: '10px',
    margin: '0',
}
  
  const navStyle = {
    background: '#05052b',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '80px',
    lineHeight: '80px',
    padding: '0 20px',
    textAlign: 'right',
    color: '#ffffff',
    margin: '0',

  }

export default Footer;