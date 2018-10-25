
import React from 'react';
import './styles.local.scss';

export function Message(props) {
    return (
        <div className="container">
            <div className="message" style={props.style}>
                {props.content}
            </div>
        </div>
    )
}

export function Image(props) {
    return (
        <img src={props.src} className="img-rounded" alt={props.alt} width={props.width} height={props.height} />
    )
}

export function Dropdown(props) {
    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{props.label}<span className="caret"></span></button>
            <ul className="dropdown-menu">
                {
                    props.options.map((option, index) => {
                        return (
                            <li key={index}><a href={option.value}>{option.display}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export function Textbox(props) {
    return (
        <textarea placeholder={"Type a message here"} value={props.defaultValue} onChange={props.onChange} onKeyUp={props.onKeyUp} className="form-control" rows="3" id={props.id} style={props.style}></textarea>
    )
}