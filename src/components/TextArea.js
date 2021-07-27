import React from 'react'
import styled from 'styled-components'

function TextArea() {
    return (
        <Container>
            <Data>
            <UserImg>
             <img src="/images/user.png" />
            </UserImg>
            <Description>
            <textarea type="text" placeholder="Write Something here.."></textarea>
            </Description>
            </Data>

            <ColorSlider>
            Color slider
            </ColorSlider>
       
            
             
        </Container>
    )
}

export default TextArea

const Container=styled.div`
//border:2px solid black;

`
const Data =styled.div`
display:flex;
height:100px;`

const UserImg=styled.div`
    padding:10px 10px;
    img{
        height:40px;    
        pointer:cursor;

    }
`
const Description=styled.div`
  padding : 10px 10px;
  textarea{
    padding: 5px; 
    resize: both;
    overflow: auto;
    width:100%;
  }
`
const ColorSlider=styled.div`
`