import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";

function StyledButton(props) {
    const { variant, link, text, content, textColor, onClick, noArrow, width, bgcolor} = props

    const signupStyle = { 
        width: width? width : "12vw", 
        height: "6vh", 
        borderRadius: "100vmax", 
        textTransform: "none", 
        background: bgcolor ? bgcolor : "#F83E7D",
        color: textColor ? textColor : 'white'
    }

    const emptyStyle = { 
        width: width? width : "12vw", 
        height: "6vh", 
        borderRadius: "100vmax", 
        textTransform: "none", 
        background: "transparent",
        textColor: {textColor}
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
            {variant === 'signup'?
            <Button
                onClick={onClick? onClick : null}
                variant="contained"
                style={signupStyle}
                endIcon={noArrow? null : <ArrowForwardIcon />}
                href={link}>
                <Typography variant="h5" fontWeight={600}> {text} </Typography>
            </Button> : null}

            {variant === 'empty' &&
            <Button
                variant="contained"
                style={emptyStyle}
                endIcon={<ArrowForwardIcon />}
                href={link}>
                <Typography color={textColor} variant="h5" fontWeight={700}> {text} </Typography>
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
            
            {variant === 'pinkBtn' &&             
            <Button
                variant="contained"
                style={signupStyle}
                href={link}>
                <Typography variant="h5" fontWeight={600}> {text} </Typography>
            </Button>}

        </div>
    )
}

export default StyledButton