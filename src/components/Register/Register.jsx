import { Formik } from "formik";
import { FieldStyled, FormStyled } from "./Register.styled";
import { validationSchemas } from "../../utils";

export const Register = () => {

    const onSubmit = (values, action) => {

    }

    return (
        <section>
            <h2>Registration Form:</h2>
            <Formik
                initialValues={{ name: '', email: '', password: '', passwordConfirmation: '', subscription: '' }}
                onSubmit={onSubmit}
                validationSchema={validationSchemas.RegisterSchema}
            >
                {({errors, touched, isSubmitting}) => (
                    <FormStyled>
                        <label>
                            Name:
                            <FieldStyled name={'name'} type={'text'}/>
                        </label>

                        <label>
                            Email:
                            <FieldStyled name={'email'} type={'email'}/>
                        </label>
                        <label>
                            Password:
                            <FieldStyled name={'password'} type={'password'}/>
                        </label>
                        <label>
                            Password Confirmation:
                            <FieldStyled name={'passwordConfirmation'} type={'password'}/>
                        </label>
                        <label>
                            Subscription:
                            <FieldStyled name={'subscription'} as={'select'}>
                                <option value="starter">Starter</option>
                                <option value="pro">Pro</option>
                                <option value="business">Business</option>
                            </FieldStyled>
                        </label>
                    </FormStyled>
                )}
            </Formik>
        </section>
    );
}