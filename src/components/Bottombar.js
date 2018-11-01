import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import PanToolIcon from '@material-ui/icons/PanTool';
import customHistory from '../helper/History'

const styles = {
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f4f0ed'
    },
};

class LabelBottomNavigation extends React.Component {
    state = {
        value: 'recents',
    };

    handleChange = (event, value) => {
        this.setState({ value });
        customHistory.push(value)
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
                <BottomNavigationAction label="Accueil" value="/accueil" icon={<HomeIcon />} />
                <BottomNavigationAction label="Aide" value="/help" icon={<HelpIcon />} />
                <BottomNavigationAction label="Politique" value="/politique" icon={<PanToolIcon/>} />
            </BottomNavigation>
        );
    }
}

LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);