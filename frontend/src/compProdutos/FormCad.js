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

const FormCad = ({getProdutos, onEdit, setOnEdit}) => {
    const ref = useRef()

    useEffect(() => {
        if(onEdit){
            const user = ref.current

            user.nome.value = onEdit.nome
            user.valor.value = onEdit.valor

        }
    }, [onEdit])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = ref.current;

        const userId = localStorage.getItem('userId');

        if(
            !user.nome.value ||
            !user.valor.value

        ){
            return toast.warn("Preencha todos os campos!")
        }

        if(onEdit){
            await axios
                .put("http://localhost:8800/produtos/"+ onEdit.id, {
                    nome: user.nome.value,
                    valor: user.valor.value,
                    id: userId // Adiciona o userId ao objeto produto

                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data))
        } else {
            await axios
                .post("http://localhost:8800/produtos", {
                    nome: user.nome.value,
                    valor: user.valor.value,
                    id: userId // Adiciona o userId ao objeto produto

                })
                .then(({data}) => toast.success(data))
                .catch(({data}) => toast.error(data))
        }

        user.nome.value = "";
        user.valor.value = "";
        

        setOnEdit(null)
        getProdutos()

    }

//FORM DO ENTREGADOR

    return(
        <>
        <h2>Cadastro de produtos:</h2>
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome"/>
            </InputArea>
            <InputArea>
                <Label>Valor</Label>
                <Input name="valor" type="number"/>
            </InputArea>
          
            <Button type="submit">CADASTRAR</Button>
        </FormContainer>
        </>
    );
}

export default FormCad