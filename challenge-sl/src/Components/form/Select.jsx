function Select({ text, name, value, onChange, options, defaultOptionText }) {
    return(
        <>
        <label htmlFor={name}>{text}:</label>
        <select 
            id={name}
            name={name}
            onChange={onChange}
            defaultValue={value || ''}
            aria-labelledby={name}
            >
            <option value='' disabled>
                {defaultOptionText || 'Selecione uma opcao'}
            </option>
            {options.map((option) => (
                <option value={option.value} key={option.value}>
                   {option.nome}
                </option>
            ))}
        </select>
        </>
    )
}



export default Select