import React ,{useEffect,useState} from 'react';

//icons
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

//service
import { getTextList } from '../service/textservice';

export const ListComponent =({reloadList})=>{

    const [textList,settextList]=useState([])
    useEffect(()=>{
        getTextList().then((res)=>{            
            settextList(res.textList)
        })
    },[reloadList])

    return <div className="listContent">
        <h2>Results:</h2>
        <div className="text-list">
            {textList.length ? <>
                <div className="list">
                    <h4>Text</h4>
                    <h4>Text Invert</h4>
                    <h4>Palindrome</h4>                    
                </div>
                {textList.map((m, i) => <div className="list">
                    <p>{m.text}</p>
                    <p>{m.textInvert}</p>
                    {m.palindrome ?
                        <div style={{color: 'green'}}><CheckIcon></CheckIcon></div> :
                        <div style={{color: 'red'}}><CloseIcon></CloseIcon></div>
                    }
                </div>)}
            </> : <>No exists records</>
            }
        </div>
    </div>
}