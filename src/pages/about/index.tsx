import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import {NextPage} from "next";

const AboutPage: NextPage = () => {
    const { showCart, hideCart } = useShoppingCart();

    useEffect(() => {
        showCart();
        return () => hideCart(); // Hide the cart when the component unmounts
    }, [showCart, hideCart]);

    return (
        <Container>
            <Typography variant="h2" gutterBottom>About Us</Typography>
            <Typography paragraph>
                Here you can add information about your company, mission, and values.
            </Typography>
            {/* More content goes here */}
        </Container>
    );
}
export default AboutPage