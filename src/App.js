import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { ActionCard } from './ui-components';

/* src/App.js */
const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: 'Enter your username here',
      isRequired: true,
      label: 'Username:'
    },
  },
}
function App({ signOut, user }) {
  // Todo logic here

  return (
    <>



      {/* Add Todo JSX here  */}
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut}>Sign out</Button>
    </>
  );
}

export default withAuthenticator(App);
