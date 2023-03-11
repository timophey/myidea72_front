import React, { createContext } from 'react';

const AuthContext = createContext({
    logged: false,
    loginout: () => {},
});

export default AuthContext;