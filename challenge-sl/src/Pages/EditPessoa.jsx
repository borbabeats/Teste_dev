import { Container } from 'reactstrap';
import Form from '../Components/FormPessoa'
import LinkButton from '../Components/form/LinkButton'
import { IoMdArrowRoundBack } from "react-icons/io";
import api from '../Services/Api'
import { useState, useEffect } from 'react';
import { Spinner, Col } from 'reactstrap'
import { useParams } from 'react-router-dom';



function EditaPessoa() {
    const {id} = useParams()
    const [person, setPerson] = useState('')
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const fetchPerson = async () => {
            try {
                const response = await api.get(`/api/pessoas/${id}`)
                setPerson(response.data)
                console.log(response.data)
            } catch (err) {
                console.error('Error fetching person:', err)
        } finally {
            setLoading(false)
        }
    }
    fetchPerson()
}, [])


    return (
        <>
        <h1>Resumo do cadastro de {person.nome}</h1>
        <Container className='d-flex flex-column bg-light rounded p-3'>
        <LinkButton 
                    text='Voltar'
                    to='/dashboardpessoas'
                    color='secondary'
                    icon={<IoMdArrowRoundBack />}
                    />
                    {loading ? (
                         <Col className='d-flex justify-content-center'>
                         <Spinner type='grow' color="primary" className='m-1'></Spinner>
                         <Spinner type='grow' color="primary" className='m-1'></Spinner>
                         <Spinner type='grow' color="primary" className='m-1'></Spinner>
                        
                     </Col>
                    ) : (
                        <Form personData={person} />
                    )}
        
        </Container>
        </>
    )
}

export default EditaPessoa