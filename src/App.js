import "./App.css";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  providerContainer: {
    marginTop: "50px",
  },
  buttonContainer: {
    margin: "10px",
    padding: "30px",
  },
  terraformLogo: {
    marginRight: "50px",
  },
  logo: {
    marginBottom: "50px",
  },
  success: {
    color: "green",
  },
  error: {
    color: "red",
  },
});

function App() {
  const classes = useStyles();

  const [endpointFetched, setEndpointFetched] = useState(false);
  const [endpointResponded, setEndpointResponded] = useState(false);

  const handleClick = () => {
    const API_URL = process.env.REACT_APP_API_URL;
    fetch(API_URL).then((response) => {
      setEndpointResponded(response.status === 200);
      setEndpointFetched(true);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.container}>
          <div>
            <img
              className={classes.logo}
              width="300px"
              src="assets/logo.svg"
              alt="Terraform and AWS"
            />
          </div>
          <div className={classes.buttonContainer}>
            <Button onClick={handleClick} variant="contained">
              Click me
            </Button>
          </div>
          {endpointFetched && endpointResponded && (
            <p className={classes.success}>SUCCESS!!!</p>
          )}
          {endpointFetched && !endpointResponded && (
            <p className={classes.error}>API NOT READY!</p>
          )}
        </div>
        <div className={classes.providerContainer}>
          <img
            className={classes.terraformLogo}
            width="300px"
            src="assets/terraform.png"
            alt="Terraform and AWS"
          />
          <img width="300px" src="assets/aws.png" alt="Terraform and AWS" />
        </div>
      </header>
    </div>
  );
}

export default App;
