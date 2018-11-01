import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid/Grid";

const styles = theme => ({
    root: {
        width: '100%',
        height: '70%'
    },
    bodyBackground: {
        backgroundColor: '#f4f0ed'
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
        backgroundColor: '#f4f0ed'
    },
    marginBottom: {
        marginBottom: 10
    },
    marginBottomXl: {
        marginBottom: 20
    }
});

function getSteps() {
    return ["Démarrer l'application", "Demandez le tramway de votre choix", "Recevez votre horaire en temps réel"];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `Prononcez les mots clés "Trametro Montpellier" pour démarrer l'application.`;
        case 1:
            return 'Demandez une ligne, une direction et un arrêt de tramway.';
        case 2:
            return `Redemandez autant d'horaires de tramways que vous le souhaitez !`;
        default:
            return 'Unknown step';
    }
}

function getExempleContent(step) {
    switch (step) {
        case 0:
            return `Vous :  " Alexa, ouvre Trametro Montpellier. "`;
        case 1:
            return 'Vous :  " Alexa, donne moi le tramway ligne 1, direction Odysseum, arrêt comédie. "';
        case 2:
            return `Alexa :  " Le tramway arrive dans 5 minutes. "`;
        default:
            return 'Unknown step';
    }
}

class Home extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <Grid className={classes.root} justify={'center'} alignItems={'center'} container>
                <Grid item xs={7}>
                    <Stepper activeStep={activeStep} orientation="vertical" className={ classes.bodyBackground }>
                        {steps.map((label, index) => {
                            return (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        <Typography className={ classes.marginBottom } >{getStepContent(index)}</Typography>
                                        <Typography className={ classes.marginBottomXl } color={'secondary'}>{getExempleContent(index)}</Typography>
                                        <div className={classes.actionsContainer}>
                                            <div>
                                                <Button
                                                    disabled={activeStep === 0}
                                                    onClick={this.handleBack}
                                                    className={classes.button}
                                                >
                                                    retour
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={this.handleNext}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Compris !' : 'Ok'}
                                                </Button>
                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>Qu'est ce que vous attendez pour essayer ? <br/>Télécharger Trametro Montpellier dès maintenant.</Typography>
                            <Button onClick={this.handleReset} className={classes.button}>
                                Revoir les étapes
                            </Button>
                        </Paper>
                    )}
                </Grid>
            </Grid>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(Home);