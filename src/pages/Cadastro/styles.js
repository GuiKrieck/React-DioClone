import styled from "styled-components";


export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

export const Wrapper = styled.div`
    max-width: 500px;
`

export const Column = styled.div`
    flex: ${({$flex}) => $flex};
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    color: #FFFFFF;
`
export const SubTitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    margin-bottom: 35px;
    line-height: 25px;
`
export const AoClicarText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    width: 320px;
    margin: 20px 0; 
`

export const JaTenhoText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: .85rem;
    line-height: 19px;
`

export const FazerLoginText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: .85rem;
    line-height: 19px;
    color: #00FF00;
    cursor: pointer;
`