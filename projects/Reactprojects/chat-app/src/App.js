import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed';
import './App.css';
import Loginform from './components/Loginform';

const projectID ="28a37c0e-f614-462c-af1f-4360fe5c3f89"
const App = () =>{

    if(!localStorage.getItem('username')) return <Loginform />;




    return(
        <ChatEngine
        height = "100vh"
        projectID ={projectID}
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        onNewMessage ={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};
export default App;
