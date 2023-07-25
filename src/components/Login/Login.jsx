import { FormStyled, FieldStyled, SectionLoginStyled, ButtonStyled, LabelStyled, ErrorMessageFormStyled } from "./Login.styled";
import { Formik } from "formik";
import { validationSchemas, auth, users, UserContext } from "../../utils/";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../";

export const Login = () => {
    const [message, setMessage] = useState(null);
    const navigation = useNavigate();
    const { setCurrentUser } = useContext(UserContext.UserContext);

    const login = async (values) => {
        const result = await auth.login(values);
        if(result.message) {
            setMessage(result.message);
        }

        if(result.user) {
            users.loginUser(result);
            setCurrentUser(result);
            navigation('/');
        }
    }

    return (
        <SectionLoginStyled>
            <h2>Login Form</h2>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchemas.LoginSchema}
                onSubmit={login}
            >
                {({ errors, touched, isSubmitting}) =>
                    (<FormStyled>
                        <LabelStyled>
                            Email:
                            <FieldStyled name="email" type="email"/>
                        </LabelStyled>
                        { errors.email && touched.email ? (
                            <ErrorMessageFormStyled><sup>*</sup>{errors.email}</ErrorMessageFormStyled>
                        ) : null }

                        <LabelStyled>
                            Password:
                            <FieldStyled name="password" type="password"/>
                        </LabelStyled>
                        { errors.password && touched.password ? (
                            <ErrorMessageFormStyled><sup>*</sup>{errors.password}</ErrorMessageFormStyled>
                        ) : null }
                        <ButtonStyled disabled={isSubmitting} type="submit">Login</ButtonStyled>
                    </FormStyled>)
                }
            </Formik>

            { message && <ErrorMessage text={message}/> }

        </SectionLoginStyled>
    )
}