import React ,{useState } from 'react'
import styled from 'styled-components'
import Header from './Header';
import TextArea from './TextArea';
import Tiles from './Tiles'
import Footer from './Footer'
import Giphy from './Giphy'
function Post(){
    return (
        <Container>
            <Header />
            <TextArea />
            <Tiles />
            <Footer />
            <Giphy />
        </Container>
    )
    }

export default Post

const Container =styled.div`
max-width:40%;
margin:10px 10px;
border-radius:4px;
border:1px solid black;
`
