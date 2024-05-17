import { useState } from "react"
import axios from "axios";

const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const authObject = {'Project-ID':"28a37c0e-f614-462c-af1f-4360fe5c3f89", 'User-Name' : username , 'User-Secret': password}
    try {
        await axios.get('https://api.chatengine.io/chats', {headers:authObject})
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);

        window.location.reload();
    } catch (error) {
        SetError('Oops , Incorrect Credentials')
    }

}

const Loginform =() =>{
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type = "text" value ={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type = "password" value ={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align = "center">
                        <button type = "submit" className="button">
                            <span>Start Chatting</span>
                        </button>

                    </div>


                </form>
            </div>

        </div>
    ) 
}

export default Loginform ;