import {MdEmail, MdLock} from "react-icons/md"
import Header from "../../components/Header"
import { useForm } from "react-hook-form";
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import { Column, Container, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles"
import { api } from "../../services/api";
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useNavigate } from "react-router-dom"


const schema = yup.object({
    email: yup.string().email("email  não é válido").required("Campo Obrigatorio"),
    password: yup.string().min(3, "No minimo 3 caracteres").required("Campo Obrigatorio"),
}).required();


const Login = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver:yupResolver(schema),
        mode: "onChange",
        defaultValues:{
            email:"",
            password:""
        }
    });

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.password}`)
            if (data.length === 1){
                navigate('/feed')
            }else{
                alert("Usuário não encontrado, verifique as credenciais e tente denovo")
            }
        }
        catch{
            alert("Houve um erro, tente novamente")
        }
    }

    return(
        <>
            <Header autenticado={false}/>
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu Cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" control={control} placeholder="E-mail" errorMessage={errors.email ? errors.email.message : undefined} leftIcon={<MdEmail/>} />
                            <Input name="password" control={control} placeholder="Senha" errorMessage={errors.password ? errors.password.message : undefined}type="password" leftIcon={<MdLock />}/>
                            <Button title="Entrar" variant="secondary"  type="submit"/>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci Minha Senha</EsqueciText>
                            <CriarText onClick={() => navigate("/cadastro")}>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default Login