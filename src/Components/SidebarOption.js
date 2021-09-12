import React from 'react'
// import  './SidebarOption.css'
import styled from 'styled-components';

function SidebarOption({Icon,Text,active}) {
    return (
        <>
            <DIV className="sidebaroptions ">
                    <Icon className={`icon ${active && "active"}`}/>
                    <h5 className={`sideBarIconTitle ${active && "active"}`} >{Text}</h5>
            </DIV>
        </>
    )
}

const DIV=styled.div`
     display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 30px;
    /* margin: 0; */
    width: 100px;
    

    &:hover{
        background-color: #e8f5fe;
        color:var(--twitter-color);
        transition: color 100ms ease-out;
    }
    
    .sideBarIconTitle{
        padding-left:8px;
    };
    
    .active{
        color:var(--twitter-color);
        
    }
    
`;



export default SidebarOption;
