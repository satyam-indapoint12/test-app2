

import { Container, Grid } from '@mui/material';
import * as React from 'react';
import CardView from '../../common/cards';


const Home = ({
    products
}) => {
    return <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
            {products.map(({ title, description, image }) => <CardView title={title} description={description} image={image} />)}
        </Grid>
    </Container>
}

export default Home;
