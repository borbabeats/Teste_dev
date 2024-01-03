import LinkButton from "../Components/form/LinkButton"

function Home() {
    return (
        <>
            <LinkButton
                text='Cadastrar uma nova pessoa'
                to='/cadastrapessoa'
            />
            <LinkButton
                text='Preencher protocolo'
                to='/protocolo'
            />
        </>
    )
}

export default Home