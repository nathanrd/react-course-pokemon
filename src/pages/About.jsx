import React, {Fragment, Component, useState} from 'react';
import Button from '@material-ui/core/Button';


export default function About() {
    const [counter, setCounter] = useState(0);
        return (
            <div>
                <p>Counter: <strong>{counter}</strong></p>
                <Button variant="contained" color="primary" onClick={() => setCounter(counter + 1)}>
                Increment
                </Button>
             </div>
        );
    }