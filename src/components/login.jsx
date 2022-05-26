
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { styled } from "@mui/material";
import { FormControl, TextField, Button } from "@mui/material"

const LoginWrapper = styled("form")`
  width: 400px;
  height: auto;
  border: 1px solid #c1c2c3;
  margin: 0 auto;
  padding: 16px;
  border-radius: 4px;
  h4 {
    margin-top: 0;
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
            <h4>Please Log In</h4>
            <form onSubmit={handleSubmit}>
                <label>
                    <FormControl sx={{ width: "100%", mb: 1 }}>
                        <p>Username</p>
                        <TextField
                            label="Адрес почты"
                            type="text"
                            variant="outlined"
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </FormControl>
                </label>

                <label>
                    <FormControl sx={{ width: "100%", mb: 1 }}>
                        <p>Password</p>
                        <TextField
                            label="Пароль"
                            type="password"
                            variant="outlined"
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
        </LoginWrapper >



    );
};
LoginForm.propTypes = {
    onAuthSubmit: PropTypes.func.isRequired
};
