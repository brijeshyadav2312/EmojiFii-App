import React, { useEffect, useState } from "react";
import Success from '../success (1).png'
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Container = (props) => {
    const [iscopy, setCopy] = useState(false)
    useEffect(_ => {
        if(iscopy){
            setTimeout(_ =>{
                setCopy(false);
            },1000)
        }
    },[iscopy])
    return(
        <CopyToClipboard text={props.emoji} onCopy={() => setCopy(true)}>
                <div className={iscopy ? 'copyEmoji': 'emojiContainer'}>
                    <p>{iscopy ? (<img className="sucess" src={Success} alt=""/>) : (props.emoji)}</p><br/>
                    <p>{iscopy ? "Copied" : props.description}</p>
                </div>
        </CopyToClipboard>
        
    )
}
export default Container;