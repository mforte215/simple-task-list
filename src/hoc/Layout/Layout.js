import React, { Component } from 'react';

import Clipboard from '../../assets/images/clipboard.jpg';
import ToDoList from '../../components/ToDoList/ToDoList';
import classes from './Layout.module.css';

class Layout extends Component {

    render() {

        return (
                <div className={classes.Content} style={{
                    backgroundImage: `url(${Clipboard})`
                }}>
                    <ToDoList />
                </div>
           
        );
    }
}

export default Layout;