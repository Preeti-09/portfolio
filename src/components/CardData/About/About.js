import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './style'

const About = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="button" className={classes.title} >
                    Level 0
                </Typography>
                <Typography variant="subtitle1" className={classes.title} >
                    Power : 602
                </Typography>

            </div>

            <div style={{ background: "#fff" }}>
                <CardMedia
                    className={classes.img}
                    component="img"
                    alt='profile picture'
                    image='/profilePic.jpg'
                    title='profile picture'
                />
            </div>

            <CardContent>
                <Typography variant="h2" className={classes.cardName}>
                    About myself
                </Typography>
                <hr />
                <Typography variant="body1" className={classes.content}>
                    Hello there ,<br />
                    I am Preeti Ranjan from India. I am an undergradute from NIT Jalandhar, Punjab, India. I am majoring in Computer Science Engineering.<br />
                    I am curious learner and love learning various technologies. I am detail-oriented and love solving problems. I have knowledge of various IT skills.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default About

