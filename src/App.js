import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoutes from '../src/Routing/BaseRouter';

function App() {
  return (
    <>
      <Router>
        <BaseRoutes />
      </Router>
    </>
  );
}

export default App;
