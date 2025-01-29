import { useEffect, useState } from 'react';
import {toast} from "react-hot-toast"

const useGetUsers =()=>{

    const [conversation,setconversation]=  useState([]);


    useEffect(()=>{
        const getConversation =async()=>{
            try{
                const data = await fetch("/api/users/getusers");               
                const res = await data.json();
    
                if(res.error){
                    throw new Error(res.error)
                }
                // console.log(res.users);
                setconversation(res.users);
            }
            catch(error){
                toast.error(error.message);
            }
        }
        getConversation();

    },[])

    return {conversation}

};

export default useGetUsers;