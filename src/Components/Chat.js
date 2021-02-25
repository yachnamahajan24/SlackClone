import React from 'react'
import styled from 'styled-components';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoIcon from '@material-ui/icons/Info';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

function Chat() {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        #clever
                    </ChannelName>
                    <ChannelInfo>
                    Company-wide announcement and work-based matters
                    </ChannelInfo>


                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info/>


                </ChannelDetails>

            </Header>
            <MessageContainer>
                <ChatMessage/>
            </MessageContainer>
            <ChatInput/>
        </Container>

    )
}

export default Chat

const Container = styled.div `
display: grid;
grid-template-rows: 64px auto min-content;
background: #D6EAF8; 
`
const Channel = styled.div `
`
const ChannelDetails = styled.div `
display: flex;
align-items: center;
color: black;

`
const ChannelName = styled.div `
font-weight:700;
`
const ChannelInfo = styled.div `
font-weight:400;
color: white;
font-size:13px;
margin-top:8px;
`
const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
    `

const Header = styled.div `
    padding-left:20px;
    padding-right:20px;
    background: #3498DB;
    display:flex;
    align-items:center;
    justify-content: space-between;
    border-bottom:1px solid #1B2631 ;
`

const MessageContainer = styled.div `
`
















        // <Container>
        //     <Main>
        //         <Hashtag>
        //         #clever 
        //         <IconContainer>
        //         <StarOutlineIcon/>
        //         </IconContainer>
        //         </Hashtag>
                
        //         <TagContainer>
        //         Company-wide announcement and work-based matters
        //         </TagContainer>

        //     </Main>

        //     <DetailsContainer>
        //        <Detail>
        //        Details
        //        <IconContainer1>
        //         <InfoIcon/>
        //         </IconContainer1>
        //         </Detail> 
        //     </DetailsContainer>
            
     
        // </Container>

// const Container = styled.div `
// height: 64px;
// background: #3498DB  ;
// border-bottom: 1px solid #717D7E ;
// display: flex;
// align-items: center;
// justify-content: space-between;

// `
// const Main = styled.div `
// display: flex;
// flex-direction: column;
// padding-left: 20px;
// position:relative;

// `
// const Hashtag = styled.div `
// display: flex;
// font-weight:bold;
// `
// const IconContainer = styled.div `

// `
// const TagContainer = styled.div `
// color: white;
// `
// const DetailsContainer = styled.div `
// display:flex;
// align-items: center;
// margin-right:10px;

// `
// const Detail = styled.div `
// display:flex;
// align-items: center;
// margin-left:10px;
// margin-right:10px;
// `
// const IconContainer1 = styled.div `
// height: 20px;
// margin-left:10px;
// margin-right:10px;


// `

