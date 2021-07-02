import { Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'

import useStyles from './style'

const items = [
    {
        "title": "Social Media Website",
        "content": "MERN tech stack project used to share photos with others. Uses Google Auth for authentication and login purposes.",
        "image": "/project3.png",
        "githubLink": "https://github.com/Preeti-09/memories",
    },
    {
        "title": "WebChat",
        "githubLink": "https://github.com/Preeti-09/webchat",
        "image": "/project2.png",
        "content": "Chatting web application using chat engine and react.",
    },
    {
        "title": "NetJobs",
        "githubLink": "https://github.com/Vaibhav3009/JobPortal",
        "image": "/project4.png",
        "content": "Django web app that uses real-time web scraping to display job posts based on user's preference.",
    },
    {
        "title": "MiniGames",
        "githubLink": "https://github.com/Preeti-09/miniGames",
        "image": "/project1.png",
        "content": "Color Game and Tic-tac-toe website using ReactJs",
    },
]

const ProjectCards = ({ title, image, githubLink, content }) => {
    const fontStyle = {
        fontFamily: "'Philosopher', sans-serif",
    }
    const link = {
        color: "#85e2ff",
        fontStyle: "italic",
    }


    return (
        <Card style={{ background: "none", color: "#fff" }}>
            <CardMedia
                component="img"
                alt={title}
                // height="240"
                image={image}
                title={title}
            />
            <CardContent>
                <Typography variant="h5" style={fontStyle}>
                    {title}
                </Typography>
                <br />
                <Typography variant="subtitle1" style={fontStyle}>
                    {content}
                </Typography>
                <br />
                <Typography variant="subtitle1" style={fontStyle}>
                    <a href={githubLink} rel="noreferrer" target="_blank" style={link}>View Code at Github</a>
                </Typography>
            </CardContent>
        </Card>

    )
}


const Projects = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="button" className={classes.title} >
                    Level 3
                </Typography>
                <Typography variant="subtitle1" className={classes.title} >
                    Power : 746
                </Typography>
            </div>
            <hr />

            <CardContent>
                <Typography variant="h2" className={classes.cardName}>
                    Projects Card
                </Typography>
                <hr />

                <Carousel
                    animation="slide"
                    NavButton={({ onClick, className, next, prev }) => {
                        return (
                            <Button onClick={onClick} className={className} style={{ fontSize: "1rem" }} >
                                {next && "Next"}
                                {prev && "Previous"}
                            </Button>
                        )
                    }}
                >
                    {items.map((item) => (
                        <ProjectCards
                            title={item.title}
                            githubLink={item.githubLink}
                            image={item.image}
                            content={item.content}
                            key={item.title}
                        />
                    ))}
                </Carousel>
            </CardContent>
        </Card>
    )
}

export default Projects

