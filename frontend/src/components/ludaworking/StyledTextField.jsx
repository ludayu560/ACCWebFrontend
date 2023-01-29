import { TextField } from "@mui/material"

function StyledTextField(props) {
    const { variant, placeholder, width, height } = props

    const styleEmpty = {
        background: '#ffffff',
        borderRadius: '100vmax',
        border: '3px solid #7f7d7d'
    };
    const styleEmptyInput = {
        style: {
            color: '#737373FA',
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

    return (
        <div>
            { variant === 'empty' && <TextField placeholder={placeholder} style={styleEmpty} InputProps={styleEmptyInput}/>}
            { variant === 'filled' && <TextField placeholder={placeholder} style={styleFilled} InputProps={styleFilledInput}/>}
        </div>
    )
}

export default StyledTextField