import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    home: {
        position: "fixed",
        left: "20px",
        bottom: "20px",
        zIndex: "2",
        padding: "15px",
        background: "#350275",
        color: "#fff",
        borderRadius: "50%",
    },
    showCard: {
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
        }
    },
    mainCard: {
        marginRight: "2rem",
        marginBottom: "1rem",
        "& .MuiCard-root": {
            width: "50vw",
            [theme.breakpoints.down('sm')]: {
                width: "90vw",
            }
        },
        [theme.breakpoints.down('sm')]: {
            margin: "0 auto"
        }
    },
    sideCards: {
        "& .MuiCard-root": {
            height: "20vh",
            [theme.breakpoints.down('sm')]: {
                display: "none"
            }
        }
    }
}))