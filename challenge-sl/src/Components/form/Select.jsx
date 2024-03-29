function Select({ text, name, onChange, options, required }) {
    return(
        <div className="d-flex flex-column">
        <label htmlFor={name}>
            {text}
            {required && <span className='text-danger'>*</span>}
        </label>
        <select 
            id={name}
            name={name}
            onChange={onChange}
            required={required}
            >
            
                <option value=''>{text}</option>

                {options.map(option => (
                    <option value={option.name} key={option.id}>
                        {option.nome}
                    </option>
            ))}
                
          
        </select>
        </div>
    )
}



export default Select