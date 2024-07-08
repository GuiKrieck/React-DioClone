import Header from "../../components/Header"
import { Column, Container, Title, TitleHighlight} from "./styles"

import Card from "../../components/Card"
import UserInfo from "../../components/UserInfo"

const Feed = () => {
    return(
        <>
            <Header autenticado={true}/>
            <Container>
                <Column $flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column $flex={1}>
                    <TitleHighlight># Ranking 5 top da semana</TitleHighlight>
                    <UserInfo name="Guilherme Krieck" image="https://picsum.photos/500/500" percentual={90} />
                    <UserInfo name="Guilherme Krieck" image="https://picsum.photos/500/500" percentual={83} />
                    <UserInfo name="Guilherme Krieck" image="https://picsum.photos/500/500" percentual={65} />
                    <UserInfo name="Guilherme Krieck" image="https://picsum.photos/500/500" percentual={49} />
                    <UserInfo name="Guilherme Krieck" image="https://picsum.photos/500/500" percentual={18} />
                </Column>
            </Container>
        </>
    )
}

export default Feed