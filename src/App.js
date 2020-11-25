import React, { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import './App.css';

const App = () => {
  const [hasLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="App">
      <div id="pre-loader">
        <Spinner color="info" style={{ width: '3em', height: '3em' }} />
        <p className="sub-title">christopher robin reynolds</p>
      </div>
      <div id="loaded">
        <h1>Content</h1>
        hasLoaded: {hasLoaded ? 'true' : 'false' }
      </div>
    </div>
  );
}

export default (App);
