import React from 'react';
import { IShoppingCartProps, ICartItem } from '../../utils/types';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import {StyledDrawer} from '@/styles/cartStyles'
import {CardMedia} from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import QuantityControl from "@/components/QuantityControl";

const ShoppingCart: React.FC<IShoppingCartProps> = () => {
    const { cartItems, removeAllFromCart, hideCart, isCartVisible } = useShoppingCart();



    const renderCartItems = (): JSX.Element[] => {
        if (cartItems.length === 0) {
            return ([
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
                I am so empty :'( please fill me.
            </Typography>
            ])
        }
        return cartItems.map((item: ICartItem) => (
            <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 50, height: 50, marginRight: 2 }}
                    image={item.imageUrl}
                    alt={item.title}
                />
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                    {item.title}
                </Typography>
                <QuantityControl item={item}/>
                <IconButton
                    onClick={() => removeAllFromCart(item)}
                    aria-label="remove item"
                    sx={{
                        color: 'rgba(0, 0, 0, 0.54)',
                        '&:hover': {
                            color: '#ef5350',
                            backgroundColor: 'rgba(239, 83, 80, 0.04)',
                        },
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </Box>
        ));
    };


    const calculateTotal = (): number => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <StyledDrawer anchor="right" open={isCartVisible} onClose={hideCart}>
            <div>
                <h2>Shopping Cart</h2>
                {renderCartItems()}
                <p>Total: ${calculateTotal().toFixed(2)}</p>
            </div>
        </StyledDrawer>
    );
};

export default ShoppingCart;
