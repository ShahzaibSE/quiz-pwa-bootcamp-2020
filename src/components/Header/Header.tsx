import React from 'react'
import {Grid} from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import {HelpOutlined} from "@material-ui/icons";
//Assets.
import {headerStyles} from "./Header.style"
import crown_image from "./../images/crown.png"

const Header = () => {
    const classes = headerStyles()
    return (
        <Grid container>
            <Grid item xs={12} md={12} lg={12}>
                <div>
                    <AppBar position="fixed" className={classes.app_bar_container}>
                        <Toolbar style={{margin:"auto"}}> 
                        <IconButton className={classes.help_btn} disabled={true}>
                              <HelpOutlined className={classes.help_icon} />
                            </IconButton>  
                        <Typography variant="h5" className={classes.title}>
                            The Trivia
                        </Typography>
                        <IconButton className={classes.help_btn} disabled={true}>
                              <HelpOutlined className={classes.help_icon}/>
                            </IconButton> 
                        </Toolbar>
                    </AppBar>
                </div>
            </Grid>
        </Grid>
    )
}

export default Header
