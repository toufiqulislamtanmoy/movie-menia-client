import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(()=>{
        document.title=`Movie Mania | ${title} `
    },[title])    
};

export default useTitle;