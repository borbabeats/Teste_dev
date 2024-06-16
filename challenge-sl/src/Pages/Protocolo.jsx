import FormProtocol from "../Components/FormProtocol"
import LinkButton from '../Components/form/LinkButton'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Container } from "reactstrap";

function Protocol() {
    return(
        <Container className='d-flex flex-column bg-light rounded  p-5'>
        <LinkButton 
                    text='Voltar'
                    to='/dashboardprotocolo'
                    color='secondary'
                    icon={<IoMdArrowRoundBack />}
                    />
        <FormProtocol/>
        </Container>
    )
}

export default Protocol