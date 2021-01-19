import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

const App = () => {
    return (
        <Container maxWidth ='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Dreams</Typography>
                <img src="https://img1.picmix.com/output/stamp/normal/2/8/7/0/760782_52476.png" alt='dreams' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
