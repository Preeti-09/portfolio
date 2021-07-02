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
    cardName: {
        marginBottom: "1rem",
        textAlign: "center",
        fontFamily: "'Cookie', cursive",
        fontWeight: "500",
        letterSpacing: "2.4px",
    },
    contentHead: {
        fontFamily: "'Philosopher', sans-serif",
        margin: "1.4rem 0 1.1 0",
    },
    content: {
        textAlign: "justify",
        fontFamily: "'Philosopher', sans-serif",
    },
    skill: {
        margin: "1rem auto",
    },
    button: {
        margin: "5px"
    },
    colorPrimary: {
        "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#00ff2b",
        },
    }

}))