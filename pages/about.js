import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const About = () => (
    <div>
        <Navbar />
        <Head>
            <title>Gerilimsiz Todo Application</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="/static/App.css" rel="stylesheet" />
        </Head>
        <layout>
            <h1  className="header">Gerilimsiz TodoApp</h1>
            <p style={bodyStyle}>Gerilimsiz is the stress reduction App that would help you schedule and       manage your workflow by adding and deleting tasks todo, thereby reducing workload stress
            </p>
      </layout>
        
        <h4 style={boldText}>Author</h4>
        <p>Daniel Aduro</p>
        <h3 style={boldText}>Version</h3>
        <p>1.0.0</p>
        <Footer />
    </div>
);

const linkStyle = {
    textDecoration: 'none',
    weight: 'bold',
    color: '#000',
}

const boldText = {
    textDecoration: 'none',
    weight: 'bold',
    color: '#000',
}

const bodyStyle = {
    fontFamily: 'Lato',
    fontSize: '16px',
    lineHeight: '1.7',
    marginTop: '10px', 
    padding: '40px',
    color: '#000'
}

export default About;