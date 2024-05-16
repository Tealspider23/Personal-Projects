import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed';
import './App.css';
import 'dotenv/config'

const App = () =>{
    return(
        <ChatEngine
        height = "100vh"
        //take Project_ID value from .env file

        projectID =(process.env.)
        userName = "Amit" 
        userSecret = "bubun2004" 
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    )
}
export default App;
