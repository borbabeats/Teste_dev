import Card from '../Components/Card'
import { Container, Col, Row } from 'reactstrap'

function Home() {

    return (
  
        <Container>
            <Row >
                <Col className='mb-4'>
                    <Card className='cards'
                        text='Painel de controle de Pessoas'
                        to='/dashboardpessoas'
                    />
                </Col>
                <Col>
                    <Card className='cards'
                        text='Painel de controle de protocolos'
                        to='/dashboardprotocolo'
                    />
                </Col>
            </Row>
            
        </Container>
    )
}

export default Home