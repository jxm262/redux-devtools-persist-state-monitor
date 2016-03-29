import React, { Component, PropTypes } from 'react'
import * as themes from 'redux-devtools-themes'


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
        width: '120px',
        textAlign: 'center',
        height: '25px',
        lineHeight: '25px',
        display: 'inline-block'
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
    input: {
        width: '80%',
        height: '31px',
        display: 'inline-block',
        fontWeight: 'bold',
        borderRadius: '3px',
        padding: '3px',
        margin: '5px 3px'
    }
}



class PersistStateMonitor extends Component {
    static update = () => {};

    static propTypes = {
        theme: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
        ]),
    };

    static defaultProps = {
        theme: 'nicinabox'
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            showInput: false,
            inputValue: ''
        };
    }

    getTheme() {
        let { theme } = this.props;
        if (typeof theme !== 'string') {
            return theme;
        }

        if (typeof themes[theme] !== 'undefined') {
            return themes[theme];
        }

        console.warn('DevTools theme ' + theme + ' not found, defaulting to nicinabox');
        return themes.nicinabox;
    }

    showAll() {

    }

    showAddInputField() {

    }

    save() {
        const inputValue = this.state.inputValue

        this.setState({showInput: false, inputValue: ''}, () => {
            if (inputValue !== '') {
                window.location.href = `?debug_session${inputValue}`
            } else {
                //todo handle no input
            }
        })
    }

    showInput() {
        this.setState({showInput: true})
    }

    changeInputValue(e) {
        this.setState({inputValue: e.target.value})
    }

    render () {
        const theme = this.getTheme(),
            contentEditableStyle = {...styles.content, color: theme.base06, backgroundColor: theme.base00},
            buttonStyle = {...styles.button, color: theme.base06, backgroundColor: theme.base00};

        const input = (this.state.showInput)
            ? (<div>
                <input type="text" style={styles.input} onChange={this.changeInputValue.bind(this)}/>
                <div style={Object.assign({}, buttonStyle, {width: '50px', float: 'right'})} onClick={this.save.bind(this)}>Save</div>
              </div>)
            : null

        return (
            <div style={{backgroundColor: theme.base00, fontFamily: 'monaco,Consolas,Lucida Console,monospace'}}>
                <div style={buttonStyle} onClick={this.showAll.bind(this)}>Show All</div>
                <div style={buttonStyle} onClick={this.showInput.bind(this)}>Add State</div>
                { input }
            </div>
        )
    }
}

export default PersistStateMonitor