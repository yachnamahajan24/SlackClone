import React from 'react'
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItems} from '../data/SidebarData';
import AddIcon from '@material-ui/icons/Add';
import { sidebarChannels } from '../data/SidebarChannel';
import db from '../firebase';

function Sidebar(props) {

    const addChannel = () =>{
        const promptName = prompt("Enter Channel name");
        if(promptName){
            db.collection('rooms').add({
                name: promptName
            })
        }

    }
    return (
      <Container>
          <WorkSpaceContainer>
              <Name>
                  Techie
              </Name>
              <NewMessage>
                  <AddCircleOutlineIcon/>
              </NewMessage>
          </WorkSpaceContainer>
          <MainChannels>
              {
                  sidebarItems.map(item => (
                    <MainChannelItem>
                        {item.icon}
                        {item.text}
                    </MainChannelItem>
                  ))
              }
             
          </MainChannels>
          <ChannelsContainer>
              <NewChannelContainer>
                  <div>
                      Channels
                  </div>
                  <AddIcon onClick = {addChannel}/>
              </NewChannelContainer>
              <ChannelList>
                  {
                      props.rooms.map(item => (
                          <Channel>
                              #{item.name}
                          </Channel>
                      ))
                  }






              {/* {
                          sidebarChannels.map(item => (
                            <Channel>
                                {item.text}
                            </Channel>
                          ))
                      } */}
                  
              </ChannelList>
          </ChannelsContainer>

      </Container>
    )
}

export default Sidebar

const Container = styled.div `
    background: #1B2631
    ;
`

const WorkSpaceContainer = styled.div `
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Name = styled.div `
    
`

const NewMessage = styled.div `
    width: 36px;
    height: 36px;
    background: white;
    color: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;    
`

const MainChannels = styled.div `
    padding-top: 20px;
`

const MainChannelItem = styled.div `
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover{
        background: #2874A6 ;
        color: white;
    }
`
const ChannelsContainer = styled.div `
   color: rgb(188,171,188);
   margin-top: 10px;
`

const NewChannelContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
`

const ChannelList = styled.div `
`
const Channel = styled.div `
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    
    :hover{
        background: #2874A6 ;
        color: white;
    }
    `


