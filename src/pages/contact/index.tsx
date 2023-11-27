import { Container, Typography } from '@mui/material';
import {NextPage} from "next";
import {useShoppingCart} from "@/context/ShoppingCartContext";
import {useEffect} from "react";

const ContactsPage: NextPage = () => {
    const { showCart, hideCart } = useShoppingCart();

    useEffect(() => {
        showCart();
        return () => hideCart(); // Hide the cart when the component unmounts
    }, [showCart, hideCart]);
    return (
        <Container>
            <Typography variant="h2" gutterBottom>Contact</Typography>
            <Typography paragraph>
                Here you can add information how to contact your company.
            </Typography>
            {/* More content goes here */}
        </Container>
    );
}