import { Container } from 'reactstrap';
import Form from '../Components/FormPessoa'
import LinkButton from '../Components/form/LinkButton'
import { IoMdArrowRoundBack } from "react-icons/io";


function Pessoa() {
    return (
        <Container className='d-flex flex-column bg-light rounded  p-5'>
        <LinkButton 
                    text='Voltar'
                    to='/dashboardpessoas'
                    color='secondary'
                    icon={<IoMdArrowRoundBack />}
                    />
        <Form />
        </Container>
    )
    
}

export default Pessoa