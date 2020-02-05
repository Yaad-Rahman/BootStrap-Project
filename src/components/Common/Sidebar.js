import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {List, ListItem,ListItemIcon, ListItemText} from '@material-ui/core';

import FaceIcon from '@material-ui/icons/Face';
import DashBoardIcon from '@material-ui/icons/Dashboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';


function ListItemLink (props) {
    return <ListItem button component ={RouterLink}  {...props} />;
}


class Sidebar extends React.Component {
    render() {
        return (
            <List>
                <ListItemLink to= "/admin" >
                        <ListItemIcon>
                        <DashBoardIcon />
                        </ListItemIcon>
                        <ListItemText primary= "Dashboard" />
                </ListItemLink>

                <ListItemLink to= "/admin/posts">
                        <ListItemIcon>
                        <FileCopyIcon />
                        </ListItemIcon>
                        <ListItemText primary= "Posts" />

                </ListItemLink>
                <ListItemLink to= "/admin/users">
                        <ListItemIcon>
                        <FaceIcon />
                        </ListItemIcon>
                        <ListItemText primary= "Users" />

                </ListItemLink>

            </List>
        )
    }
}

export default Sidebar;