let div = "grid grid-cols-1 mb-2 ";
let labelClass = "block font-semibold" ;

const Input = ({type, name, id, htmlFor, accept, required, onChange, value, label}) => {
  return (
    <div className={div}>
    <label className={labelClass}htmlFor={htmlFor}>{label}</label>
    <input  className="border p-2 rounded w-full" type={type} accept={accept} name={name} id={id} onChange={onChange} value={value} required={required} />
    </div>

  )
}

export default Input

