import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

const NavBar = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    
    const logout = () => {
        dispatch({ type: 'LOGOUT' })

        history.push('/')

        setUser(null)
    }

    useEffect(() => {
        const token = user?.token

        //JWT...

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} variant='h2' align='center'>Dreams</Typography>
                <img className={classes.image} src="https://www.khwiki.com/images/d/da/Castle_of_Dreams_KHBBS.png" alt='dreams' height='60' />
            </div>
            <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} >
                    {user.result.name.charAt(0)}
                    </Avatar>
                    <Typography className={classes.userName} variant='h6'>
                        {user.result.name}
                    </Typography>
                    <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>
                        Logout
                    </Button>
                </div>
            ) : (
                <Button component={Link} to ='/auth' variant='contained' color='primary'>Sign In</Button>
            )}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar