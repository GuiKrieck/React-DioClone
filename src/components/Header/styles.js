import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Wrapper = styled.header`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BuscarInputContainer = styled.div`
    width: 275px;
    height: 30px;
    background-color: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.a`
    font-family: "Open Sans";
    font-style: normal;
    font-size: 1rem;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
    cursor: pointer;
` 
export const MenuRight = styled.a`
    font-family: "Open Sans";
    font-style: normal;
    font-size: .75rem;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration: none;
    cursor: pointer;
` 

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFFFFF;
`

export const Input = styled.input`
    background-color: transparent;
    flex: 1;
    border: 0;
    color: #FFFFFF;
`