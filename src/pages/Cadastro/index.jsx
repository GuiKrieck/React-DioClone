import Button from "../../components/Button"
import Header from "../../components/Header"
import Input from "../../components/Input"
import { useForm } from "react-hook-form";
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import { AoClicarText, Column, Container, FazerLoginText, JaTenhoText, Row, SubTitleCadastro, Title, Wrapper } from "./styles"
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";


const schema = yup.object({
    nome: yup.string().min(3, "no minímo 3 caracteres").required("Campo Obrigatório"),
    email: yup.string().email("email  não é válido").required("Campo Obrigatorio"),
    password: yup.string().min(3, "No minimo 3 caracteres").required("Campo Obrigatorio")
})

const Cadastro = () => {
    const navigate = useNavigate()

    const{control, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
        defaultValues:{
            nome:"",
            email:"",
            password:""
        }
    })

    const onSubmit = async formData =>{
        try{
            await api.post("/users",{
                "name":formData.nome,
                "email":formData.email,
                "senha":formData.password
            })
            alert("Usuário cadastrado com sucesso")
            navigate("/login")
        }
        catch{
            alert("Houve um erro, tente novamente")
        }
    }

    return(
        <>
            <Header autenticado={false} />
            <Container>
                <Column $flex={2}>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias
                        e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column $flex={1}>
                    <Wrapper>
                        <Title>Comece Agora Grátis</Title>
                        <SubTitleCadastro>Crie sua conta e make the change._</SubTitleCadastro>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input 
                                name="nome" 
                                control={control} 
                                placeholder="Nome completo"
                                errorMessage={errors.nome ? errors.nome.message : undefined} 
                            />
                            <Input 
                                name="email" 
                                control={control} 
                                placeholder="E-mail"
                                errorMessage={errors.email ? errors.email.message : undefined}
                            />
                            <Input 
                                name="password" 
                                control={control}
                                placeholder="Crie sua senha"
                                type="password"
                                errorMessage={errors.password ? errors.password.message : undefined}
                            />
                            <Button title="Criar minha conta" variant="secondary" type="submit"/>
                        </form>
                        <AoClicarText>
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO
                        </AoClicarText>
                        <Row>
                            <JaTenhoText>Já tenho conta.</JaTenhoText>
                            <FazerLoginText onClick={() => navigate("/login")}>Fazer login</FazerLoginText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default Cadastro