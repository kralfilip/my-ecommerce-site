// HomePage.js or HomePage.tsx
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import type { NextPage } from 'next';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import {useEffect} from "react";


const StyledRoot = styled('div')(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(4),
}));

const HomePage: NextPage = ({ products }) => {

    return (
        <StyledRoot>
            <StyledTitle variant="h3" component="h1">
                Featured Products
            </StyledTitle>
            <Grid container spacing={4} justifyContent="center">
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </StyledRoot>
    );
};

export default HomePage;

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/products.json`);
    const products = await res.json();

    return {
        props: {
            products,
        },
    };
}
