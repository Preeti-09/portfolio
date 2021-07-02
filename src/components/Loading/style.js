import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    loading: {
        transition: "all 1s ease-in",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        textShadow: "0 0 2px #fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        // alignItems: "space-evenly",
        fontSize: "2.5rem",
        animation: "$loading 2.5s ease-out",
        overflow: "hidden",
        opacity: "0",
    },
    "@keyframes loading": {
        "0%": {
            transform: "scale(50) rotate(-35deg)",
            overflow: "hidden",
            opacity: "1",
        },
        "80%": {
            // transform: "scale(2.3) rotate(-29deg)",
            opacity: "1",
            overflow: "hidden",
        },
        "100%": {
            transform: "scale(0.95) rotate(-25deg)",
            opacity: "0",
            overflow: "hidden",
        },
    },
    text: {
        margin: "5px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "space-evenly",
        "& span": {
            marginRight: "15px",
            textTransform: "uppercase",
            letterSpacing: "5px"
        }
    }

}))