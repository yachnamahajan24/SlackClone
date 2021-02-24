import React from 'react'
import styled from 'styled-components';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoIcon from '@material-ui/icons/Info';

function Chat() {
    return (
        <Container>
            <Main>
                <Hashtag>
                #clever 
                <IconContainer>
                <StarOutlineIcon/>
                </IconContainer>
                </Hashtag>
                
                <TagContainer>
                Company-wide announcement and work-based matters
                </TagContainer>

            </Main>

            <DetailsContainer>
               <Detail>
               Details
               <IconContainer1>
                <InfoIcon/>
                </IconContainer1>
                </Detail> 
            </DetailsContainer>
            
     
        </Container>
    )
}

export default Chat

const Container = styled.div `
height: 64px;
background: #3498DB  ;
border-bottom: 1px solid #717D7E ;
display: flex;
align-items: center;
justify-content: space-between;

`
const Main = styled.div `
display: flex;
flex-direction: column;
padding-left: 20px;
position:relative;

`
const Hashtag = styled.div `
display: flex;
font-weight:bold;
`
const IconContainer = styled.div `

`
const TagContainer = styled.div `
color: white;
`
const DetailsContainer = styled.div `
display:flex;
align-items: center;
margin-right:10px;

`
const Detail = styled.div `
display:flex;
align-items: center;
margin-left:10px;
margin-right:10px;
`
const IconContainer1 = styled.div `
height: 20px;
margin-left:10px;
margin-right:10px;


`

