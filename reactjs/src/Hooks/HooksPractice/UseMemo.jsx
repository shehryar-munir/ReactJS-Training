import React, {useMemo, useState} from 'react';

// useMemo is a hook that will memoize the expensive calculation
// and will only recompute the value when any value in the dependency array changes
const UseMemo = () => {

    const [a, setA] = useState(100);
    const [b, setB] = useState(100);

    const updateA = () => {
        setA(a + 1);
    }

    // this hook will memoize this expensive calculation
    const calculateAB = useMemo(() => {
        alert("Computed")
        return a * b;
    }, [a,b]); // if values of a or b change, then this hook will recompute the value

    return (
        <div style={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10vh',
            }

        }>
            <h1>Use Memo</h1>
            <h2>{calculateAB}</h2>
            <button onClick={updateA}>Change A</button>
        </div>
    );
}

export default React.memo(UseMemo);