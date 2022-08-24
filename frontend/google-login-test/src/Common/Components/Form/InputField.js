import React from "react";
import { useState } from "react";

const InputField = (props) => {
    const [text, setText] = useState();
    const [state, setState] = useState();

    const onChange = (e) => {
        setText(e.target.value);
        if (props.onChange)
            props.onChange(e.value)
        if (props.validate) {
            let res = props.validate(e.target.value)
            if (res === "success")
                setState('is-valid')
            else if (res === 'warning')
                setState('is-warning')
            else if (res === 'error')
                setState('is-invalid')
            else setState('')
        }
    }

    let size = "";
    if (props.size === "large")
        size = "-lg"
    if (props.size === "small")
        size = "-sm"

    return (
        <div className="form-group">
            <label for="exampleInputEmail1">{props.label}</label>
            <input type="email" className={"form-control" + size + " " + state} placeholder={props.placeholder} onChange={onChange} value={text} disabled={props.disabled ?? false} />
        </div>
    );
}

export default InputField;