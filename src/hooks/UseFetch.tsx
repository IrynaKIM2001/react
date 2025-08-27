import {useEffect, useState} from "react";

export const UseFetch = <T,>(url:string) => {
    const [obj, setObj] = useState<T>()
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setObj(result)
                }
            )
    }, []);
    return obj;
};