function Input({ text, type, name, placeholder, value, maxlength }) {
    return (
        <>
        <label htmlFor={name}>{text}:</label>
        <input 
        type={type} 
        name={name} 
        id={name}  
        placeholder={placeholder} 
        defaultValue={value}
        maxLength={maxlength}
        />
        
        </>
    )
}

export default Input