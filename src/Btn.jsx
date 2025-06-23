export function Btn({ name, url }){
    return( 
        <li className="flex bg-slate-900 hover:bg-slate-800 px-2 py-1 rounded-full grow border-1 border-gray-300 justify-items-center content-center">
            <a className="flex-1 items-center justify-center content-center" href={url}>{name}</a>
        </li>
    )
}