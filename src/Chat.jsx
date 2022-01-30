import './Chat.css'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useState } from 'react';
import axios from './axios'

function Chat({messages}){
    const [input, setInput] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()

        await axios.post("/messages/new", {
            "message": input,
            "name": "Nome",
            "timestamp": "10 Janeiro-2022",
            "received": true
        })
        
        setInput("")
    }

    return(
        <div className='chat'>
            <div className='chat__header'>
                <Avatar />

                <div className='chat__headerInfo'>
                    <h3>Room name</h3>
                    <p>Visto por ultimo ...</p>
                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>

                {
                    messages.map(message => (
                        <p className={`chat__message ${message.received && "chat__reciever"}`}>
                            <span className='chat__name'>{message.name}</span>
                            {message.message}
                            <span className='chat__timestamp'>{message.timestamp}</span>
                        </p>
                    ))
                }

            </div>

            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Escreva sua mensagem'
                        type='text'
                    />
                    <button
                        onClick={sendMessage}
                        type='submit'
                    >
                        Enviar Menssagem
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat