import React from 'react';
import { Container, Box, Button } from './StyleIndex'
import { Link } from 'react-router-dom';

function Index() {
    return (
        <Container>
            <Box>
                Savollarga javob berishga tayyormisiz 
                unda boshlashni bosing!
            </Box>
            
            <Link to='/quiz'>
                <Button>START</Button>
            </Link>
        </Container>
    )
}

export default Index
