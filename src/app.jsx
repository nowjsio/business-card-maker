import React from 'react';
import styles from './app.module.css';
import HelloWorld from './components/hello-world/hello-world';

function App() {
  const propsTest = 'world';
  return (
    <>
      <h1 className={styles.test}>Hello Project :D</h1>
      <HelloWorld hello={propsTest} />
    </>
  );
}

export default App;
