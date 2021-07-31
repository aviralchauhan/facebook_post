import React from 'react'
import styled from 'styled-components'
function Footer() {
    return (
        <Container>
            <Button>Only me
            <img src="/facebook_post/images/down-arrow.png" />
            </Button>
            <Button id="post"     background-color= "skyblue";>Post</Button>
        </Container>
    )
}

export default Footer

const Container=styled.div`
height:30px;
border:1px solid black;
border-radius:4px;
background: #F6F8FA;
display:flex;
flex:1;
justify-content:flex-end;
height:20px;
padding:5px 5px;

`

const Button=styled.button`
margin-left:5px;
padding:0 5px ;
 img{
     height:10px;
 }

`
