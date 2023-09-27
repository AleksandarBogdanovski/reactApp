import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function Home() {
    const functionOptions = [
        { number: 1, label: 'Прикачи нова серија на веб страна.', path: 'flow1stepform' },
        { number: 2, label: 'Маркирај еден индивидуален модел од серија како продаден.', path: 'flow2step1' },
        { number: 3, label: 'Прочитај информации од веб страната за еден индивидуален модел од серија.', path: 'flow3step1' },
    ];

    return (
        <div>
            <div>
                <Stack style={{ padding: '40px' }}>
                    <Typography variant="h5" textAlign="center" marginBottom="60px">
                        Resident | Milano | Madam
                    </Typography>
                    <Typography variant="body1" marginBottom="10px">
                        Одбери Функција:
                    </Typography>
                    <Grid container spacing={2}>
                        {functionOptions.map((func) => (
                            <Grid item xs={12} key={func.number}>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <IconButton>
                                        {func.number}
                                    </IconButton>
                                    <Link to={func.path} style={{ textDecoration: 'none' }}>
                                        <Button variant='contained' size='small' style={{ textTransform: 'none', textDecoration: 'none', width: '100%', display: 'flex', justifyContent: 'flex-start', textAlign: 'left', whiteSpace: 'normal' }}>
                                            {func.label}
                                        </Button>
                                    </Link>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </div>
            <Outlet />
        </div>
    );
}
export default Home;