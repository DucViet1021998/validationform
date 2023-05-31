'use client';

import Image from 'next/image';
import Form from '../Components/Form';
import { Grid } from '@mui/material';

export default function Home() {
    return (
        <main>
            <Grid
                style={{ height: '100vh' }}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Image width="218" height="78" src="/Logo.png" alt="logo" />
                </Grid>
                <Grid
                    style={{
                        backgroundColor: 'rgba(255,255,255, 0.7)',
                        borderRadius: '10px',
                        padding: '10px 100px 50px 100px',
                    }}
                    item
                >
                    <Form />
                </Grid>
            </Grid>
        </main>
    );
}
