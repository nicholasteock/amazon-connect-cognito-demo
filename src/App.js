import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App(signOut, user) {
  return (
    <div className="App">
      <div style={styles.container}>
        <Heading level={1}>Hello {user.username}</Heading>
        <Button onClick={signOut}>Sign out</Button>
        <h2>Amplify Demo</h2>
      </div>
    </div>
}

export default App;
