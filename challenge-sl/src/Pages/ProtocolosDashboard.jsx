import { Container, Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import LinkButton from '../Components/form/LinkButton'
import api from '../Services/Api'
import { useState, useEffect } from 'react'
import { SiProtondrive } from "react-icons/si";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { Spinner } from 'reactstrap'


function ProtocolosDashboard() {
    const [protocolo, setProtocolo] = useState([])
    const [modal, setModal] = useState(false)
    const [deleteProtocolId, setDeleteProtocolId] = useState(null)
    const [loading, setLoading] = useState(true)

    const toggle = () => setModal(!modal)

    useEffect(() => {
        getProtocolos()
    },[])
    

    async function getProtocolos() {
       try {
        const response = await api.get('/protocolos')
        const formattedProtocolos = response.data.map(p => ({
            ...p,
            data_protocolo: formatFriendlyDate(new Date(p.data_protocolo)),
        }))
        setProtocolo(formattedProtocolos)
       } catch(err) {
        console.error(err)
       } finally {
        setLoading(false)
       }
    }
    
    function formatFriendlyDate(date) {
        return date.toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year:'numeric'
        })
    }

    async function deletaProtocolo(id) {
        try {
            await api.delete(`/deleta/protocolo/${id}`)
            getProtocolos()
        } catch (error) {
            console.error(error)
        }
        setModal(false)
    }

    const openDeleteModal = (id) => {
        setDeleteProtocolId(id)
        setModal(true)
    }
    
    return (
        <>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Confirmar exclusao</ModalHeader>
            <ModalBody>Voce tem certeza que deseja excluir esse protocolo?</ModalBody>
            <ModalFooter>
                <Button color='danger' onClick={() => deletaProtocolo(deleteProtocolId)}>Deletar</Button>
                <Button color='secondary' onClick={toggle}>Cancelar</Button>
            </ModalFooter>
        </Modal>


        <Container>
            <Col>
                <Row className='p-1'>
                    <h1 className='text-center'>Painel de Controle de Protocolos</h1>
                </Row>
                <Col className='d-flex flex-row justify-content-between' >
                    
                <LinkButton
                    text='Voltar'
                    to='/'
                    color='secondary'
                    icon={<IoMdArrowRoundBack />}
                    />

                    <LinkButton
                    text='Criar novo protocolo'
                    to='/cadastraprotocolo'
                    color='bg-info'
                    icon={<SiProtondrive />}
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
                    protocolo.map((p) => (
                        <li className='d-flex justify-content-between border p-3' key={p.id}>
                            <div>
                                <p>Nro do Protocolo <strong>{p.id}</strong></p> 
                                <p>Data do Registro: <strong>{p.data_protocolo}</strong></p> 
                                <p>Nome do Contribuinte: <strong>{p.nome}</strong></p>
                            </div>
                            <div>
                                <Button className='d-flex flex-row align-items-center bg-danger' onClick={() => openDeleteModal(p.id)}><MdDeleteForever/><span className='text-white'>Delete</span></Button>
                            </div>

                        </li>
                 )))}
                </Row>
            </Col>
        </Container>
        </>
        
    )
}

export default ProtocolosDashboard