import {React} from "react";
import Styled from 'styled-components';
import LogoSRC from '../assets/profilehub_logo.png';


const Box = Styled.div`
background-color: red;
// sticky nav bar settins
top:0;
position: sticky;
`;

const NavBarWrapper = Styled.div`
    background-color: blue;
    align-items: stretch;  //////////////////////////////////////////
    justify-content: space-between; //////////////////////////////////////////
    height: 100%;
    display: flex;
`;


const NavBarLeft = Styled.div`
background-color: green;
display: flex;
flex-wrap: wrap;    

`;
const NavBarRight = Styled.div`
display: flex;
flex-wrap: wrap; 
background-color: orange;
`;
const NavBarCenter = Styled.div`
display: flex;
flex-wrap: wrap; 
background-color: yellow;
`;


const NavMenuDetail = Styled.div`
    align-items:center
`;



const Logo = Styled.img`
width: 50px;
height: 40px;
`;

function TopNavBar(){
    return <><Box>         
         <NavBarWrapper>            
            <NavBarLeft>
            <Logo src={LogoSRC} />
            </NavBarLeft>
            <NavBarCenter>
                <NavMenuDetail>JOB</NavMenuDetail>
                <NavMenuDetail>Article</NavMenuDetail>
                <NavMenuDetail>어쩌구</NavMenuDetail>
            </NavBarCenter>
            <NavBarRight>
                어쩌구
            </NavBarRight>
         </NavBarWrapper>                  
    </Box>    
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    </>;
}




export default TopNavBar;
