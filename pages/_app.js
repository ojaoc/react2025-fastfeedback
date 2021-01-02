import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';
import { ProvideAuth } from '../lib/auth';

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object,
};

export default MyApp;
