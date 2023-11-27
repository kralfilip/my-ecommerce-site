// ProductCard.tsx
import {styled} from '@mui/material/styles';
import {Card, CardActionArea, CardMedia, CardContent, Typography, Button} from '@mui/material';
import Link from 'next/link';
import {useShoppingCart} from '@/context/ShoppingCartContext';
import QuantityControl from "@/components/QuantityControl";


const StyledCard = styled(Card)(({theme}) => ({
    height: 325,
    maxWidth: 345,
    transition: 'transform 0.15s ease-in-out',
    '&:hover': {
        transform: 'scale3d(1.05, 1.05, 1)'
    },
}));

const StyledMedia = styled(CardMedia)({
    height: 200,
});

const CardContentContainer = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '7px', // Adjust the padding as needed
});

const ProductCard = ({product}) => {
    const {addToCart, cartItems} = useShoppingCart();

    const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);

    const handleAddToCartClick = (e) => {
        e.stopPropagation(); // Prevent the click from propagating to parent elements
        addToCart(product);
    };
    return (
        <StyledCard>
            <CardActionArea>
                <Link href={`/products/${product.id}`} passHref>
                    <StyledMedia
                        image={product.imageUrl}
                        title={product.title}
                    />
                </Link>
                <CardContentContainer>
                    <Link href={`/products/${product.id}`} passHref>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.title}
                        </Typography>
                    </Link>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ${product.price.toFixed(2)}
                    </Typography>
                </CardContentContainer>
            </CardActionArea>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {cartItem ? (
                    <QuantityControl item={cartItem}/>
                ) : (

                    <Button onClick={(e) => addToCart(product)}>
                        Add to Cart
                    </Button>
                )}
            </div>

        </StyledCard>
    );
}


export default ProductCard;
