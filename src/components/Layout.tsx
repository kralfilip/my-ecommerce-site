import {AppBar, Button, Toolbar, Typography, styled} from "@mui/material";
import Link from "next/link";
import ShoppingCart from "./ShoppingCart"; // Adjust path as needed
import { useShoppingCart } from '@/context/ShoppingCartContext';



const StyledAppBar = styled(AppBar)({
    backgroundColor: '#606060', // Medium gray for AppBar
    color: 'white', // White color for text for better readability
    position: 'fixed',
    zIndex: 1300,
});

const Footer = styled('footer')({
    backgroundColor: '#606060', // Matching the AppBar color
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
});

const Content = styled('div')({
    paddingTop: 64, // Height of the AppBar
    flexGrow: 1, // Allows the content to grow and fill the space
});

const MainContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Full viewport height
    backgroundColor: '#404040',
});

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    const { isCartVisible, toggleCart} = useShoppingCart();


    console.log("Is Cart Visible in Layout:", isCartVisible);
    return (
        <MainContainer>
            <StyledAppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Link href="/">My E-commerce Site</Link>
                    </Typography>
                    <Button type="button" color="inherit" onClick={toggleCart}
                    >Cart</Button>
                    <Button color="inherit" component={Link} href="/about">About</Button>
                    <Button color="inherit" component={Link} href="/contact">Contact</Button>
                    <Button color="inherit" component={Link} href="/faq">FAQ</Button>
                    {/* Other navigation buttons */}
                </Toolbar>
            </StyledAppBar>

            <Content>
                {children}
                <ShoppingCart/>
            </Content>

            <Footer>
                &copy; {new Date().getFullYear()} My E-commerce Site. All rights reserved.
            </Footer>
        </MainContainer>
    )
}

export default Layout;
