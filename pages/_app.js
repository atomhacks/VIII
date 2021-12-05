import '@styles/globals.css'
import Nav from '@components/Nav.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="container">
        <Nav />
      </div>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
