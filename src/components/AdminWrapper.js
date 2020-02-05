import React from 'react';
import "./assets/css/admin.css";
import {withStyles} from '@material-ui/core/styles';
import {Toolbar, Typography} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import classNames from 'classnames';


//Drawer
import { IconButton, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import Sidebar from './Common/Sidebar';

const drawerWidth= 240;

const styles = theme => ({
    root: {
        display: 'flex'
    },

    toolbar: {
        paddingRight: 24
    },

    

    appBar: {
        zIndex: theme.zIndex.drawer +1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
          
    },

    appBarSpacer: theme.mixins.toolbar,

    drawerPaper: {
        position: 'relative',
        whiteSpace: 'noWrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },

    drawerPaperClose: {
        overflowX: 'hidden',
        width: theme.spacing.unit * 7,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },

    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar

    },

    content: {
        flexGrow: 1,
        padding: theme.spacing.units * 3,
        height: '100vh',
        overflow: 'auto'
    }
})

class AdminWrapper extends React.Component{
    
    state={
        open: true
    }

    handleDrawerOpen = (e) => {
        this.setState({open: true});
    }

    handleDrawerClose = (e) => {
        this.setState({open: false});
    }


    render() {
        const {classes} = this.props;
        return(
            <div id="admin-page" className={classes.root}>
                <AppBar className={(this.state.open) ? classes.appBarShift: classes.appBar }>
                    <Toolbar className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        >Admin</Typography>

                    </Toolbar>
                </AppBar>
                <Drawer
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
                    }}
                    variant="permanent"
                    open={true}
                    >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <Sidebar />
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        {this.props.children}
                    </main>
            </div>
        )
    }
}

export default withStyles(styles)(AdminWrapper);