import { useState } from "react"
import Usercontext from "./usercontext"

const Userstate=(props)=>{
    const[signupinput, setsignupinput]= useState({
        "name":"","password":"","email":"","phone":"","address":""
    })
    const [logininput,setlogininput]=useState({"email":"","passowrd":""})
    const [items, setitems]= useState()
    return(
        <Usercontext.Provider value={{signupinput,setsignupinput,logininput,setlogininput,items, setitems}}>
            {props.children}
        </Usercontext.Provider>
    )
}
export default Userstate