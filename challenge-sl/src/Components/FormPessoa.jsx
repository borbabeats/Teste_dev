import {  useState } from 'react'
import Input from './form/Input'
import Select from './form/Select'
import Submit from './form/Submit'
import api from '../Services/Api'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'



function FormPessoa() {
   const [pessoa, setPessoa] = useState({
        name: '',
        nascimento: '',
        cpf: '',
        genero: '',
        estado: '',
        cidade: '',
        bairro: '',
        logradouro: '',
        numero: '',
        complemento:''
   })

   const [modal, setModal] = useState(false)
   const toggle = () => setModal(!modal)


//handle change event
function handleChange (e) {
    setPessoa({ ...pessoa, [e.target.name]: e.target.value })
    console.log(pessoa)
    
}

async function handleSubmit(e) {
    e.preventDefault()
    api.post('/pessoas', pessoa)
    .then(res => {
        console.log(res)
        setModal(true)
    })
    .catch(err => {
        console.error(err)
    })
}


    return (
        <>
        <form  className='form-pessoa' onSubmit={handleSubmit} >
            
            <Input type='text'
                name='nome'
                placeholder='Insira o nome:'
                text='Nome'
                onChange={handleChange}
                required />

            <Input type='date'
                name='data_nascimento'
                placeholder='Insira a data de nascimento:'
                text='Data de nascimento'
                onChange={handleChange}
                required/>

            <Input type='number'
                name='cpf'
                placeholder='Insira somente os nros:'
                maxlength='11'
                text='CPF'
                onChange={handleChange}
                required />

            <Select 
                name='genero'
                text='Selecione o Genero'
                required='true'
                onChange={handleChange}
                options={[
                    {id: 'M', name: 'Masculino'},
                    {id: 'F', name: 'Feminino'},
                    {id: 'O', name: 'Outro'},
                ]}
            
            /> 
            
            <Input 
            name='estado'
            text='Estado'
            onChange={handleChange}
            />  
            <Input
            name='cidade'
            text='Cidade'
            onChange={handleChange}
            />
            <Input
            name='bairro'
            text='Bairro'
            onChange={handleChange}
            />
            <Input
            name='logradouro'
            text='Logradouro'
            onChange={handleChange}
            />
            <Input
            name='numero'
            text='Numero'
            type='number'
            onChange={handleChange}
            />
            <Input
            name='complemento'
            text='Complemento'
            onChange={handleChange}
            />


            <Submit text='Enviar' />
        </form>
        
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                Info
            </ModalHeader>
            <ModalBody>
                Usuario criado com sucesso!!
            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={toggle}>
                    OK
                </Button>
            </ModalFooter>
        </Modal>

        </>
        
    )
}

export default FormPessoa