import React, { useEffect } from "react";
import "./App.css";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import Todos from "./components/todos/Todos";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";
import { loadUser } from "./store/actions/authActions";
import theme from "./theme";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  },
  contentStyle: {
    margin: "30px auto",
    padding: "20px",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Container maxWidth="md">
            <NavBar />
            <Container className={classes.contentStyle} maxWidth="sm">
              <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/" component={Todos} />
              </Switch>
            </Container>
          </Container>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
