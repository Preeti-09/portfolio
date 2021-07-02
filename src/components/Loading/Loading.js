import { useEffect } from 'react';
import useStyles from './style'

const Loading = () => {
    const classes = useStyles();
    useEffect(() => {
        setTimeout(() => {
            document.getElementsByTagName('body')[0].classList.add("background")
        }, 1900)
    })
    return (
        <div id="loading" className={classes.loading}>
            {[...Array(40)].map((index) => (
                <p key={index} className={classes.text}>
                    {[...Array(30)].map((index) => (<span key={index}>Loading</span>))}
                </p>
            ))}
        </div>
    )
}

export default Loading
