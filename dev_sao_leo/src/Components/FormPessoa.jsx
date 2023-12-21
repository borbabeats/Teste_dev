import { useEffect, useState } from 'react'
import Input from './form/Input'
import Select from './form/Select'
import Submit from './form/Submit'


function FormPessoa({ pessoaData }) {

    const [estado, setEstado] = useState([])
    const [cidade, setCidade] = useState([])
    const [pessoa, setPessoa] = useState(pessoaData || {})

    //get estado
    useEffect(() => {
        const Api = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
        fetch(Api, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
        .then(data => {
            const estados = data.map((estado) => ({
                id: estado.id,
                name: estado.nome,
            }))
            setEstado(estados)
    }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (pessoa.estado) {
          const ApiCity = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${pessoa.estado.id}/municipios`
          fetch(ApiCity, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(res => res.json())
           .then(data => {
              const cidades = data.map((cidade) => ({
                id: cidade.id,
                name: cidade.nome,
              }))
              setCidade(cidades)
            }).catch(err => console.log(err))
        }
      }, [pessoa.estado])



    function handleEstado(e) {
        const selectedEstado = estado.find(
            (estado) => estado.id === e.target.value
        ) 
        setPessoa({ ...pessoa, 
        estado: {
            id: selectedEstado.id,
            name: selectedEstado.name,
        },
        cidade: null,
        })
        setCidade([])
    }

    function handleCidade(e) {
        const selectedCidade = cidade.find(
            (cidade) => cidade.id === e.target.value
        )
        if (selectedCidade) {
        setPessoa({...pessoa,
        cidade: {
            id: selectedCidade.id,
            name: selectedCidade.name,
        },
    })
    }
}

    const sortedEstado = estado.sort((a, b) => a.name.localeCompare(b.name))
    const sortedCidade = cidade.sort((a, b) => a.name.localeCompare(b.name))


    return (
        <form>
            <Input type='text'
                name='name'
                placeholder='Insira o nome:'
                text='Nome' />

            <Input type='date'
                name='nascimento'
                placeholder='Insira a data de nascimento:'
                text='Data de nascimento' />

            <Input type='number'
                name='cpf'
                placeholder='Insira somente os nros:'
                maxlength='11'
                text='CPF' />

            <Select 
                name='genero'
                text='Selecione o Genero'
                options={[
                    {id: 'M', name: 'Masculino'},
                    {id: 'F', name: 'Feminino'},
                    {id: 'O', name: 'Outro'},
                ]}
            
            /> 
            <Select 
            name='estado'
            text='Selecione o Estado'
            options={sortedEstado}
            handleOnChange={handleEstado}
            defaultValue=''
            />  
            <Select
            name='cidade'
            text='Selecione a Cidade'
            options={sortedCidade}
            handleOnChange={handleCidade}
            defaultValue=''

            />


            <Submit text='Enviar' />  
        </form>
        
    )
}

export default FormPessoa