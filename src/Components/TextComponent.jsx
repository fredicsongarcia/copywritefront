import React, { useState } from 'react';
//controls
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
//service
import { getText } from '../service/textservice';

export const TextComponent = ({reload}) => {

    const [text, setText] = useState()
    const [showMessage, setshowMessage] = useState(false)
    const saveText = () => {
        getText(text).then(res => {
            setText('')
            reload()
            setshowMessage(true)
            setTimeout(() => {setshowMessage(false)},[4000])
        })
    }

    return <div className="textContent">
        <TextField id="outlined-basic" value={text} label="Insert text" variant="outlined" onChange={(e) => setText(e.target.value)} />

        <Button variant="contained" onClick={() => saveText()}>Send</Button>


        {showMessage &&
            <div className="message" color>
                <Alert severity="success" color="info" variant='filled'>
                    Save successfully
                </Alert>
            </div>
        }
    </div>
}