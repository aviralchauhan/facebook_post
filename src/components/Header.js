import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <NavMenu>
        <Nav>
               <a> 
                 <img src=".../images/icon-1.png" />
                 <span>Compose Post</span>
                 <span>|</span>

               </a>
               <a>
                <img src="/images/icon-2.png" />
                 <span>Photo/Video Albums</span>
                 <span>|</span>
               </a>
               <a>
                <img src="/images/icon-3.png" />
                 <span>Live Video</span>
                 
               </a>
                 
        </Nav>
              <Close>
               <img src="/images/close.png" />
               </Close>
    </NavMenu>
    )
}

export default Header

const NavMenu=styled.div`
height:30px;
background: #F6F8FA;
display:flex;
align-items:center;
        
`
const Close=styled.div`
img{
    height:14px;
    pointer:cursor;
}

`

const Nav=styled.div`

   a{
        font-size:14px;
        padding: 0 5px;
        cursor:pointer;
        color: #0000b3;
        &:hover{
            color:black;
          }
        img{
            height:10px;
            dislpay:flex;
            padding:0 3px;
        }
        span{
            padding:5px;
        }
   }
    
   
}

   
`
 

