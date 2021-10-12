import React from 'react';
// import {
//   BrowserRouter as Router, Route, Switch,
// } from 'react-router-dom';
import Main from './pages/Main';
import routes from './utils/routes';

function App() {
  return (
    <div>
      <Main />
      {/* <Router> */}
      {/*  <Switch> */}
      {/*    {routes.map(({ */}
      {/*      id, exact, path, component, */}
      {/*    }) => ( */}
      {/*      <Route */}
      {/*        key={id} */}
      {/*        exact={exact} */}
      {/*        id={id} */}
      {/*        path={path} */}
      {/*        component={component} */}
      {/*      /> */}
      {/*    ))} */}
      {/*  </Switch> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
