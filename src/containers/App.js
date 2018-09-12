import React from 'react';

// Utils
import Spinner from '../components/Spinner';

export default ({ children }) => (
  <React.Fragment>
    <Spinner />
    {children}
  </React.Fragment>
);