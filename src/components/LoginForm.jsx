import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { styled, Button, FormControl, TextField } from "@mui/material";

const LoginWrapper = styled("div")`
margin:0 auto;
width: 400px;
height: auto;
border: 1px solid #c1c2c3;
padding: 16px;
border-radius: 4px;
h4 {
  margin-top: 0;
}
`;

export const LoginForm = ({ onAuthSubmit }) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        onAuthSubmit({
            email: username,
            password
        });
    };

    return (
        <LoginWrapper>
            <h4> Please Log In </h4>
            <form onSubmit={handleSubmit}>
                <label>
                    <FormControl sx={{ width: "100%", mb: 1 }}>
                        <p>Username</p>
                        <TextField
                            label="Адрес почты"
                            variant="outlined"
                            type="email"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </FormControl>

                </label>
                <label>
                    <FormControl sx={{ width: "100%", mb: 1 }}>
                        <p>Password</p>
                        <TextField
                            label="Пароль"
                            variant="outlined"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                </label>
                <label>
                    <FormControl sx={{ width: "100%", mb: 1 }}>
                        <Button type="submit" variant="outlined">
                            Войти
                        </Button>
                    </FormControl>
                </label>
            </form>
        </LoginWrapper>



    );
};
LoginForm.propTypes = {
    onAuthSubmit: PropTypes.func.isRequired
};