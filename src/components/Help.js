/** REACT */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

/** COMPONENTS */
import _database from "../database/Database"
import _service from "../services"
import Loader from "./ui/Loader"

/** MATERIAL UI */
import Grid from "@material-ui/core/Grid/Grid";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Button from "@material-ui/core/Button/Button";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import Chip from "@material-ui/core/Chip/Chip";
import StarIcon from "@material-ui/icons/Star";
import Divider from "@material-ui/core/Divider/Divider";

const styles = theme => ({
    mainContainer: {
        width: '100%',
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        //marginTop: theme.spacing.unit * 7,
        marginBottom: theme.spacing.unit * 8,
    },
    rowContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        width: '100%',
    },
    answerPaper: {
        width: '100%',
        //height: 120
    },
    rowPaper: {
        minHeight: 60
    },
    rowLoader: {
        height: 120,
    },
    answer: {
        margin: 'auto'
    },
    chip: {
        margin: theme.spacing.unit,
        width: '100%',
    },
    starIcon: {
        color: '#ffc107',
    }
});

class Help extends React.Component {

    state = {
        ligne: '',
        direction: '',
        station: '',

        answerLabel: 'Choisissez un tramway',
        answer: [],

        isLoading: false
    };

    handleChange = event => {
        let index = event.target.value
        let type = event.target.name
        if (type === 'ligne' && index !== this.state.ligne) {
            this.setState({
                [event.target.name]: index,
                direction: '',
                station: ''
            });
        } else {
            this.setState({
                [event.target.name]: index,
            });
        }
    };

    async searchSchedule () {
        let ligneCode = _database.data[this.state.ligne].code
        let directionCode = _database.data[this.state.ligne].directions[this.state.direction].code
        let stationCode = _database.data[this.state.ligne].stations[this.state.station].code

        let answerLabel = _database.data[this.state.ligne].label + ' | ' +
            _database.data[this.state.ligne].directions[this.state.direction].label + ' | ' +
            _database.data[this.state.ligne].stations[this.state.station].label

        this.setState({ isLoading: true })

        await _service.Traveler.startSession()
            .catch(error => {
                this.setState({
                    answerLabel: 'Erreur',
                    answer: ['Un problème est survenue']
                })
                console.log(error.message)
            })

        await _service.Schedule.get(ligneCode, directionCode, stationCode)
            .then(schedule => {
                if (schedule.length === 0) {
                    this.setState({
                        answerLabel: 'Horaires indisponibles',
                        answer: ["Ce service est terminé"]
                    })
                } else {
                    this.setState({
                        answerLabel: answerLabel,
                        answer: schedule
                    })
                }
            })
            .catch(error => {
                this.setState({
                    answerLabel: 'Erreur',
                    answer: ['Un problème est survenue']
                })
                console.log(error.message)
            })

        this.setState({ isLoading: false })

    }

    render() {
        const { classes } = this.props;
        const selectSizeXS = 10
        const selectSizeMD = 4

        const buttonSizeXS = 10
        const buttonSizeMD = 4

        const answerSizeXS = 10
        const answerSizeMD = 4

        return (
            <Grid container justify="center" className={ classes.mainContainer } >
                <Grid container justify="center" spacing={16} className={ classes.rowContainer }>
                    <Grid item xs={ selectSizeXS } md={ selectSizeMD } >
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="ligne-simple">Tramway</InputLabel>
                            <Select
                                value={this.state.ligne}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'ligne',
                                    id: 'ligne-simple',
                                }}
                            >
                                {_database.data.map((ligne, index) => (
                                    <MenuItem key={ligne.code} value={index}>{ligne.label}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={ selectSizeXS } md={ selectSizeMD } >
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="direction-simple">Direction</InputLabel>
                            <Select
                                value={this.state.direction}
                                onChange={this.handleChange}
                                disabled={this.state.ligne === ''}
                                inputProps={{
                                    name: 'direction',
                                    id: 'direction-simple',
                                }}
                            >
                                {this.state.ligne !== '' ? (
                                    _database.data[this.state.ligne].directions.map((direction, index) => (
                                        <MenuItem key={direction.code} value={index}>{direction.label}</MenuItem>
                                    ))
                                ) : (
                                    null
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={ selectSizeXS } md={ selectSizeMD } >
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="station-simple">Arrêt</InputLabel>
                            <Select
                                value={this.state.station}
                                onChange={this.handleChange}
                                disabled={this.state.direction === ''}
                                inputProps={{
                                    name: 'station',
                                    id: 'station-simple',
                                }}
                            >
                                {this.state.ligne !== '' ? (
                                    _database.data[this.state.ligne].stations.map((station, index) => (
                                        <MenuItem key={station.code} value={index}>
                                            {station.isFavorite ? (
                                                <Grid container alignItems='center' justify='space-between'>
                                                    {station.label}
                                                    <StarIcon className={ classes.starIcon }/>
                                                </Grid>
                                            ) : (
                                                station.label
                                            )}
                                        </MenuItem>
                                    ))
                                ) : (
                                    null
                                )}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container justify="center" className={ classes.rowContainer }>
                    <Grid item xs={ buttonSizeXS } md={ buttonSizeMD } >
                        <Button
                            fullWidth
                            color="secondary"
                            disabled={this.state.ligne === '' || this.state.direction === '' || this.state.station === ''}
                            onClick={this.searchSchedule.bind(this)}
                        >
                            Chercher
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify='center'>
                    <Grid item xs={ answerSizeXS } md={ answerSizeMD }>
                        { !this.state.isLoading ? (
                            <Paper className={classes.answerPaper} elevation={1}>
                                <Grid container justify='center' alignItems='center' className={classes.rowPaper}>
                                    <Typography variant="overline" component="h3">
                                        {this.state.answerLabel}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider/>
                                </Grid>
                                <Grid container justify='center' alignItems='center' className={classes.rowPaper}>
                                    { this.state.answer.map((schedule, index) =>
                                        <Grid key={index} container justify='center' alignItems='center'>
                                            <Chip
                                                color={schedule === 'proche' ? 'secondary' : 'primary'}
                                                label={
                                                    <Typography style={{color: 'white'}} variant="overline" component="h3">
                                                        {schedule}
                                                    </Typography>
                                                }
                                                className={classes.chip}
                                            />
                                        </Grid>
                                    )}
                                </Grid>
                            </Paper>
                        ) : (
                            <Paper className={classes.answerPaper} elevation={1}>
                                <Grid container justify='center' alignItems='center' className={classes.rowLoader}>
                                    <Loader/>
                                </Grid>
                            </Paper>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

Help.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Help);