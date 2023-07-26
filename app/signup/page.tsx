'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_BASE_URL } from '@/constants';
import toast from 'react-hot-toast';

type FormValuesType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agreed: string;
};

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputBase,
  Typography,
} from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';

const Page = ({ params }: any) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        backgroundColor: '#fff',
        height: '100dvh',
        width: '100dwh',
        padding: 2,
      }}
    >
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          agreed: false,
        }}
        validate={(values) => {
          const errors: Partial<FormValuesType> = {};
          if (!values.firstName) {
            errors.firstName = 'First Name is required';
          }
          if (!values.lastName) {
            errors.lastName = 'Last Name is required';
          }
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'Password is required';
          }
          if (!values.agreed) {
            errors.agreed = 'You must agree to the Terms of Service and Privacy Policy';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await axios.post('api/user/signup', values);
            router.push('/signin');
            toast.success('Successfully Signed Up');
          } catch (err: any) {
            toast.error('Error in connection');
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box
              sx={{
                p: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: 2,
                paddingTop: 8,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  gap: 1,
                  paddingX: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  Sign Up
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Typography sx={{ color: '#523FAD', p: 0.5 }}>First Name</Typography>
                  <Field
                    as={InputBase}
                    sx={{
                      backgroundColor: '#EEECF9',
                      borderRadius: '15px',
                      width: '20rem',
                      paddingLeft: 4,
                      paddingY: 0.5,
                    }}
                    name="firstName"
                    required
                    placeholder="First Name"
                  />
                  <ErrorMessage name="firstName" component="div"   />
                </Box>
                <Box>
                  <Typography sx={{ color: '#523FAD', p: 0.5 }}>Last Name</Typography>
                  <Field
                    as={InputBase}
                    sx={{
                      backgroundColor: '#EEECF9',
                      borderRadius: '15px',
                      width: '20rem',
                      paddingLeft: 4,
                      paddingY: 0.5,
                    }}
                    name="lastName"
                    required
                    placeholder="Last Name"
                  />
                  <ErrorMessage name="lastName" component="div"   />
                </Box>
                <Box>
                  <Typography sx={{ color: '#523FAD', p: 0.5 }}>Email</Typography>
                  <Field
                    as={InputBase}
                    type="email"
                    sx={{
                      backgroundColor: '#EEECF9',
                      borderRadius: '15px',
                      width: '20rem',
                      paddingLeft: 4,
                      paddingY: 0.5,
                    }}
                    name="email"
                    required
                    placeholder="example@emai.com"
                  />
                  <ErrorMessage name="email" component="div"   />
                </Box>
                <Box>
                  <Typography sx={{ color: '#523FAD', p: 0.5 }}>Password</Typography>
                  <Field
                    as={InputBase}
                    type="password"
                    sx={{
                      backgroundColor: '#EEECF9',
                      borderRadius: '15px',
                      width: '20rem',
                      paddingLeft: 4,
                      paddingY: 0.5,
                      marginTop: 1,
                    }}
                    name="password"
                    required
                    placeholder="*******"
                  />
                  <ErrorMessage name="password" component="div"   />
                </Box>
              </Box>

              <Box sx={{ display: 'flex', width: '17rem', fontSize: '13px' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Field type="checkbox" name="agreed" />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '13px' }}>
                    I agree to the{' '}
                    <a href="" style={{ color: '#523FAD' }}>
                      Term of Services
                    </a>{' '}
                    and{' '}
                    <a href="" style={{ color: '#523FAD' }}>
                      Privacy Policy
                    </a>
                    .
                  </Typography>
                  <ErrorMessage name="agreed" component="div"   />
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <Button
                  sx={{
                    backgroundColor: '#523FAD !important',
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    width: '14rem',
                  }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                {' '}
                <Typography>
                  Have an account
                  <button
                    style={{ color: '#523FAD', marginLeft: 4 }}
                    onClick={() => router.push('/signin')}
                  >
                    Sign In
                  </button>
                </Typography>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Page;
