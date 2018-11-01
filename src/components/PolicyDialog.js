import React from 'react';
import customHistory from '../helper/History'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class PolicyDialog extends React.Component {
    state = {
        open: false,
        scroll: 'paper',
    };

    componentDidMount () {
        this.setState({ open: true });
    }

    handleClose = () => {
        this.setState({ open: false });
        customHistory.push('/accueil')
    };

    render() {
        return (
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                scroll={this.state.scroll}
                aria-labelledby="scroll-dialog-title"
            >
                <DialogTitle id="scroll-dialog-title">Politique de confidentialité</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Je soussigné Monsieur Pluche, étudiant au sein de l’école d’ingénieur de Polytech Montpellier FRANCE,
                        étant à ce titre amené à accéder à des données à caractère personnel, déclare reconnaître la confidentialité desdites données.

                        <br/><br/>Je m’engage par conséquent, conformément aux articles 34 et 35 de la loi du 6 janvier 1978 modifiée relative à l’informatique, aux fichiers et aux libertés ainsi qu’aux articles 32 à 35 du règlement général sur la protection des données du 27 avril 2016, à prendre toutes précautions conformes aux usages et à l’état de l’art dans le cadre de mes attributions afin de protéger la confidentialité des informations auxquelles j’ai accès, et en particulier d’empêcher qu’elles ne soient communiquées à des personnes non expressément autorisées à recevoir ces informations.

                        <br/><br/>Je m’engage en particulier à :
                        <br/>- ne pas utiliser les données auxquelles je peux accéder à des fins autres que celles prévues s attributions
                        <br/>- ne divulguer ces données qu’aux personnes dûment autorisées, en raison de leurs fonctions, à en recevoir communication, qu’il s’agisse de personnes privées, publiques, physiques ou morales.
                        <br/>- prendre toutes précautions conformes aux usages et à l’état de l’art pour préserver la sécurité physique et logique de ces données.
                        <br/>- m’assurer, dans la limite de mes attributions, que seuls des moyens de communication sécurisés seront utilisés pour transférer ces données.
                        <br/>- en cas de cessation de mes fonction, intégralement les données, fichiers informatiques et tout support d’information relatif à ces données.

                        <br/><br/>Ces engagement de confidentialité, en vigueur pendant toute la durée de mes fonctions, demeures effectif, sans limitation de durée après la cessation de mes fonctions, qu’elle qu’en soit la cause, dès lors que cet engagement concerne l’utilisation et la communication de données à caractère personnel.
                        J’ai été informé que toute violation du présent engagement m’expose à des sanctions disciplinaires et pénales conformément à la réglementation en vigueur, notamment au regard des articles 226-16 à 226-24 du code pénal.

                        <br/><br/>Fait à Montpellier, en 1 exemplaire.

                        <br/><br/>PLUCHE C.

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        J'ai lu et compris
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default PolicyDialog;
