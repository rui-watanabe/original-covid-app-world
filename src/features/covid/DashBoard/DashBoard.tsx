import React, { useEffect } from "react";
import styles from "./DashBoard.module.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncGet, fetchAsyncGetDaily, selectData } from "../covidSlice";
import SwitchCountry from "../SwitchCountry/SwitchCountry";
import Chart from "../Chart/Chart";
import PieChart from "../PieChart/PieChart";
import Cards from "../Cards/Cards";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: { marginTop: 85 },
}));

const formatDate = (date: Date) => {
  const Y = date.getFullYear()
  const M = ("00" + (date.getMonth()+1)).slice(-2);
  const D = ("00" + date.getDate()).slice(-2);
  return `${Y}年${M}月${D}日`;
}

const DashBoard: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchAsyncGet());
    dispatch(fetchAsyncGetDaily());
  }, [dispatch]);

  return (
    <>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            ORIGINAL COVID APP WORLD
          </Typography>
          {data && (
            <Typography variant="body1">
              {formatDate(new Date(data.lastUpdate))}更新
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Container className={classes.content}>
        <div className={styles.container}>
          <SwitchCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>

          <Grid item xs={12} md={5}>
            <PieChart />
          </Grid>

          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DashBoard;
