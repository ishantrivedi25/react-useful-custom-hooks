import { useEffect, useRef } from 'react';

const useUpdateEffect = (effect, dependencies = []) => {
    const initialMountRef = useRef(true);

    useEffect(() => {
        if (initialMountRef.current) {
            initialMountRef.current = false;
        } else {
            return effect();
        }
    }, dependencies);
};

export default useUpdateEffect;