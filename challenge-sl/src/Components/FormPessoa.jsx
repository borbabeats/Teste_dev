import {  useEffect, useState } from 'react'
import Input from './form/Input'
import Select from './form/Select'
import Submit from './form/Submit'
import api from '../Services/Api'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Col, Row} from 'reactstrap'



function FormPessoa() {
    const [genderOptions, setGenderOptions] = useState([])
   const [pessoa, setPessoa] = useState({
        nome: '',
        data_nascimento: '',
        cpf: '',
        genero: '',
        estado: '',
        cidade: '',
        bairro: '',
        logradouro: '',
        numero: '',
        complemento:''
   })

   useEffect(() => {
    searchGender()
   }, [])

   const [modal, setModal] = useState(false)
   const toggle = () => setModal(!modal)


//handle change event
function handleChange (e) {
    setPessoa({ ...pessoa, [e.target.name]: e.target.value })
    
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

async function searchGender() {
    try {
         await api.get('/genero')
        .then(res => {
            setGenderOptions(res.data)
        }) 
    } catch (err) {
        console.log('Error fetching gender options:', err)
    }
}

function reloadPage () {
    setTimeout(() => { 
    window.location.reload()
   }, 800)
}

    const closeModalAndReload = () => {
        setModal(false)
        reloadPage()
    }


    return (
        <Container className='bg-white p-1'>
            <Row> 
                <Col lg='6'> 
        <Modal isOpen={modal} toggle={closeModalAndReload} >
            <ModalHeader toggle={toggle} className='bg-info'>Information</ModalHeader>
            <ModalBody color='secondary'>
                Usuario criado com sucesso!!
            </ModalBody>
            <ModalFooter>
                <Button  color='success' onClick={toggle}>OK</Button>
            </ModalFooter>
        </Modal>
        </Col>
        
        <form  onSubmit={handleSubmit} className='bg-white'  >
                <h1>Cadastrar Pessoa</h1>
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
                required={true}
                onChange={handleChange}
                options={genderOptions}
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
        
        
       
        
        </Row>
        </Container>
        
    )
}

export default FormPessoa