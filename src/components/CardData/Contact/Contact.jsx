import { Button, Card, CardContent, List, ListItem, ListItemIcon, Typography } from '@material-ui/core';
import { Email, GitHub, LinkedIn, LocationOn, PhoneAndroid } from '@material-ui/icons'

import useStyles from './style'

const Awards = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="button" className={classes.title} >
                    Level 5
                </Typography>
                <Typography variant="subtitle1" className={classes.title} >
                    Power : 1659
                </Typography>
            </div>
            <hr />

            <CardContent>
                <Typography variant="h2" className={classes.cardName}>
                    Contact Card
                </Typography>
                <hr />
                <Typography variant="body1" className={classes.content}>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <PhoneAndroid style={{ color: "#fff" }} />
                            </ListItemIcon>
                            <Typography variant="body1" className={classes.content}>
                                (+91) 9773 950 465
                            </Typography>
                        </ListItem>
                        <ListItem style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                            <Button target="_blank" href="mailto:pransingh729@gmail.com" style={{ padding: "0", textTransform: "lowercase" }}>
                                <ListItemIcon>
                                    <Email style={{ color: "#fff" }} />
                                </ListItemIcon>
                                <Typography variant="body1" className={classes.content}>
                                    pransingh729@gmail.com
                            </Typography>
                            </Button>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LinkedIn style={{ color: "#fff" }} />
                            </ListItemIcon>
                            <Typography variant="body1" className={classes.content}>
                                <a href="https://www.linkedin.com/in/preetiranjan/" rel="noreferrer" target="_blank" style={{ color: "#fff" }} >@preeti-ranjan</a>
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <GitHub style={{ color: "#fff" }} />
                            </ListItemIcon>
                            <Typography variant="body1" className={classes.content}>
                                <a href="https://github.com/Preeti-09" rel="noreferrer" target="_blank" style={{ color: "#fff" }} >Preeti-09</a>
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LocationOn style={{ color: "#fff" }} />
                            </ListItemIcon>
                            <Typography variant="body1" className={classes.content}>
                                Sector : Alpha - 2, Greater Noida, U.P., 201310
                            </Typography>
                        </ListItem>
                    </List>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Awards

