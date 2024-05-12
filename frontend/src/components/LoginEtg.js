import React, {useState, useRef} from "react";
import styled from "styled-components"
import {toast} from "react-toastify"
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"

//import {toast} from "react-toastify"
//FORM DO ENTREGADOR

//tag gap dita a distância entre os campos numa flexbox.
//fax-end controla o alinhamento vertical dos itens flexíveis dentro do contêiner.
//Isso significa que os itens estarão alinhados na parte inferior do contêiner.
const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`
const InputArea = styled.div`
    display: flex;
    flex-direction: column;   
`
const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`

const Label = styled.label``

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`
//Login

function LoginEtg(){
    const ref = useRef()

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [userId, setUserId] = useState(null); // Armazenar o ID do usuário
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = ref.current

        if(
            !user.email.value ||
            !user.senha.value
        ){
            return toast.warn("Preencha todos os campos!")
        }

        try{
            const response = await axios.post('http://localhost:8800/entregadores/loginEtg', { email, senha });
            if (response.data.success) {
                const userIdResponse = response.data.userId;
                setUserId(userIdResponse); // Armazena o ID do usuário
                //console.log(response.data.userId)
                localStorage.setItem('userId', userIdResponse);
                navigate('/perfil', {state: {userId: userIdResponse}});
            } else {
                console.error('Credenciais inválidas');
                // Lidar com erro de credenciais inválidas aqui
            }
        }catch (error) {
            console.error('Erro ao fazer login:', error);
        }

};

//FORM DO LOGIN

    return(
        
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </InputArea>
            <InputArea>
                <Label>Senha</Label>
                <Input name="senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            </InputArea>
            <Button type="submit">ENTRAR</Button>
            <Link to="/cadastro">CADASTRAR</Link>
        </FormContainer>

    );
}

export default LoginEtg