import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed';
import './App.css';
import Loginform from './components/Loginform';


const App = () =>{

    if(!localStorage.getItem('username')) return <Loginform />;




    return(
        <ChatEngine
        height = "100vh"
        //take Project_ID value from .env file

        projectID ={PROJECT_ID}
        userName = "Ankit"
        userSecret = {PROJECT_SECRET}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    )
}
export default App;
