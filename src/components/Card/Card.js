import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './style'

const CardItem = ({ title, content, image, handleClick, view }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component="img"
                    alt={title}
                    height="240"
                    image={image}
                    title={title}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardContent}>
                <Button color="secondary" variant="text" onClick={handleClick}>
                    {view}
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardItem
