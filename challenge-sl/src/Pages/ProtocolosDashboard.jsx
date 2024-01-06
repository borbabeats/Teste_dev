import { Container, Col, Row } from 'reactstrap'
import LinkButton from '../Components/form/LinkButton'
import api from '../Services/Api'
import { useState, useEffect } from 'react'
import { SiProtondrive } from "react-icons/si";
import { IoMdArrowRoundBack } from "react-icons/io";

function ProtocolosDashboard() {
    const [protocolo, setProtocolo] = useState([])


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
       }
    }
    
    function formatFriendlyDate(date) {
        return date.toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year:'numeric'
        })
    }
    
    return (
        
        <Container>
            <Col>
                <Row className='p-1'>
                    <h1 className='text-center'>Painel de Controle de Protocolos</h1>
                </Row>
                <Row className='d-flex flex-row justify-content-between' >
                    <LinkButton
                    text='Criar novo protocolo'
                    to='/cadastraprotocolo'
                    color='bg-info'
                    icon={<SiProtondrive />}
                    />
                
      
                    <LinkButton
                    text='Voltar'
                    to='/'
                    color='bg-success'
                    icon={<IoMdArrowRoundBack />}
                    />
              
                </Row>


                <Row className='mt-4'>
                    {protocolo.map(p => (
                        <li className='d-flex justify-content-between border p-3' key={p.id}>
                            <div>
                                <p>Nro do Protocolo <strong>{p.id}</strong></p> 
                                <p>Data do Registro: <strong>{p.data_protocolo}</strong></p> 
                                <p>Nome do Contribuinte: <strong>{p.contribuinte}</strong></p>
                            </div>
                            <div>
                                <span>Excluir</span>
                            </div>

                        </li>
                 ))}
                </Row>
            </Col>
        </Container>
        
    )
}

export default ProtocolosDashboard