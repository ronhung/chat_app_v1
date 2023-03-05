import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'c0c206d9-626e-4c99-a2e6-83405eca065c';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  const userName = localStorage.getItem('username');
  const userSecret = localStorage.getItem('password');
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={userName}
      userSecret={userSecret}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;