function Select({ text, name, value, handleOnChange, options }) {
    return(
        <>
        <label htmlFor={name}>{text}:</label>
        <select 
            id={name}
            name={name}
            onChange={handleOnChange}
            defaultValue={value || ''}
            >
            <option>Selecione uma opcao</option>
            {options.map((option) => (
                <option value={option.id} key={option.id}>
                    {option.name}
                </option>
            ))}
          
            
        </select>
        </>
    )
}


export default Select