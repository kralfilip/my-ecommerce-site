import {styled} from '@mui/material/styles';
import {Drawer} from "@mui/material";

export const StyledDrawer = styled(Drawer)({
        '& .MuiDrawer-modal': {
            width: 'auto',
            height: 'auto',
            top: 0,
            right: 0,
            bottom: 0,
            left: 'auto',

            '& [data-testid="sentinelStart"], & [data-testid="sentinelEnd"]': {
                display: 'none',
            },
        },

        '& .MuiDrawer-paper': {
            top: '64px',
            bottom: '50px',
            width: '30%',
            maxWidth: '400px',
            padding: '2rem',
            backgroundColor: '#ffffff', // White background for a clean look
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', // Adds subtle shadow for depth
            borderLeft: '5px solid #5c6bc0', // A colored border for a modern touch
            overflow: 'auto', // In case of scrolling

            // Typography and color
            color: '#333', // Darker text for better readability
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: '1rem',

            // For headings inside the drawer
            '& h2': {
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#3f51b5', // Use a primary color for headings
            },

            // Styling for the container of the cart items
            '& .cart-items-container': {
                display: 'flex',
                flexDirection: 'column', // Ensures items are listed top-to-bottom
                alignItems: 'stretch', // Align items to stretch full width of the container
                gap: '1rem', // Spacing between each cart item
            },

            // Styling for individual cart items
            '& .cart-item': {
                borderBottom: '1px solid #eee',
                paddingBottom: '1rem',
                marginBottom: '1rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

                '& .item-details': {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '1rem', // Space between elements in item

                    '& img': {
                        width: '75px', // Adjust as needed
                        height: '75px', // Adjust as needed
                        objectFit: 'cover',
                    },

                    '& .item-name': {
                        // Styles for the product name
                    },

                    '& .quantity-controls': {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.5rem',

                        '& button': {
                            // Styles for + and - buttons
                            backgroundColor: '#3f51b5',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '0.5rem',
                            cursor: 'pointer',

                            '&:hover': {
                                backgroundColor: '#303f9f',
                            },
                        },

                        '& .quantity': {
                            // Styles for displaying quantity
                        },
                    },
                },
            },

            // Styling for the total price display
            '& p:last-child': {
                fontWeight: 'bold',
                textAlign: 'right',
                color: '#3f51b5',
            },
        },
    }
);
