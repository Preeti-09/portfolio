import { useHistory } from 'react-router-dom'
import { Container, Grid } from '@material-ui/core';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';

import CardItem from '../Card/Card'
import useStyles from './style'
import {cards} from '../data'


const MainCard = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const currId = props.location.pathname;
    const currCard = cards.filter((card) => (card.id === currId))[0].component

    const handleClick = (route) => {
        history.push(route)
    }

    return (
        <>
            <div className={classes.home} onClick={() => handleClick('/')} >
                <ControlCameraIcon />
            </div>
            <Container className={classes.showCard}>
                <div className={classes.mainCard}>
                    {currCard}
                </div>

                <Grid container direction="column" spacing={3}>
                    {cards.map((card) => (
                        card.id !== currId ?
                            <Grid key={card.id} item className={classes.sideCards}>
                                <CardItem
                                    title={card.title}
                                    content={card.content}
                                    image={card.image}
                                    handleClick={() => handleClick(card.id)}
                                />
                            </Grid>
                            : ''
                    ))}
                </Grid>
            </Container >
        </>
    )
}

export default MainCard
