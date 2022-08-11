import { NavLink } from 'react-router-dom';
import styled from "styled-components";



export const NavContainer = styled.div`
display: flex;
position: sticky;
background-color: #34d2eb;

align-items: center;
padding: 15px 30px;
`
export const NavigationLink = styled(NavLink)`
font-size: 16px;
font-weight: 600;
text-decoration:none;
color: black;
background-color: #fff;
padding: 7px 17px;
border-radius: 7px;
margin-right: 10px;

box-shadow:
inset rgba(0,0,0,.6) 0 -3px 8px,
inset rgba(252,255,255,.7) 0 3px 8px,
rgba(0,0,0,.8) 0 3px 8px -3px;


`

export const Button = styled.button`
margin-right: 25px;
`





