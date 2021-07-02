import { Container, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import fileSaver from 'file-saver'
import CardItem from '../Card/Card'
import { cards } from '../data'


const Main = () => {
    const history = useHistory();
    const handleClick = (route) => {
        if (route === "/resume") {
            fileSaver.saveAs(
                process.env.PUBLIC_URL + "/resume.pdf",
                "resume.pdf"
            );
        } else {
            history.push(route)
        }
    }
    return (
        <Container>
            <Grid container spacing={3} id="mainGrid">
                {cards.map((card) => (
                    <Grid key={card.id} item xs={12} sm={6} md={4}>
                        <CardItem
                            title={card.title}
                            content={card.content}
                            image={card.image}
                            handleClick={() => handleClick(card.id)}
                            view={card.id === '/resume' ? "" : "View this Card"}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Main
