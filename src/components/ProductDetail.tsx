import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import PriceHistoryTable from './PriceHistoryTable';
import {StyledMedia, StyledCardContent, StyledCard} from './../styles/styles'


type Product = {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    description: string;
    monthlyPriceChanges: { month: string, price: number }[]
};

type ProductDetailProps = {
    product: Product;
};



const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
    return (
        <StyledCard>
            <StyledMedia
                image={product.imageUrl}
                title={product.title}
            />
            <StyledCardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" sx={{ marginBottom: 2 }}>
                    {product.description}
                </Typography>
                <Typography variant="h6">
                    ${product.price.toFixed(2)}
                </Typography>
                {product.monthlyPriceChanges && <PriceHistoryTable monthlyPriceChanges={product.monthlyPriceChanges} />}
            </StyledCardContent>
        </StyledCard>
    );
};

export default ProductDetail;
