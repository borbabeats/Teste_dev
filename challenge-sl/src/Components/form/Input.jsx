// eslint-disable-next-line react/prop-types
function Input({ text, type, name, placeholder, value, maxlength, onKeyUp, onChange, defaultValue }) {
    return (
        <>
        <label htmlFor={name}>{text}:</label>
        <input 
        type={type} 
        name={name} 
        id={name}  
        placeholder={placeholder} 
        value={value}
        maxLength={maxlength}
        onKeyUp={onKeyUp}
        onChange={onChange}
        defaultValue={defaultValue}
        
        />
        </>
    )
}

export default Input