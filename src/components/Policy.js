import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid/Grid";

const styles = {
    root: {
        flexGrow: 1,
    },
    spaceJump: {
        marginBottom: 20
    }
};

function Policy (props) {
    const { classes } = props;

    return (
        <Grid justify="center" container>
            <Grid xs={6} item>
                <Typography align="left" variant="body1" color="secondary" className={ classes.spaceJump }>
                    Je soussigné Monsieur Pluche, étudiant au sein de l’école d’ingénieur de Polytech Montpellier FRANCE, étant à ce titre amené à accéder à des données à caractère personnel, déclare reconnaître la confidentialité desdites données.
                </Typography>
                <Typography align="left" variant="body1" color="secondary" className={ classes.spaceJump }>
                    Je m’engage par conséquent, conformément aux articles 34 et 35 de la loi du 6 janvier 1978 modifiée relative à l’informatique, aux fichiers et aux libertés ainsi qu’aux articles 32 à 35 du règlement général sur la protection des données du 27 avril 2016, à prendre toutes précautions conformes aux usages et à l’état de l’art dans le cadre de mes attributions afin de protéger la confidentialité des informations auxquelles j’ai accès, et en particulier d’empêcher qu’elles ne soient communiquées à des personnes non expressément autorisées à recevoir ces informations.
                </Typography>
                <Typography align="left" variant="body1" color="secondary" className={ classes.spaceJump }>
                    Je m’engage en particulier à :
                    <br/>ne pas utiliser les données auxquelles je peux accéder à des fins autres que celles prévues s attributions
                    <br/>ne divulguer ces données qu’aux personnes dûment autorisées, en raison de leurs fonctions, à en recevoir communication, qu’il s’agisse de personnes privées, publiques, physiques ou morales.
                    <br/>prendre toutes précautions conformes aux usages et à l’état de l’art pour préserver la sécurité physique et logique de ces données.
                    <br/>m’assurer, dans la limite de mes attributions, que seuls des moyens de communication sécurisés seront utilisés pour transférer ces données.
                    <br/>en cas de cessation de mes fonction, intégralement les données, fichiers informatiques et tout support d’information relatif à ces données.
                </Typography>
                <Typography align="left" variant="body1" color="secondary" className={ classes.spaceJump }>
                    Ces engagement de confidentialité, en vigueur pendant toute la durée de mes fonctions, demeures effectif, sans limitation de durée après la cessation de mes fonctions, qu’elle qu’en soit la cause, dès lors que cet engagement concerne l’utilisation et la communication de données à caractère personnel.

                </Typography>
            </Grid>
        </Grid>
    );
}

Policy.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Policy);