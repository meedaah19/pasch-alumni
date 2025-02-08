let div = "grid grid-cols-1 mb-2 ";
let labelClass = "block font-semibold" ;

const Input = ({type, name, id, htmlFor, required, label}) => {
  return (
    <div className={div}>
    <label className={labelClass}htmlFor={htmlFor}>{label}</label>
    <input  className="border p-2 rounded w-full" type={type} name={name} id={id} required={required} />
    </div>

  )
}

export default Input

