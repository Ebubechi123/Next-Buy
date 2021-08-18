const Input=({
    type,
    placeholder,
    onChange,
    required,
    style
})=>{
    return(
        <input type={type} placeholder={placeholder} onChange={onChange} required={required} style={style} />
    )
}


export default Input;