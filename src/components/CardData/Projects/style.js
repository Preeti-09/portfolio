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
    content: {
        textAlign: "justify",
        fontFamily: "'Philosopher', sans-serif",
        color: "#fff",
        margin: "0"
    },
}))