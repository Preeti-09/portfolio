import { Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { AcUnit } from '@material-ui/icons'
import useStyles from './style'

const Awards = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="button" className={classes.title} >
                    Level 4
                </Typography>
                <Typography variant="subtitle1" className={classes.title} >
                    Power : 946
                </Typography>

            </div>
            <hr />

            <CardContent>
                <Typography variant="h2" className={classes.cardName}>
                    Certification Card
                </Typography>
                <hr />
                <Typography variant="body1" className={classes.content}>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <AcUnit style={{ color: "#fff" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Certification of Web Developement Course from Coursera"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <AcUnit style={{ color: "#fff" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Course completion Python from Coursera"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <AcUnit style={{ color: "#fff" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Certification for Participation in BADLAV (content writing tournament)"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <AcUnit style={{ color: "#fff" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Soft Skills and Content writing course completion at Percipio"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <AcUnit style={{ color: "#fff" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Pythin, JS and SQL Skill unlocked at HackerRank"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <AcUnit style={{ color: "#fff" }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Specialization course of Deep Learning at Coursera"
                            />
                        </ListItem>
                    </List>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Awards

