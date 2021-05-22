import React, { useEffect } from 'react'
import ReactDOM from 'react-dom';

const Portal = (props) => {
    let container = document.createElement('div');
    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }
    }, [])

    return (
        ReactDOM.createPortal(
            props.children,
            container
        )
    )
}

export default Portal