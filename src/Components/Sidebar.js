import React from 'react'
import SideBarOptions from './SidebarOption'
import styled from 'styled-components';


// meterial UI
import Button from "@material-ui/core/Button";



import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



function Sidebar() {
    return (
        <>
        <DIV className="sidebar">
            {/* Twitter Icon */}
            <TwitterIcon className="TwitterIcon"/>

            <SideBarOptions Icon={HomeIcon} Text={"Home"} active={true}/>
            <SideBarOptions Icon={SearchIcon} Text={"explore"}/>
            <SideBarOptions Icon={NotificationsIcon} Text={"Notification"}/>
            <SideBarOptions Icon={EmailIcon} Text={"Messages"}/>
            <SideBarOptions Icon={BookmarkBorderIcon} Text={"Bookmarks"}/>
            <SideBarOptions Icon={FormatListBulletedIcon} Text={"List"}/>
            <SideBarOptions Icon={PersonIcon} Text={"Profile"}/>
            <SideBarOptions Icon={MoreHorizIcon} Text={"More"}/>

            {/* Tweet Button */}
            <Button variant="outlined" class="sidebar__tweet" fullWidth>Tweet</Button>

        </DIV>
        </>
    )
}

const DIV=styled.div`
    flex:0.3;
    margin-top: 20px;
    padding-left: 30px;
    padding-right: 0px;
    border-right:2px solid  var(--twitter-background) !important;

    .TwitterIcon{
        color: var(--twitter-color);
        font-size: 35px !important;
    };


    .sidebar__tweet{
        cursor: pointer !important;
        background-color: var(--twitter-color) !important;
        color: white !important;
        width: 200px  !important;
        border: none !important;

        padding-top: 15px !important;
        padding-bottom: 15px !important;
        border-radius: 40px !important;

    };
`;

export default Sidebar
