import { Container, Col, Row } from 'reactstrap'
import LinkButton from '../Components/form/LinkButton'
import api from '../Services/Api'
import { useState, useEffect } from 'react'
import { IoPersonAddSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";

function PessoasDashboard() {
    const [pessoa, setPessoa] = useState([])


    useEffect(() => {
        getPessoas()
    },[])
    

    async function getPessoas() {
       api.get('/pessoas')
       .then(res => {
        setPessoa(res.data)
       }).catch(res => {
        console.error(res)
       })
    }
    
    
    
    return (
        
        <Container>
            <Col>
                <Row className='p-1'>
                    <h1 className='text-center'>Painel de Controle de Pessoas</h1>
                </Row>
                <Row className='d-flex flex-row justify-content-between' >
                    <LinkButton
                    text='Cadastrar pessoa'
                    to='/cadastrapessoa'
                    color='bg-info'
                    icon={<IoPersonAddSharp />}
                    />
                
      
                    <LinkButton
                    text='Voltar'
                    to='/'
                    color='bg-success'
                    icon={<IoMdArrowRoundBack />}
                    />
              
                </Row>

                
                <Row className='mt-4'>
                    {pessoa.map(p => (
                        <li className='d-flex border p-3' key={p.id}>
                            
                            {p.id}  {p.nome}

                        </li>
                 ))}
                </Row>
            </Col>
        </Container>
        
    )
}

export default PessoasDashboard