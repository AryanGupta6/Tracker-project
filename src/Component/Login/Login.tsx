import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Tracker from '../../assests/images/Icon.png';
import SideImg from '../../assests/images/sideImg.png';
import Language from '../Language/Language';
import { authActions } from '../../Store/authSlice';
import classes from './Login.module.css';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const Login = () => {
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password is too short - should be 4 chars minimum')
  });

  const initialValues = {
    email: '',
    password: ''
  };

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailHandler = (event: any) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event: any) => {
    setPassword(event.target.value);
  };

  if (localStorage.getItem('isAuth') === 'true') {
    window.location.href = '/dashboard';
  }
  return (
    <div className={classes.login}>
      <div className={classes.sidebar}>
        <img src={Tracker} className={classes.tracker} alt="" />
        <img src={SideImg} className={classes.tracker} alt="" />
        <Language flag={true} />
      </div>
      <div className={classes.login_section}>
        <Formik
          initialValues={initialValues}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            axios
              .post('https://hu-22-angular-mockapi-urtjok3rza-wl.a.run.app/auth/login', values)
              .then((response: any) => {
                console.log(response);
                localStorage.setItem('userId', response.data['userId']);
                window.location.href = '/dashboard';
                dispatch(authActions.login());
              })
              .catch((error: any) => {
                console.log(error.response.data['error']);
                navigate('/');
              });
          }}>
          {(formik) => {
            const { errors, touched, isValid, dirty } = formik;
            return (
              <div className="container">
                <h1 className="mb-5">{t('LOGIN')}</h1>
                <Form>
                  <div className="form-row mb-3">
                    <label htmlFor="email">{t('Email')}</label>
                    <br />
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder={t('Enter your email address')}
                      className={
                        errors.email && touched.email
                          ? `input-error && ${classes['input-container-login']}`
                          : `${classes['input-container-login']}`
                      }
                    />
                    <br />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className={`error ${classes['error-custom']}`}
                    />
                  </div>

                  <div className="form-row mb-5">
                    <label htmlFor="password">{t('Password')}</label>
                    <br />
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="**********"
                      className={
                        errors.password && touched.password
                          ? `input-error && ${classes['input-container-login']}`
                          : `${classes['input-container-login']}`
                      }
                    />
                    <br />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className={`error ${classes['error-custom']}`}
                    />
                  </div>

                  <button
                    type="submit"
                    className={
                      !(dirty && isValid)
                        ? `${classes['disabled-btn']} && ${classes['login-button-login-page']}`
                        : `${classes['login-button-login-page']}`
                    }
                    disabled={!(dirty && isValid)}>
                    {t('LOGIN')}
                  </button>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
