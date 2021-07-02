import { LinearProgress, Card, CardContent, Typography, Button } from '@material-ui/core';
import useStyles from './style'

const Skills = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="button" className={classes.title} >
                    Level 1
                </Typography>
                <Typography variant="subtitle1" className={classes.title} >
                    Power : 540
                </Typography>

            </div>
            <hr />

            <CardContent>
                <Typography variant="h2" className={classes.cardName}>
                    Skills Card
                </Typography>
                <hr />
                <Typography variant="h5" className={classes.contentHead}>
                    Technical Skills
                    </Typography>
                <div className={classes.skill}>
                    <Typography variant="body1" className={classes.content}>
                        C and C++
                    </Typography>
                    <LinearProgress className={classes.colorPrimary} variant="determinate" value={90} />
                </div>
                <div className={classes.skill}>
                    <Typography variant="body1" className={classes.content}>
                        Data Structures
                    </Typography>
                    <LinearProgress className={classes.colorPrimary} variant="determinate" value={80} />
                </div>
                <div className={classes.skill}>
                    <Typography variant="body1" className={classes.content}>
                        Operating System
                    </Typography>
                    <LinearProgress className={classes.colorPrimary} variant="determinate" value={65} />
                </div>
                <div className={classes.skill}>
                    <Typography variant="body1" className={classes.content}>
                        Python
                    </Typography>
                    <LinearProgress className={classes.colorPrimary} variant="determinate" value={60} />
                </div>
                <div className={classes.skill}>
                    <Typography variant="body1" className={classes.content}>
                        HTML + CSS
                    </Typography>
                    <LinearProgress className={classes.colorPrimary} variant="determinate" value={90} />
                </div>
                <div className={classes.skill}>
                    <Typography variant="body1" className={classes.content}>
                        Bootstrap
                    </Typography>
                    <LinearProgress className={classes.colorPrimary} variant="determinate" value={75} />
                </div>
                <div className={classes.skill}>
                    <Typography variant="body1" className={classes.content}>
                        JavaScript
                    </Typography>
                    <LinearProgress className={classes.colorPrimary} variant="determinate" value={50} />
                </div>
                <div className={classes.skill}>
                    <Typography variant="body1" className={classes.content}>
                        ReactJS
                    </Typography>
                    <LinearProgress className={classes.colorPrimary} variant="determinate" value={50} />
                </div>
                <div className={classes.skill}>
                    <Typography variant="body1" className={classes.content}>
                        Material UI
                    </Typography>
                    <LinearProgress className={classes.colorPrimary} variant="determinate" value={50} />
                </div>
                <div className={classes.skill}>
                    <Typography variant="body1" className={classes.content}>
                        NodeJs
                    </Typography>
                    <LinearProgress className={classes.colorPrimary} variant="determinate" value={60} />
                </div>
                <div className={classes.skill}>
                    <Typography variant="body1" className={classes.content}>
                        SQL ( MySQL )
                    </Typography>
                    <LinearProgress className={classes.colorPrimary} variant="determinate" value={55} />
                </div>
                <div className={classes.skill}>
                    <Typography variant="body1" className={classes.content}>
                        MongoDB
                    </Typography>
                    <LinearProgress className={classes.colorPrimary} variant="determinate" value={60} />
                </div>
                <div className={classes.skill}>
                    <Typography variant="body1" className={classes.content}>
                        Django
                    </Typography>
                    <LinearProgress className={classes.colorPrimary} variant="determinate" value={40} />
                </div>
                <Typography variant="h5" className={classes.contentHead}>
                    Other Skills
                </Typography>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <Button variant="contained" color="primary" className={classes.button}>Sketching</Button>
                    <Button variant="contained" color="primary" className={classes.button}>Painting</Button>
                    <Button variant="contained" color="primary" className={classes.button}>Singing</Button>
                    <Button variant="contained" color="primary" className={classes.button}>Writing</Button>
                    <Button variant="contained" color="primary" className={classes.button}>Reading</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Skills

