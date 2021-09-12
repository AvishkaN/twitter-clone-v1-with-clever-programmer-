import React, { useEffect,useState } from 'react'
import styled from 'styled-components';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';

function Feed() {

    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        // db.collection("Post").onSnapshot(snapshot=>{
        //     snapshot.docs.map(doc=>{
        //         console.log(doc.data());
        //         setPosts([doc.data()]);
        //     })
        // });

        db.collection("Post").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      )
    },[]);
    return (
        <>
        <DIV className="feed">
            {/* Header */}
            <div className="feed_header">
                    <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox/>

            {/*POST S */}
            {posts.map((post) => (
                <Post
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
                ))}



                {/* <Post 
                    displayName="Jhon Kazi"
                    avatar="https://th.bing.com/th/id/OIP.NaxOdjMgXcugAQoKNfzjvwHaKT?pid=ImgDet&rs=1"
                    userName="@JhonKazi"
                    verified={true}
                    text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis aperiam numquam debitis? Nobis, incidunt provident itaque fugit illo reprehenderit totam! Nemo quasi, temporibus pariatur accusantium aliquid expedita eius sequi!"}
                    image={"https://th.bing.com/th/id/R.864bd3e25e71c9af6dc81cc47d835382?rik=0WO8H%2fgcAEYevw&pid=ImgRaw&r=0"}

                />        
                <Post 
                    avatar="https://th.bing.com/th/id/OIP.NaxOdjMgXcugAQoKNfzjvwHaKT?pid=ImgDet&rs=1"
                    displayName="Kavi Qazi"
                    userName="@JhonKazi"
                    verified={false}
                    text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis aperiam numquam debitis? Nobis, incidunt provident itaque fugit illo reprehenderit totam! Nemo quasi, temporibus pariatur accusantium aliquid expedita eius sequi!"}
                    image={"https://th.bing.com/th/id/R.864bd3e25e71c9af6dc81cc47d835382?rik=0WO8H%2fgcAEYevw&pid=ImgRaw&r=0"}

                />        
                <Post 
                    avatar="https://th.bing.com/th/id/OIP.NaxOdjMgXcugAQoKNfzjvwHaKT?pid=ImgDet&rs=1"
                    displayName="Jhon Kazi"
                    userName="@JhonKazi"
                    verified={true}
                    text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis aperiam numquam debitis? Nobis, incidunt provident itaque fugit illo reprehenderit totam! Nemo quasi, temporibus pariatur accusantium aliquid expedita eius sequi!"}
                    image={"https://th.bing.com/th/id/R.864bd3e25e71c9af6dc81cc47d835382?rik=0WO8H%2fgcAEYevw&pid=ImgRaw&r=0"}

                />         */}
                      
        </DIV>
        </>
    )
}

const DIV=styled.div`
    flex: 0.4;
    border-right: 1px solid var(--twitter-background) ;
    border-left: 1px solid var(--twitter-background) ;
    // scrollbar
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    /* width: 1000px; */

    // hide scrollbar
    &::-webkit-scrollbar{
        display: none;
    }

    .feed_header{
        position: sticky;
        top: 0;
        background-color: white;
        border:5px solid var(--twitter-background) ;
    };


`;


export default Feed;



