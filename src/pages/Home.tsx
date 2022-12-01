import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addIncome,
  addOutcome,
  updateBalance,
} from "../store/modules/WalletSlice";

const Home: React.FC = () => {
  const [valor, setValor] = useState<number>(0);
  const [type, setType] = useState<string>("income");
  const walletRedux = useAppSelector((state) => state.wallet);
  const dispatch = useAppDispatch();

  const deposito = () => {
    if (walletRedux.balance - valor <= -1000) {
      alert("voce chegou no cheque especial");
      return;
    }
    if (type === "income") {
      dispatch(addIncome(valor));
      dispatch(updateBalance());
      setValor(0);
    } else {
      dispatch(addOutcome(valor));
      dispatch(updateBalance());
      setValor(0);
    }
  };
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "rgba(255,255,255,0.8)",
            padding: "15px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <h1>CARTEIRA GROWDEV</h1>
              </Grid>
              <Grid item sx={{ fontSize: "45px" }} xs={12}>
                <AccountBalanceWalletIcon fontSize="large" /> R$
                {walletRedux.balance}
              </Grid>
              <Grid item xs={12}>
                <h2>SALDO + LIMITE</h2>
                <p style={{ fontSize: "45px", margin: "0px" }}>
                  R${walletRedux.balance + 1000}
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="filled-basic"
              label="Valor"
              fullWidth
              variant="filled"
              type="text"
              value={valor}
              onChange={(ev) => setValor(Number(ev.target.value))}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Tipo:
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(ev) => setType(ev.target.value)}
                value={type}
              >
                <FormControlLabel
                  value="income"
                  control={<Radio />}
                  label="Entrada"
                />
                <FormControlLabel
                  value="outcome"
                  control={<Radio />}
                  label="Saída"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={deposito} fullWidth>
              Enviar
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={2} sx={{ padding: "5px", mt: "20px" }}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant="h6">Entradas</Typography>
                  {walletRedux.income.map((item, index) => {
                    return (
                      <div key={index}>
                        <div>{`ID ${index} | ${item}`}</div>
                      </div>
                    );
                  })}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">Saídas</Typography>
                  {walletRedux.outcome.map((item, index) => {
                    return (
                      <div key={index}>
                        <div>{`ID ${index} | ${item}`}</div>
                      </div>
                    );
                  })}
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default Home;

// import React, { useCallback, useEffect, useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Grid,
//   Paper,
//   TextField,
// } from "@mui/material";
// import FormContact from "../components/FormContact/FormContact";
// import ItemContact from "../components/ItemContact/ItemContact";
// import { useAppDispatch, useAppSelector } from "../store/hooks";
// import { useNavigate } from "react-router-dom";
// import {
//   addContact,
//   addMany,
//   deleteContact,
//   selectContacts,
//   updateContact,
// } from "../store/modules/WalletSlice";
// import Message from "../components/Message";

// const Home: React.FC = () => {
//   const [openEdit, setOpenEdit] = useState<boolean>(false);
//   const [saveOption, setSaveOption] = useState<boolean>(false);
//   const [contactEdit, setContactEdit] = useState<string>("");
//   const [inputEdit, setinputEdit] = useState<ContactType>({
//     name: "",
//     phone: "",
//   });
//   const contactsRedux = useAppSelector(selectContacts);
//   const loginRedux = useAppSelector((state) => state.login);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (saveOption === true) {
//       localStorage.setItem("notes", JSON.stringify(contactsRedux));
//     }
//   }, [contactsRedux, saveOption]);

//   const handleAddContact = useCallback(
//     (contact: ContactType) => {
//       setSaveOption(true);
//       dispatch(addContact(contact));
//     },
//     [dispatch]
//   );

//   const handleDeleteContact = useCallback(
//     (contact: ContactType) => {
//       setSaveOption(true);
//       dispatch(deleteContact(contact.phone));
//     },
//     [dispatch]
//   );

//   const openEditModal = useCallback((contact: ContactType) => {
//     const contactUpdate: ContactType = {
//       name: contact.name,
//       phone: contact.phone,
//     };
//     setinputEdit(contactUpdate);
//     setContactEdit(contact.phone);
//     setOpenEdit(true);
//   }, []);

//   const handleEditContact = () => {
//     dispatch(
//       updateContact({
//         id: contactEdit,
//         changes: { name: inputEdit.name, phone: inputEdit.phone },
//       })
//     );
//     setOpenEdit(false);
//   };

//   const handleClose = () => {
//     setOpenEdit(false);
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <FormContact action={handleAddContact} />
//         <Message />
//       </Grid>
//       <Grid item xs={12}>
//         <Paper elevation={2} sx={{ padding: "5px" }}>
//           {contactsRedux.map((item) => {
//             return (
//               <ItemContact
//                 key={item.phone}
//                 contact={item}
//                 actionDelete={() => handleDeleteContact(item)}
//                 actionEdit={() => openEditModal(item)}
//               />
//             );
//           })}
//         </Paper>
//       </Grid>
//       <Dialog open={openEdit} onClose={handleClose}>
//         <DialogTitle>Editar Contato</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Utilize os campos para editar o contato:
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Nome"
//             type="text"
//             onChange={(ev) =>
//               setinputEdit({
//                 name: ev.target.value,
//                 phone: inputEdit.phone,
//               })
//             }
//             fullWidth
//             value={inputEdit.name}
//             variant="outlined"
//           />
//           <TextField
//             autoFocus
//             margin="dense"
//             id="number"
//             label="Número"
//             onChange={(ev) =>
//               setinputEdit({
//                 name: inputEdit.name,
//                 phone: ev.target.value,
//               })
//             }
//             inputProps={{ maxLength: 11 }}
//             value={inputEdit.phone}
//             type="text"
//             fullWidth
//             variant="outlined"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button variant="outlined" onClick={handleClose}>
//             Cancelar
//           </Button>
//           <Button variant="contained" onClick={handleEditContact}>
//             Salvar
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Grid>
//   );
// };

// export default Home;
