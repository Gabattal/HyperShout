import styled from 'styled-components';
import { BasicButton } from '../components/basic-button';

export const Channel = () => {

  const servers = {
    iceServers: [
      {
        urls:['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
      }
    ],
    iceCandidatePoolSize: 10
  }

  let localStream = null;
  let remoteStream = null;

  let pc = new RTCPeerConnection(servers);

  //Setup media sources


    const handleClick = (e) => {
      e.preventDefault();
      console.log('The link was clicked.');
    }

  return (
    <ChannelStyles.Container>
      <ChannelStyles.ContainerCanvas>
        <ChannelStyles.Sender>
          test
        </ChannelStyles.Sender>
        <BasicButton onClick={handleClick} textMessage={'call'}></BasicButton>
      </ChannelStyles.ContainerCanvas>
      <ChannelStyles.ContainerCanvas>
        <ChannelStyles.Receiver>
          test 2
        </ChannelStyles.Receiver>
        <BasicButton textMessage={'call'}></BasicButton>
      </ChannelStyles.ContainerCanvas>
    </ChannelStyles.Container>
  );
};

Channel.displayName = 'Channel';

export const ChannelStyles = {
  Container: styled.div`
    display: flex;
    //flex-direction: column;
    width: 100%;
  `,
  Sender: styled.div`
    width: 600px;
    height: 400px;
    background-color: darkblue;
    margin-bottom: 20px;
  `,
  ContainerCanvas: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Receiver: styled.div`
    width: 600px;
    height: 400px;
    background-color: darkred;
    margin-bottom: 20px;
  `
};