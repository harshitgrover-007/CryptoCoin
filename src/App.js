import { makeStyles, Typography } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import { BarLoader, BeatLoader, BounceLoader, ClipLoader, HashLoader, RingLoader, ScaleLoader } from "react-spinners";
import { useEffect, useState } from "react";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },8000)
  }, [])

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        {loading ? (
          <div className="App">
            <BounceLoader size={60} color={"gold"} loading={loading} />{" "}
            <div className="App-Header">
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                Crypto Coin <br /> by Harshit Grover
              </Typography>
            </div>
          </div>
        ) : (
          <div>
            <Header />

            <Route path="/" component={Homepage} exact />
            <Route path="/coins/:id" component={CoinPage} exact />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
