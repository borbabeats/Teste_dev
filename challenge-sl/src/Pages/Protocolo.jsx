import FormProtocol from "../Components/FormProtocol"
import LinkButton from '../Components/form/LinkButton'
import { IoMdArrowRoundBack } from "react-icons/io";

function Protocol() {
    return(
        <>
        <LinkButton 
                    text='Voltar'
                    to='/dashboardprotocolo'
                    color='secondary'
                    icon={<IoMdArrowRoundBack />}
                    />
        <FormProtocol/>
        </>
    )
}

export default Protocol