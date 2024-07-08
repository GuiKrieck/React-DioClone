import Button from "../Button"
import { BuscarInputContainer, HeaderContainer, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from "./styles"
import dioLogo from "../../assets/logo-dio.png"

const Header = ({autenticado}) =>{
    return(
        <Wrapper>
            <HeaderContainer>
                <Row>
                    <img src={dioLogo} alt="Logo da DIO" />
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
                            <MenuRight href="#">Home</MenuRight>
                            <Button title="Entrar" />
                            <Button title="Cadastrar" />
                        </> 
                        }
                </Row>
            </HeaderContainer>
        </Wrapper>
    )
}

export default Header