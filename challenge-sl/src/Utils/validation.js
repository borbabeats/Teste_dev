const validarSenha = (senha) => {
    return senha?.toString().length > 6
}

export {validarSenha}