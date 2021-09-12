import React, { useState } from 'react'
import styled from 'styled-components'
import {Avatar,Button} from '@material-ui/core'
import db from './firebase';

function TweetBox() {
    const [tweetMessage,setTweetMessage]=useState("");
    const [tweetImageUrl,setImageUrl]=useState("");

    const sendTweet=(e)=>{

        console.log(1);
        db.collection("Post").add({
            key:tweetMessage,
            displayName:"Wero Mogan",
            userName:"@weromog",
            verified:true,
            text:tweetMessage,
            image:tweetImageUrl,
            avatar:"https://th.bing.com/th/id/R.101ddf2bf344e2c15f9364e92b72bdc3?rik=Adm42Ek3AnG3XQ&pid=ImgRaw&r=0"
        });
        console.log(2);
    };

    return (
        <DIV className="tweetBox">
            <form >
                <div className="tweetBox__input">
                    <Avatar className="avatar"/>
                    <input type="text" placeholder="What's happening ?" onChange={e=>setTweetMessage(e.target.value)} value={tweetMessage}/>
                </div>
                    <input type="text" placeholder="Optional: Enter image URL"  onChange={e=>setImageUrl(e.target.value)} value={tweetImageUrl}/>
            </form>
                <Button   className="tweetBox__Button" onClick={()=>sendTweet()}>Tweet</Button>
        </DIV>
    )
}

const DIV=styled.div`

    padding-bottom: 10px;
    border-bottom: 8px solid var(--twitter-background);
    padding-right:10px;
    display: flex;
    flex-direction:column;

    .tweetBox__input{
        display: flex;
        padding: 20px;
        width: 400px;

        
        input{
            width: 100%;
            /* height: 200px; */
            font-size: 20px;
            padding-left: 10px;
            border:none;
        }
        
        
    }
    
    input{
        width: 100%;
        /* height: 200px; */
        font-size: 15px;
        padding-left: 10px;
        border:none;
    }
    .tweetBox__Button{
        /* background-color: red;
        color:var(--twitter-color); */


        cursor: pointer !important;
        background-color: var(--twitter-color) !important;
        color: white !important;
        width: 100px  !important;
        border: none !important;

        padding-top: 5px !important;
        padding-bottom: 5px !important;
        border-radius: 40px !important;
        margin-left: auto !important;

    };
`;


export default TweetBox
