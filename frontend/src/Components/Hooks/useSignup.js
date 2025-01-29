
import {toast} from "react-hot-toast";
import { useAuthcontext } from "./context";

const useSignup =()=>{

    const {setAuthUser} = useAuthcontext()

    const signup =async({name,username,password,gender,confirm})=>{

        // console.log({name,username,password,gender,confirmpassword});

       const status = handleErrors({name,username,password,gender,confirm});

       if(!status) return;

       try{
        const data = await fetch("/api/auth/sign",{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({name,username,password,gender,confirm})
       })

       const json = await data.json();
       console.log(json);

       localStorage.setItem("chat-user",JSON.stringify(json));
       setAuthUser(json);   
    }
       catch(error){
            toast.error(error.message);
            console.log("Error",error);
       }
    }
    return{ signup };

}

export default useSignup;

const handleErrors = ({name,username,password,gender,confirm})=>{


    if(!name || !username || !password || !confirm ||!gender){
        toast.error("Please fill all Fields");
        console.log("error");
        return false;
    }

    if(password!==confirm){
        toast.error("Passwords do not match");
        return false;
    }

    if(password.length < 6){
        toast.error("Password must be at least 6 characters");
    }

    return true;
}