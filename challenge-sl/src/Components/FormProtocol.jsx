import {  useEffect, useState } from 'react'
import Input from './form/Input'
import Textarea from './form/Textarea'
import Select from './form/Select'
import Submit from './form/Submit'
import api from '../Services/Api'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Col, Row} from 'reactstrap'



function FormProtocol() {
    const [options, setOptions] = useState([])
    const [protocolo, setProtocolo] = useState({
        descricao: '',
        data_protocolo: '',
        prazo: '',
        nome: ''
        
   })

   const [modal, setModal] = useState(false)
   const toggle = () => setModal(!modal)


//handle change event
function handleChange (e) {
    setProtocolo({ ...protocolo, [e.target.name]: e.target.value })
}

async function handleSubmit(e) {
    e.preventDefault()
    try {
        await api.post('/api/protocolos', protocolo)
        setModal(true)
        setProtocolo({
            descricao: '',
            data_protocolo: '',
            prazo: '',
            nome: ''
        })
    } catch(err) {
        console.error(err)
    }
}

useEffect(() => {
    getPerson()
}, [])

async function getPerson() {
    try {
        const response = await api.get('/api/pessoas')
        setOptions(response.data)
    } catch (err) {
        console.error('Error fetching people:', err)
  
    }
}


    return (
        <Container>
            <Row> 
                <Col lg='6'> 
        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle} className='bg-info'>Protocolo nro {protocolo.id}</ModalHeader>
            <ModalBody color='secondary'>
                Protocolo criado com sucesso!!
            </ModalBody>
            <ModalFooter>
                <Button  color='success' onClick={toggle}>OK</Button>
            </ModalFooter>
        </Modal>
        </Col>
        
        <form  onSubmit={handleSubmit}>
                <h1>Preencher Protocolo</h1>
            <Textarea 
                name='descricao'
                placeholder='Descreva a situacao'
                text='Descricao do protocolo'
                rows={10}
                onChange={handleChange}
                required />
            <div className='d-flex gap-1 flex-wrap'>
            <Input type='date'
                name='data_protocolo'
                placeholder='Insira a data do protocolo:'
                text='Data do protocolo'
                onChange={handleChange}
                required/>

            <Input type='number'
                name='prazo'
                placeholder='Prazo de atendimento'
                maxlength='2'
                text='Prazo'
                onChange={handleChange}
                required />

            <Select className='col-md-12'
                name='nome'
                text='Selecione o contribuinte'
                required={true}
                onChange={handleChange}
                options={options}
            /> 
            </div>


            <Submit className='col-md-3' text='Enviar' />
        </form>
        
        
       
        
        </Row>
        </Container>
        
    )
}

export default FormProtocol
