import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        background: "url('./cardBackground.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "#fff",
        boxShadow: "6px 5px 8px #75707054",
    },
    title: {
        fontFamily: "'Philosopher', sans-serif",
        margin: "1rem",
    },
    img: {
        height: "50vh",
        width: "100%",
        objectPosition: "top",
        margin: "0 auto",
        [theme.breakpoints.up('md')]: {
            width: "60%"
        }
    },
    cardName: {
        marginBottom: "1rem",
        textAlign: "center",
        fontFamily: "'Cookie', cursive",
        fontWeight: "500",
        letterSpacing: "2.4px",
    },
    content: {
        textAlign: "justify",
        fontFamily: "'Philosopher', sans-serif",
        color: "#fff",
        margin: "0"
    },
    mailForm: {
        padding: "1rem",
        color: "#fff",
        flexDirection: "column",
        width: "90%",

        "& .MuiTextField-root": {
            marginBottom: "1rem",
            width: "100%",
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#fff",
            },
            "& .MuiInputBase-input": {
                color: "#fff",
                fontFamily: "'Philosopher', sans-serif",
            },
            "& .Mui-focused": {
                color: "#fff",
                fontFamily: "'Philosopher', sans-serif",
            },
            "& label": {
                color: "rgba(255,255,255,0.55)",
                fontFamily: "'Philosopher', sans-serif",
            }
        },
        "& textarea": {
            marginBottom: "1rem",
            resize: "none",
            padding: "1rem",
            borderRadius: "5px",
            background: "0",
            color: "#fff",
            outline: "none",
            border: "1.7px solid #fff",
            fontFamily: "'Philosopher', sans-serif",
            fontSize: "1.1rem"
        },
        "& button": {
            color: "#fff",
            borderColor: "#fff",
        },
        display: "none",

    }
}))