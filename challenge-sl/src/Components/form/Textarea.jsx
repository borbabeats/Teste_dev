// eslint-disable-next-line react/prop-types
function Textarea({ text, name, placeholder, value, rows, onChange, defaultValue }) {
    return (
        <>
        <label htmlFor={name}>{text}:</label>
        <textarea 
        name={name} 
        id={name}  
        placeholder={placeholder} 
        value={value}
        rows={rows}
        onChange={onChange}
        defaultValue={defaultValue}
        
        />
        </>
    )
}

export default Textarea