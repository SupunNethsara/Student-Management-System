import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>My Stylish List</h1>
      <MyList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));