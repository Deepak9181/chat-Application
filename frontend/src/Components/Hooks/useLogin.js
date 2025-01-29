import toast from "react-hot-toast";
import { useAuthcontext } from "./context";
const useLogin =()=>{

    const {setAuthUser}=useAuthcontext();

    const Login= async({username,password})=>{
        try{
            const success = handleErrors({username,password});
            if(!success)return;    
            const res = await fetch("/api/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username,password}),
            });

            const data = await res.json();
            console.log(data);
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuthUser(data);
            toast.success(data.meessage);
        }
        catch(error){
            toast.error(error.message);
        }
    }

    return {Login};

}

export default useLogin;

const handleErrors = ({username,password})=>{


    if(!username || !password ){
        toast.error("Please fill all Fields");
        console.log("error");
        return false;
    }

    return true;
}