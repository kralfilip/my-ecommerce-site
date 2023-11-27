import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {useShoppingCart} from "@/context/ShoppingCartContext";
import {CustomNumberInput} from "@/styles/styles";


const QuantityControl = ({item}) => {
    const {removeFromCart, addToCart} = useShoppingCart();

    return (
        <ButtonGroup size="small" sx={{ marginRight: 2 }}>
            <IconButton onClick={() => removeFromCart(item)}>
                <RemoveIcon />
            </IconButton>
            <CustomNumberInput
                size="small"
                value={item.quantity}
                type="number"
                inputProps={{ min: 1 }} // Add style to disable spinners
                sx={{ width: '60px' }}
            />
            <IconButton onClick={() => addToCart(item)}>
                <AddIcon />
            </IconButton>
        </ButtonGroup>
    );
};

export default QuantityControl;
