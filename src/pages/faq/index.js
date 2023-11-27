import { Container, Typography } from '@mui/material';

export default function Index() {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>FAQ</Typography>
            <Typography paragraph>
                Here you can add frequently asked questions.
            </Typography>
            {/* More content goes here */}
        </Container>
    );
}