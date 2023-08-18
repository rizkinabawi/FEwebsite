interface Navlinks{
    link:string
    text:string
}

export const NavLinks=(props :Navlinks)=>{
    
    return(
       < a href={`${props.link}`} className="hover:text-blue-costum active:bg-blue-costum">
            {props.text}
       </a>
    )
}