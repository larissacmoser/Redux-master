import React from "react";

const Login: React.FC = () => {
  return (
    <React.Fragment>
      <h1>Growdev</h1>
      <p></p>
    </React.Fragment>
  );
};

export default Login;

// import React, { useEffect, useState } from "react";
// import { Button, Grid, TextField, Typography } from "@mui/material";
// import { useAppDispatch, useAppSelector } from "../store/hooks";
// import { useNavigate } from "react-router-dom";
// import AdbIcon from "@mui/icons-material/Adb";
// import { login } from "../store/modules/LoginSlice";

// const Login: React.FC = () => {
//   const [user, setUser] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const loginRedux = useAppSelector((state) => state.login);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (loginRedux.logged) {
//       navigate("/");
//     }
//   }, [loginRedux, navigate]);

//   const handleLogin = () => {
//     if (user.length && password.length) {
//       dispatch(login({ user, password, logged: true }));
//     }
//   };

//   return (
//     <Grid
//       container
//       spacing={2}
//       sx={{ height: "100vh", padding: "0 20px" }}
//       justifyContent="center"
//       alignItems="center"
//     >
//       <Grid item xs={12} sm={6}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} display="flex" justifyContent="center">
//             <AdbIcon fontSize="large" />
//             <Typography variant="h4">Lista de contatos</Typography>
//           </Grid>
//           <Grid item xs={12} alignItems="center">
//             <Typography variant="h6" align="center">
//               Para logar pode utilizar qualquer login e senha.
//             </Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               id="outlined-basic"
//               onChange={(ev) => setUser(ev.target.value)}
//               label="Login"
//               value={user || ""}
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               id="outlined-basic"
//               onChange={(ev) => setPassword(ev.target.value)}
//               label="Senha"
//               value={password || ""}
//               variant="outlined"
//               fullWidth
//             />
//           </Grid>
//           <Grid item mt="5px" xs={12}>
//             <Button
//               fullWidth
//               color="success"
//               size="large"
//               onClick={handleLogin}
//               variant="contained"
//             >
//               Login
//             </Button>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default Login;
