'use client';

import React from 'react';
import { Box, Button, TextField, InputAdornment, Grid } from '@mui/material';
import { Person, LockOpen, VpnKey, Mail, Phone } from '@mui/icons-material';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = {
    userName: string;
    phone: string | number;
    email: string;
    password: string;
    confirmPassword: string;
};

export default function Form() {
    const schema: ZodType<FormData> = z
        .object({
            userName: z
                .string()
                .nonempty({
                    message: 'Vui lòng nhập Username!',
                })
                .min(5)
                .regex(new RegExp('^[a-zA-Z0-9.]*$'), 'Không nhập ký tự đặc biệt'),
            phone: z
                .string()
                .nonempty({
                    message: 'Vui lòng nhập số điện thoại!',
                })
                .min(10, { message: 'Số điện thoại có ít nhất mười số' })
                // .length(10, { message: 'Ten numbers are required!' })
                .regex(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, {
                    message: 'Số điện thoại của bạn không đúng định dạng',
                }),
            email: z
                .string()
                .nonempty({
                    message: 'Vui lòng nhập số điện thoại!',
                })
                .email({ message: 'Không đúng dạng địa chỉ email' }),
            password: z
                .string()
                .nonempty({
                    message: 'Vui lòng nhập mật khẩu!',
                })
                .min(8),
            confirmPassword: z
                .string()
                .nonempty({
                    message: 'Vui lòng xác nhận lại mật khẩu!',
                })
                .min(8),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: 'Mật khẩu không trùng khớp!',
            path: ['confirmPassword'],
        });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const submitData = (data: FormData) => {
        // alert('Bật F12 để xem value trong console anh nhé!');
        console.log(data);
    };

    return (
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(submitData)}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid xs={12} item>
                    <TextField
                        label="Username"
                        fullWidth
                        required
                        margin="normal"
                        {...register('userName')}
                        helperText={errors['userName'] ? errors['userName'].message : ''}
                        error={!!errors['userName']}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Person />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        required
                        type="email"
                        {...register('email')}
                        error={!!errors['email']}
                        helperText={errors['email'] ? errors['email'].message : ''}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Mail />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid xs={12} item>
                    <TextField
                        label="Phone"
                        fullWidth
                        required
                        margin="normal"
                        {...register('phone')}
                        error={!!errors['phone']}
                        helperText={errors['phone'] ? errors['phone'].message : ''}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Phone />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid xs={12} item>
                    <TextField
                        label="Password"
                        fullWidth
                        required
                        margin="normal"
                        type="password"
                        error={!!errors['password']}
                        {...register('password')}
                        helperText={errors['password'] ? errors['password'].message : ''}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOpen />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid xs={12} item>
                    <TextField
                        label="Confirm Password"
                        fullWidth
                        required
                        margin="normal"
                        type="password"
                        {...register('confirmPassword')}
                        error={!!errors['confirmPassword']}
                        helperText={
                            errors['confirmPassword'] ? errors['confirmPassword'].message : ''
                        }
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VpnKey />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid xs={12} item>
                    <Button size="large" type="submit" variant="contained">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
