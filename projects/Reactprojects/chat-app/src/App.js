import { ChatEngine } from 'react-chat-engine';
import  ChatFeed  from './components/ChatFeed';
import './App.css';

const App = () =>{
    return(
        <ChatEngine
        height = "100vh"
        projectID = "28a37c0e-f614-462c-af1f-4360fe5c3f89"
        userName = "Amit"
        userSecret = "bubun2004"
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} /> }
        />
    )
}
export default App;
