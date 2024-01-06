import {  useEffect, useState } from 'react'
import Input from './form/Input'
import Textarea from './form/Textarea'
import Select from './form/Select'
import Submit from './form/Submit'
import api from '../Services/Api'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Col, Row} from 'reactstrap'



function FormProtocol() {
    const [selectOption, setSelectOption] = useState('')
    const [protocolo, setProtocolo] = useState({
        descricao: '',
        data_protocolo: '',
        prazo: '',
        contribuinte: ''
        
   })

   const [modal, setModal] = useState(false)
   const toggle = () => setModal(!modal)


//handle change event
function handleChange (e) {
    setProtocolo({ ...protocolo, [e.target.name]: e.target.value })
    console.log(protocolo)
    
}

async function handleSubmit(e) {
    e.preventDefault()
    try {
        const response = await api.post('/protocolos', protocolo)
        console.log(response)
        setModal(true)
    } catch(err) {
        console.error(err)
    }
}

useEffect(() => {
    getPerson()
}, [])

async function getPerson() {
    try {
        const response = await api.get('/pessoas')
        console.log(response.data)
        const formattedOptions = response.data.map(person => ({
            id: person.id,
            nome: person.nome
        }))
        setSelectOption(formattedOptions)
        
    } catch (err) {
        console.error(err)
    }
}


    return (
        <Container className='bg-white p-1'>
            <Row> 
                <Col lg='6'> 
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle} className='info'>Protocolo nro {protocolo.id}</ModalHeader>
            <ModalBody color='secondary'>
                Protocolo criado com sucesso!!
            </ModalBody>
            <ModalFooter>
                <Button  color='success' onClick={toggle}>OK</Button>
            </ModalFooter>
        </Modal>
        </Col>
        
        <form  onSubmit={handleSubmit} className='bg-white'  >
                <h1>Preencher Protocolo</h1>
            <Textarea 
                name='descricao'
                placeholder='Descreva a situacao'
                text='Descricao do protocolo'
                rows={10}
                onChange={handleChange}
                required />

            <Input type='date'
                name='data_protocolo'
                placeholder='Insira a data do protocolo:'
                text='Data do protocolo'
                onChange={handleChange}
                required/>

            <Input type='number'
                name='prazo'
                placeholder='Sera atendido em ate quantos dias?'
                max='2'
                text='Prazo'
                onChange={handleChange}
                required />

            <Select 
                name='contribuinte'
                text='Contribuinte'
                required={true}
                onChange={handleChange}
                options={selectOption}
                defaultOptionText='Selecione uma opcao'
                
            
            /> 


            <Submit text='Enviar' />
        </form>
        
        
       
        
        </Row>
        </Container>
        
    )
}

export default FormProtocol