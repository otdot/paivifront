import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMarkets } from "../../services/market";
import { IMarket } from "../../Types";
import styles from "./Main.module.css";

const Main = () => {
  const [markets, setMarkets] = useState<IMarket[]>([]);

  useEffect(() => {
    const initializeMarkets = async () => {
      const markets = await getMarkets();
      setMarkets(markets);
    };
    initializeMarkets();
  }, []);

  return (
    <main>
      <Container maxWidth="lg">
        <div>
          <Typography variant="h5" component="div">
            Welcome to Päivi Päivittäjä
          </Typography>
          <Typography variant="subtitle1" component="div">
            Storage management application
          </Typography>
          <Typography variant="body2" component="div">
            Application that manages storages products and automates storage
            self-monitoring of products.{" "}
            <Link to="/signin">Please login or sign up here</Link>.
          </Typography>
          <Typography variant="caption" display="block">
            Please don't save sensitive data to the website. Data in the site is
            fake data
          </Typography>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <TableContainer>
            <Typography variant="h5" component="div">
              Päivi Markets
            </Typography>
            <Table aria-label="Storage">
              <TableHead>
                <TableRow>
                  <TableCell>Market</TableCell>
                  <TableCell>Employees</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {markets.map((market: IMarket) => (
                  <TableRow key={market.name}>
                    <TableCell>{market.name}</TableCell>
                    <TableCell>{market.personnel.length}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </main>
  );
};

export default Main;
