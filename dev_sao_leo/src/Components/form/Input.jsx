function Input({ type, name, placeholder, value, text, maxlength }) {
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