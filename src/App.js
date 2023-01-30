import React from 'react';
import './App.css';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

function App({signOut, user}) {
  return (
    <div className="App">
        <Heading level={1}>Hello {user.username}</Heading>
        <h2>Amplify Demo</h2>
    </div>
  );
}

export default withAuthenticator(App);
