import { Container } from 'reactstrap';
import Form from '../Components/FormPessoa'
import LinkButton from '../Components/form/LinkButton'
import { IoMdArrowRoundBack } from "react-icons/io";
import api from '../Services/Api'
import { useState, useEffect } from 'react';
import { Spinner, Col } from 'reactstrap'



function EditaPessoa({id}) {
    const [person, setPerson] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        console.log(id)
        const fetchPerson = async () => {
            try {
                const response = await api.get(`/api/pessoas/${id}`)
                setPerson(response.data)
            } catch (err) {
                console.error('Error fetching person:', err)
        } finally {
            setLoading(false)
        }
    }
    fetchPerson()
}, [id])


    return (
        <>
        <h1>Resumo do cadastro de {person ? person.nome : '...'}  </h1>
        <Container className='d-flex flex-column  p-5'>
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