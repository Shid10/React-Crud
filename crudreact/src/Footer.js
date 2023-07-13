import React from 'react'
//import { Navbar } from 'react-bootstrap';

export default function Footer() {
    return (
      <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>&copy; {new Date().getFullYear()} Learning...</p>
      </div>
    </footer>
    );
  }
  const styles = {
    footer: {
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px 0',
      marginTop: '50px',
    },
    container: {
      width: '80%',
      margin: '0 auto',
      textAlign: 'center',
    },
    text: {
      fontSize: '25px',
      
    },
  };