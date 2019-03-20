import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
//import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    appBar: {
        position: 'relative'
    },
    icon: {
        marginRight: theme.spacing.unit * 2
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    bigAvatar: {
        margin: 'auto',
        padding: 'auto',
        width: 60,
        height: 60,
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },
    dense: {
        marginTop: 19
    },
    menu: {
        width: 200
    }
});

const CityCard = props => {
    const { classes } = props;
    const results = props.results

    return (
        <main>
            <div className={classNames(classes.layout, classes.cardGrid)}>
                <Grid container spacing={40}>
                    {results.map(data => (
                        <Grid sm={6} md={4} lg={3}>
                            <Card className={classes.card} key={data.woeid}>
                                <CardContent>
                                    {data.title}
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Today <Avatar alt="weather icon" src={`https://www.metaweather.com/static/img/weather/${data.consolidated_weather[0].weather_state_abbr}.svg`} className={classes.bigAvatar} /></Typography>


                                    <Typography className={classes.pos} color="textSecondary" paragraph={true}
                                        key={data.consolidated_weather[0].id}>
                                      Temp: {Math.round(data.consolidated_weather[0].the_temp)}ºC with {data.consolidated_weather[0].weather_state_name} 
                                    </Typography>
                                    
                              <Typography color="textSecondary" variant="subheading">
                              3 day forecast
                              </Typography>

                                    <Typography className={classes.pos} color="textSecondary" align="left" >
                                    
                                        {data.consolidated_weather.map(weather => (
                                            <ol key={weather.id}>
                                                {weather.applicable_date} Temp: {Math.round(weather.the_temp)}ºC with {weather.weather_state_name}
                                            </ol>
                                        ))}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>

        </main>
    );
}

CityCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityCard);