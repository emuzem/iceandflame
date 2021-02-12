import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.button`
padding: 20px;
width: 445px;
background: #0a1117;
color: #a0a2a4;
border: none;
border-radius: 15px;
box-shadow: 0 0 15px #a0a2a4;
margin-bottom:30px;
transition: box-shadow linear 0.3s;
:active, :focus {
outline: none
}
:hover {
box-shadow: 0 0 30px #a0a2a4;
}

`

export default class NewRandomChar extends Component  {
    constructor(props) {
        super(props);
    }

    render() {
        const {onToggle} = this.props;
        return (
            <Button onClick={onToggle}>New character</Button>
        )
    }

}

