let div = "grid grid-cols-1 mb-2 text-gray-400";
let labelClass = "font-medium text-xl " ;

const Input = ({type, name, id, htmlFor, label, className= '' }) => {
  return (
    <div className={div}>
    <label className={labelClass}htmlFor={htmlFor}>{label}</label>
    <input  className={`h-10 pl-2 border-1  rounded border-gray-100 hover:border-gray-400 ${className}`} type={type} name={name} id={id} />
    </div>

  )
}

export default Input

