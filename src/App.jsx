import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { signInWithGoogle } from './lib/firebase';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Testing</h1>
      <Button variant='secondary' onClick={signInWithGoogle}>
        Sign In
      </Button>
    </>
  );
}

export default App;
