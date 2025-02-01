let div = "grid grid-cols-1 mb-2 text-white";
let labelClass = "font-medium text-xl " ;

const Input = ({type, name, id, htmlFor, label, className= '' }) => {
  return (
    <div className={div}>
    <label className={labelClass}htmlFor={htmlFor}>{label}</label>
    <input  className={`h-10 pl-2 border-[2px] border-black ${className}`} type={type} name={name} id={id} />
    </div>

  )
}

export default Input

