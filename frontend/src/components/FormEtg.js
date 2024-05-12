import React, {useEffect, useRef} from "react";
import styled from "styled-components"
import axios from "axios"
import { toast } from "react-toastify"
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
//FORM DO ENTREGADOR

const Form = ({getEntregadores, onEdit, setOnEdit}) => {
    const ref = useRef()

    useEffect(() => {
        if(onEdit){
            const user = ref.current

            user.nome.value = onEdit.nome
            user.email.value = onEdit.email
            user.fone.value = onEdit.fone
            user.data_nascimento.value = onEdit.data_nascimento
            user.cidade.value = onEdit.cidade
            user.bairro.value = onEdit.bairro
            user.senha.value = onEdit.senha
        }
    }, [onEdit])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = ref.current

        if(
            !user.nome.value ||
            !user.email.value ||
            !user.fone.value ||
            !user.data_nascimento.value ||
            !user.cidade.value ||
            !user.bairro.value ||
            !user.senha.value

        ){
            return toast.warn("Preencha todos os campos!")
        }

        if(onEdit){
            await axios
                .put("http://localhost:8800/entregadores/"+ onEdit.id, {
                    nome: user.nome.value,
                    email: user.email.value,
                    fone: user.fone.value,
                    data_nascimento: user.data_nascimento.value,
                    cidade: user.cidade.value,
                    bairro: user.bairro.value,
                    senha: user.senha.value,
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data))
        } else {
            await axios
                .post("http://localhost:8800/entregadores", {
                    nome: user.nome.value,
                    email: user.email.value,
                    fone: user.fone.value,
                    data_nascimento: user.data_nascimento.value,
                    cidade: user.cidade.value,
                    bairro: user.bairro.value,
                    senha: user.senha.value,
                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data))
        }

        user.nome.value = "";
        user.email.value = "";
        user.fone.value = "";
        user.data_nascimento.value = "";
        user.cidade.value = "";
        user.bairro.value = "";
        user.senha.value = "";

        setOnEdit(null)
        getEntregadores()

    }
//FORM DO ENTREGADOR

    return(
        
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome"/>
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" type="email"/>
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="fone"/>
            </InputArea>
            <InputArea>
                <Label>Data de nascimento</Label>
                <Input name="data_nascimento" type="date"/>
            </InputArea>
            <InputArea>
                <Label>Cidade</Label>
                <Input name="cidade"/>
            </InputArea>
            <InputArea>
                <Label>Bairro</Label>
                <Input name="bairro"/>
            </InputArea>
            <InputArea>
                <Label>Senha</Label>
                <Input name="senha"/>
            </InputArea>
            <Button type="submit">CADASTRAR</Button>
        </FormContainer>

    );
}

export default Form