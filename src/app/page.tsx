'use client';

import Image from 'next/image';
import Form from './components/Form';
import { Grid } from '@mui/material';

export default function Home() {
    return (
        <main>
            <Grid
                style={{ height: '100vh' }}
                container
                direction="column"
                // spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <img width="218" height="78" src="https://i.imgur.com/WbxNsdl.png" alt="logo" />
                </Grid>
                <Grid
                    style={{
                        backgroundColor: 'rgba(255,255,255, 0.4)',
                        borderRadius: '10px',
                        padding: '10px 100px 50px 100px',
                    }}
                    item
                    // xs={6}
                >
                    <Form />
                </Grid>
            </Grid>
        </main>
    );
}
