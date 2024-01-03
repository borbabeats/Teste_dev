function Select({ text, name, value, onChange, options }) {
    return(
        <>
        <label htmlFor={name}>{text}:</label>
        <select 
            id={name}
            name={name}
            onChange={onChange}
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