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
    try {
        await api.post('/api/pessoas', pessoa)
        setModal(true)
        setPessoa({
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
        
    } catch(err) {
        console.error(err)
    }
}

async function searchGender() {
    try {
         await api.get('/api/genero')
        .then(res => {
            setGenderOptions(res.data)
        }) 
    } catch (err) {
        console.log('Error fetching gender options:', err)
    }
}



    return (
        <Container >
            <Row> 
                <Col lg='6'> 
                    <Modal isOpen={modal} toggle={toggle} >
                        <ModalHeader toggle={toggle} className='bg-info'>Information</ModalHeader>
                        <ModalBody color='secondary'>
                            Usuario criado com sucesso!!
                        </ModalBody>
                        <ModalFooter>
                            <Button color='danger' onClick={() => window.location.href = "/"}>Voltar para home</Button>
                            <Button  color='success' onClick={toggle}>Novo usuário</Button>
                            
                        </ModalFooter>
                    </Modal>
                </Col>
        
        <form  onSubmit={handleSubmit} >
                <h1>Cadastrar Pessoa</h1>
            
                <Input type='text' 
                name='nome'
                placeholder='Insira o nome:'
                text='Nome'
                onChange={handleChange}
                required />

                
            
            <div className='d-flex gap-1 flex-wrap'>
                <Input type='number'
                name='cpf'
                placeholder='Insira somente os nros:'
                maxlength='11'
                text='CPF'
                onChange={handleChange}
                required />

                <Input type='date' className='col-md-12'
                name='data_nascimento'
                placeholder='Insira a data de nascimento:'
                text='Data de nascimento'
                onChange={handleChange}
                required/>

                <Select 
                name='genero'
                text='Selecione o Genero'
                required={true}
                onChange={handleChange}
                options={genderOptions}
            /> 
            </div>
            <div className='d-flex gap-1 flex-wrap'>
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
                name='estado'
                text='Estado'
                onChange={handleChange}
                />  
            </div>
            
            <div className='d-flex gap-1 flex-wrap'>
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
                <Input className='col-sm-12'
                name='complemento'
                text='Complemento'
                onChange={handleChange}
                />
            </div>

            <Submit className='col-md-3' text='Enviar' />
        </form>
        </Row>
        </Container>
        
    )
}

export default FormPessoa
