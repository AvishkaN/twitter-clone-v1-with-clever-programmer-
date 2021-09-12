import React from 'react';
import  styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";

function Widjet() {
    return (
        <>
            <DIV>
                {/* <h1>Widject</h1> */}
                <div className="widjetHeader">
                    <input type="text" placeholder={`    search Twitter`} className="widjet_search"/>
                    <SearchIcon className="widject_search"/>
                </div>

                <div className="widjet_container">
                        <h2>What's happening</h2>

                        <TwitterTweetEmbed tweetId={"1436676579170701316"} />
                        <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="ANirmitha"
                        options={{ height: 400 }}
                        />
                </div>
            </DIV>
        </>
    )
}

const DIV=styled.div`
    flex: 0.3;

    .widjet_search{
        border:none;
        border-radius: 30px;
        padding-left: 20px;
        padding: 20px;
        background-color: var(--twitter-background);
    }

    .widjetHeader{
        display: flex;
        align-items: center;
    }
    .widject_search{
        margin-left: -200px;
    }
`;

export default Widjet;
