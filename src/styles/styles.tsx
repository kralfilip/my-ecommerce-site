import {styled} from '@mui/material/styles';
import {Card, CardMedia, CardContent} from "@mui/material";
import TextField from '@mui/material/TextField';


export const CustomNumberInput = styled(TextField)({
    // Your styles here
    '& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
    },

    '& input[type=number]': {
        'text-align': 'center',
        appearance: 'textfield',
    },
});

export const StyledCard = styled(Card)({
    display: 'flex',
    flexDirection: 'column', // Stacking elements vertically
    alignItems: 'center',
    margin: '20px auto', // Centering the card
    maxWidth: '600px', // Maximum width of the card
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
    width: '100%', // Full width, up to the max width
});


export const StyledMedia = styled(CardMedia)({
    width: '100%',
    height: '500px' // Adjust the height as necessary
});

export const StyledCardContent = styled(CardContent)({
    width: '100%'
});