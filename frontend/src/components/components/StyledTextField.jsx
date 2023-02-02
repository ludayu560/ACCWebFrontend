import { TextField } from "@mui/material"
import { useState } from "react";

function StyledTextField(props) {
    const { disabled, variant, placeholder, width, height, value, color, hook} = props
    const [field, setField] = useState()

    const onChangeHandler = (e) => {
        setField(e.target.value)
        hook(e.target.value)
    }

    const styleEmpty = {
        background: '#ffffff',
        borderRadius: '100vmax',
        border: '3px solid #7f7d7d'
    }
    
    const styleEmptyInput = {
        style: {
            color: color? color : '#737373FA',
            borderRadius: '100vmax',
            height: height? height : '5vh',
            width: width? width : '17vw'
        }
    }

    const styleFilled = {
        background: '#ffffff',
        borderRadius: '100vmax',
    }

    const styleFilledInput = {
        style: {
            color: '#000',
            borderRadius: '100vmax',
            height: height? height : '5vh',
            width: width? width : '17vw'
        }
    }

    const styleDropDown = {
        background: '#ffffff',
        borderRadius: '100vmax',
        border: '3px solid #7f7d7d',
        color: color? color : '#737373FA',
    }
    const styleDropDownInput = {
        style: {
            color: color? color : '#737373FA',
            borderRadius: '100vmax',
            height: height? height : '5vh',
            width: width? width : '17vw',
        }
    }
    return (
        <div>
            { variant === 'empty' && <TextField 
                disabled={disabled? true : false}
                onChange={onChangeHandler} 
                placeholder={placeholder} 
                style={styleEmpty} 
                value={field? field : value}
                InputProps={styleEmptyInput}/>}
            { variant === 'filled' && <TextField 
                disabled
                onChange={onChangeHandler} 
                placeholder={placeholder} 
                style={styleFilled} 
                value={field? value : field}
                InputProps={styleFilledInput}/>}
            { variant === 'dropDownMenu' && <TextField 
                disabled={disabled? true : false}
                onChange={onChangeHandler} 
                placeholder={placeholder} 
                style={styleDropDown} 
                value={field? field : value}
                InputProps={styleDropDownInput}/>}
        </div>
    )
}

export default StyledTextField 