import { FiThumbsUp } from "react-icons/fi"
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles"

const Card = () =>{
    return(
        <CardContainer>
            <ImageBackground src="https://picsum.photos/1500/1500" />
            <Content>
                <UserInfo>
                    <UserPicture src="https://picsum.photos/500/500" />
                    <div>
                        <h4>Guilherme Krieck</h4>
                        <p>Há 8 minutos </p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para Curso de HTML e CSS</h4>
                    <p>Projeto feito para o curos de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp />10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export default Card