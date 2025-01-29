
export default function Button({children}){
    return(
        <button className="bg-red-500 text-white font-bold  font-[Montserrt] py-2 px-6 rounded md:ml-8 hover:bg-red-600 duration-500">
            {children}
        </button>
    )
}