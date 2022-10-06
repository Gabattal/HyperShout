import {BasicButton} from "../components/basic-button";
import styled from "styled-components";

export const Home = () => {

        return (
           <HomeStyles.Container>
               <HomeStyles.ButtonContainer>
                   <BasicButton textMessage={"Create Channel"}></BasicButton>
               </HomeStyles.ButtonContainer>
               <HomeStyles.ButtonContainer>
                   <BasicButton textMessage={"Join Channel"}></BasicButton>
               </HomeStyles.ButtonContainer>
           </HomeStyles.Container>
        );
    }

Home.displayName = 'Home';

export const HomeStyles = {
    Container: styled.div`
      display: flex;
      flex-direction: column;
    `,
    ButtonContainer: styled.div`
      :not(:last-child){
        padding-bottom: 100px; 
      }
    `
}