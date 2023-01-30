import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";

function StyledButton(props) {
    const { variant, link, text, content, textColor } = props

    const signupStyle = { 
        width: "12vw", 
        height: "6vh", 
        borderRadius: "100vmax", 
        textTransform: "none", 
        background: "#F83E7D"
    }

    const emptyStyle = { 
        width: "12vw", 
        height: "6vh", 
        borderRadius: "100vmax", 
        textTransform: "none", 
        background: "#fffff"
    }

    const leftRoleStyle = {
        width: '10vw',
        height: '10vw',
        borderRadius: '50px 0 0 50px',
        background: "transparent",
        textTransform: "none", 
        color: textColor
    }

    const rightRoleStyle = {
        width: '10vw',
        height: '10vw',
        borderRadius: '0 50px 50px 0',
        background: "transparent",
        textTransform: "none", 
        color: textColor   
    }

    const middleRoleStyle = {
        width: '10vw',
        height: '10vw',
        background: "transparent",
        textTransform: "none", 
        color: textColor
    }

    return(
        <div>
            {variant === 'signup' &&             
            <Button
                variant="contained"
                style={signupStyle}
                endIcon={<ArrowForwardIcon />}
                href={link}>
                <Typography variant="h5" fontWeight={600}> {text} </Typography>
            </Button>}

            {variant === 'empty' &&             
            <Button
                variant="contained"
                style={emptyStyle}
                endIcon={<ArrowForwardIcon />}
                href={link}>
                <Typography variant="h5" fontWeight={600}> {text} </Typography>
            </Button>}

            {variant === 'leftRole' &&
            <Button
                variant="contained"
                style={leftRoleStyle}>
                {content}
            </Button>}

            {variant === 'middleRole' &&
            <Button
                variant="contained"
                style={middleRoleStyle}>
                {content}
            </Button>}

            {variant === 'rightRole' &&
            <Button
                variant="contained"
                style={rightRoleStyle}>
                {content}
            </Button>}



        </div>
    )
}

export default StyledButton