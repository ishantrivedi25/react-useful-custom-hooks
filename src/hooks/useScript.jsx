import { useState, useEffect } from "react";

const useScript = (src) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;

        const onLoad = () => {
            setIsLoaded(true);
        };
        const onError = () => {
            setIsError(true);
        };

        script.addEventListener("load", onLoad);
        script.addEventListener("error", onError);

        document.body.appendChild(script);

        return () => {
            script.removeEventListener("load", onLoad);
            script.removeEventListener("error", onError);
            document.body.removeChild(script);
        };
    }, [src]);

    return { isLoaded, isError };
};

export default useScript;