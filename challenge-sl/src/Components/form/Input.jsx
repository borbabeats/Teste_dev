// eslint-disable-next-line react/prop-types


function Input({ required,text, type, name, placeholder, value, maxlength, onKeyUp, onChange, defaultValue, className }) {
    return (
        <div className="d-flex flex-column">
        <label htmlFor={name}>{text}:{required && <span className='text-danger'>*</span>}</label>
        
        <input 
        className={className}
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
        </div>
    )
}

export default Input