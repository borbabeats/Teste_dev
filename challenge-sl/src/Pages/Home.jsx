import Card from '../Components/Card'
import { Container, Col, Row } from 'reactstrap'

function Home() {
    return (
        <Container>
            <Col >
                <Row className='mb-4'>
                    <Card className='cards'
                        text='Painel de controle de Pessoas'
                        to='/dashboardpessoas'
                    />
                </Row>
                <Row>
                    <Card className='cards'
                        text='Painel de controle de protocolos'
                        to='/dashboardprotocolo'
                    />
                </Row>
            </Col>
            
        </Container>
    )
}

export default Home