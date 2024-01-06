import LinkButton from "../Components/form/LinkButton"

function Home() {
    return (
        <>
            <LinkButton
                text='Painel de controle de Pessoas'
                to='/dashboardpessoas'
            />
            <LinkButton
                text='Painel de controle de protocolos'
                to='/dashboardprotocolo'
            />
        </>
    )
}

export default Home