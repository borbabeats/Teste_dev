import { useEffect, useState } from 'react'
import Input from './form/Input'
import Textarea from './form/Textarea'
import Select from './form/Select'
import Submit from './form/Submit'
import api from '../Services/Api'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Container, Col, Row } from 'reactstrap'

function FormProtocol() {
    const [options, setOptions] = useState([]) // People options for the select
    const [protocolo, setProtocolo] = useState({
        descricao: '',
        data_protocolo: '',
        prazo: '',
        nome: ''
    })
    const [modal, setModal] = useState(false) // Modal visibility
    const [protocolId, setProtocolId] = useState(null) // To store the created protocol ID
    const [loading, setLoading] = useState(false) // For disabling submit button during API call

    // Toggle modal
    const toggle = () => setModal(!modal)

    // Handle form field changes
    function handleChange(e) {
        setProtocolo({ ...protocolo, [e.target.name]: e.target.value })
    }

    // Handle form submission
    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true) // Start loading
        try {
            const response = await api.post('/api/protocolos', protocolo)
            setProtocolId(response.data.id) 
            setModal(true)
            setProtocolo({
                descricao: '',
                data_protocolo: '',
                prazo: '',
                nome: ''
            })
        } catch (err) {
            console.error('Error submitting protocol:', err)
        } finally {
            setLoading(false) 
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
                <Col lg="">
                    {/* Success Modal */}
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle} className="bg-info">
                            Protocolo nro {protocolId}
                        </ModalHeader>
                        <ModalBody>
                            Protocolo criado com sucesso!
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={() => window.location.href = "/"}>Voltar para Home</Button>
                            <Button color="success" onClick={toggle}>Novo Protocolo</Button>
                        </ModalFooter>
                    </Modal>
                </Col>

                {/* Protocol Form */}
                <Col lg="12">
                    <form onSubmit={handleSubmit}>
                        <h1>Preencher Protocolo</h1>

                        {/* Descrição do Protocolo */}
                        <Textarea
                            name="descricao"
                            placeholder="Descreva a situacao"
                            text="Descricao do protocolo"
                            rows={10}
                            onChange={handleChange}
                            value={protocolo.descricao}
                            required
                        />

                        <div className="d-flex gap-1 flex-wrap">
                            {/* Data do Protocolo */}
                            <Input
                                type="date"
                                name="data_protocolo"
                                placeholder="Insira a data do protocolo"
                                text="Data do protocolo"
                                onChange={handleChange}
                                value={protocolo.data_protocolo}
                                required
                            />

                            {/* Prazo de Atendimento */}
                            <Input
                                type="number"
                                name="prazo"
                                placeholder="Prazo de atendimento"
                                maxLength="2"
                                text="Prazo"
                                onChange={handleChange}
                                value={protocolo.prazo}
                                required
                            />

                            {/* Selecione o Contribuinte */}
                            <Select
                                className="col-md-12"
                                name="nome"
                                text="Selecione o contribuinte"
                                required
                                onChange={handleChange}
                                options={options}
                                value={protocolo.nome}
                            />
                        </div>

                        {/* Submit Button */}
                        <Submit
                            className="col-md-3"
                            text={loading ? 'Enviando...' : 'Enviar'}
                            disabled={loading}
                        />
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default FormProtocol