import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


function Post({displayName,userName,verified,text,image,avatar}) {
    return (
        <DIV>
            <div className="postHeader">
                    <Avatar className="Avatar" src={avatar}/>

                    <h4 className="postHeader0 displayName">{displayName}</h4>
                   {
                      verified &&  <VerifiedUserIcon className="vpostHeader0 verificationIcon"/>
                   } 
                    <h5 className="postHeader0 userName">{userName}</h5>
            

            </div>
            <div className="postBody">
                <p>{text}</p>
                <img src={image} alt=""  className="postImage"/>
             
             <div className="postIcons">
                <ChatBubbleOutlineIcon/>
                <RepeatIcon/>
                <FavoriteBorderIcon/>
                <PublishIcon/>
             </div>

            </div>
            
        </DIV>
    )
}

const DIV=styled.div`

/* border:5px solid red; */
/* margin: 20px; */
/* width: 600px; */
/* margin: 50px; */
/* margin-right: 50px; */
padding-left: 50px;
padding-right: 50px;
border-bottom: 2px solid var(--twitter-background) ;


.postHeader{
        display: flex;
        align-items: center;
        margin-left: -50px;

        /* justify-content: space-around; */
    }

    .Avatar{
        margin: 10px;
    }

    .postHeader0{
        margin: 10px;
        margin-left: 3px;
    }
    .verificationIcon{
        margin-left: -5px;
        color: var(--twitter-color);
    }
    .userName{
        color: gray !important;
    }

    .postBody{
        /* background-color: red; */
        margin-top: -15px;
    }

    .postImage{
        border-radius: 30px;
        /* margin: 30px; */
        padding-top: -10px;
        margin-bottom:30px;
        margin-right:50px;
        width: 450px;
    }
    .postIcons{
        display: flex;
        justify-content: space-around;
        margin-top: -16px;
        margin-bottom: 13px;
        cursor: pointer;
    }
`;

export default Post;
