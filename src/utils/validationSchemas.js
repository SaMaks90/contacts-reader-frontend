import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    password: Yup.string().min(6, 'Password short. Minimum 5 symbol').required('Password is required.'),
    email: Yup.string().email('Invalid email').required('Email is required.'),
});

export const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Name short. Minimum 3 symbol').required('Field name is required.'),
    email: Yup.string().email('Invalid email').required('Field email is required.'),
    password: Yup.string().min(6, 'Password short. Minimum 5 symbol').required('Field password is required.'),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    subscription: Yup.string().oneOf(['starter', 'pro', 'business'])
});