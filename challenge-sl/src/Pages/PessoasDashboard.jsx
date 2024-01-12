import { Container, Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import LinkButton from '../Components/form/LinkButton'
import api from '../Services/Api'
import { useState, useEffect } from 'react'
import { IoPersonAddSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { Spinner } from 'reactstrap'


function PessoasDashboard() {
    const [pessoa, setPessoa] = useState([])
    const [modal, setModal] = useState(false)
    const [deletePersonId, setDeletePersonId] = useState(null)
    const [loading, setLoading] = useState(true)

    const toggle = () => setModal(!modal)


    useEffect(() => {
        getPessoas()
    },[])
    

    async function getPessoas() {
        try {
            const response = await api.get('/pessoas')
            setPessoa(response.data)
        } catch (err) {
            console.error('Error fetching pessoas:', err)
        } finally {
            setLoading(false)
        }
    }

    async function deletaPessoa(id) {
        try {
            await api.delete(`/deleta/pessoa/${id}`)
            getPessoas()
        } catch (error) {
            console.error(error)
        }
        setModal(false)
    }

    const openDeleteModal = (id) => {
        setDeletePersonId(id)
        setModal(true)
    }
    
    
    
    return (
        <>

        <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>Confirmar exclusao</ModalHeader>
            <ModalBody>Voce tem certeza que quer excluir essa pessoa?</ModalBody>
            <ModalFooter>
                <Button color='danger' onClick={() => deletaPessoa(deletePersonId)}>Deletar</Button>
                <Button color='secondary' onClick={toggle}>Cancelar</Button>
            </ModalFooter>
        </Modal>
        
        <Container>
            <Col>
                <Row className='p-1'>
                    <h1 className='text-center'>Painel de Controle de Pessoas</h1>
                </Row>
                <Col className='d-flex flex-row justify-content-between' >
                    
                <LinkButton
                    text='Voltar'
                    to='/paginainicial'
                    color='secondary'
                    icon={<IoMdArrowRoundBack />}
                    />

                    <LinkButton
                    text='Cadastrar pessoa'
                    to='/cadastrapessoa'
                    color='bg-info'
                    icon={<IoPersonAddSharp />}
                    />
              
                </Col>

                
                <Row className='mt-4'>
                    {loading ? (
                        <Col className='d-flex justify-content-center'>
                        <Spinner type='grow' color="primary" className='m-1'></Spinner>
                        <Spinner type='grow' color="primary" className='m-1'></Spinner>
                        <Spinner type='grow' color="primary" className='m-1'></Spinner>
                       
                    </Col>
                    ) : (
                    pessoa.map(p => (
                        <li className='d-flex flex-row justify-content-between border p-3' key={p.id}>
                            <div>{p.id} - {p.nome}</div>
                            <div className=''><Button className='d-flex flex-row align-items-center bg-danger' onClick={() => openDeleteModal(p.id)}><MdDeleteForever /><span className='text-white'>Delete</span></Button></div>

                        </li>
                 )))}
                </Row>
            </Col>
        </Container>
        </>
        
    )
}

export default PessoasDashboard