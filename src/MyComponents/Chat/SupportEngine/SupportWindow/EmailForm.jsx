import React, {useState, useEffect} from 'react'
import {styles} from '../styles'
import {LoadingOutlined} from '@ant-design/icons'
import Avatar from '../Avatar'
import axios from 'axios'

const EmailForm = props => {
    const [email, setEmail] = useState(localStorage.getItem('email'))
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('role') === 'user') {
            let mail = localStorage.getItem('email');
            setEmail(mail);
            console.log('LOCAL: ', mail);
            console.log('STATE: ', email)
            handleSubmit();
        }
    }, []);

    function getOrCreateUser(callback) {
        axios.put('https://api.chatengine.io/users/',
            {
                "username": email,
                "secret": email,
                "email": email
            },
            {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}
        )
        .then(r => callback(r.data))
    }

    function getOrCreateChat(callback) {
        axios.put('https://api.chatengine.io/chats/',
        {
            "usernames": ["admin", email],
            "is_direct_chat": true
        },
        {headers: {"Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY}}
        )
        .then(r => callback(r.data))
    }

    function handleSubmit() {
        setLoading(true);
        console.log('Sending email', email);

        getOrCreateUser(
            user => {
                props.setUser(user)
                getOrCreateChat(
                    chat => props.setChat(chat)
                )
            }
        )

    }

    return(
        <>
        
        </>
    )
}

export default EmailForm