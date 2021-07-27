import React ,{Giphy} from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

function Tiles() {

    const handleGif= ()=>{
        ReactDOM.render(<Giphy />, 
            document.getElementById(''));
    }
    return (
        <Container>
            <Controls>
                <TagButton>
                    <img src="/images/user.png"/> 
                    <span>Tag friend</span>
                </TagButton>
                <CheckInButton>
                    <img src="/images/check.png"/> 
                    <span>Check In</span>
                </CheckInButton>
                <GifButton onClick={handleGif}>
                     <img src="/images/gif.png"/> 
                     <span>GIF</span>
                </GifButton>
                <EventButton>
                    <img src="/images/event.png"/>
                    <span>Tag Events</span>
                </EventButton>
                
            </Controls>
    
        </Container>
    )
}

export default Tiles

const Container=styled.div`

`
const Controls=styled.div`
 display:flex;
  align-items:center;
`
const TagButton=styled.button`
display: flex;
height:25px;
width:50%;
align-items:center;
border:none;
border-radius:10px;
padding: 0px 10px;
margin-right:22px; 
cursor:pointer;
background:#F6F8FA;
&:hover{
     background:#d0dbe5;
     transition:all 0.2s ease 0s;
    }
 img{
     height:15px;
 }
`
const CheckInButton=styled(TagButton)``
const GifButton=styled(TagButton)``
const EventButton=styled(TagButton)``