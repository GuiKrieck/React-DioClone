import Button from "../Button"
import { BuscarInputContainer, HeaderContainer, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from "./styles"
import dioLogo from "../../assets/logo-dio.png"
import { useNavigate } from "react-router-dom"

const Header = ({autenticado}) =>{
    const navigate = useNavigate()

    function handleNavigate(url){
        navigate(url)
    }
    
    return(
        <Wrapper>
            <HeaderContainer>
                <Row>
                    <img src={dioLogo} onClick={() => handleNavigate("/")} alt="Logo da DIO" style={{cursor:'pointer'}} />
                    {autenticado ? 
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />                 
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                        : null}
                </Row>
                <Row>
                    {autenticado 
                        ? <UserPicture src="https://picsum.photos/500/500"/>
                        :<>
                            <MenuRight onClick={() => handleNavigate("/")}>Home</MenuRight>
                            <Button title="Entrar" onClick={() =>handleNavigate('/login')} />
                            <Button title="Cadastrar" onClick={() =>handleNavigate('/cadastro')}/>
                        </> 
                        }
                </Row>
            </HeaderContainer>
        </Wrapper>
    )
}

export default Header