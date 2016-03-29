import React, { Component, PropTypes } from 'react'

const styles = {
    button: {
        cursor: 'pointer',
        fontWeight: 'bold',
        borderRadius: '3px',
        padding: '3px',
        margin: '5px 3px',
        fontSize: '0.8em',
        textDecoration: 'none',
        border: 'none',
    },
    content: {
        margin: '5px',
        padding: '5px',
        borderRadius: '3px',
        outline: 'none',
        flex: '1 1 80%',
        overflow: 'auto',
    },
    label: {
        margin: '5px',
        padding: '5px',
        flex: '1 1 20%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        direction: 'rtl',
        textAlign: 'left',
    },
}


class PersistStateMonitor extends Component {
    render () {
        return (
            <div>
                hello
            </div>
        )
    }
}

export default PersistStateMonitor