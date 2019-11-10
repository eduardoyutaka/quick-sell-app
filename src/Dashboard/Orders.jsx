/* eslint-disable no-script-url */
import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import axios from 'axios';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/purchases').then(response => {
      setPurchases(response.data);
    })
  }, purchases);

  return (
    <React.Fragment>
      <Title>Vendas Recentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Gênero</TableCell>
            <TableCell>Idade</TableCell>
            <TableCell>Nome do Produto</TableCell>
            <TableCell>Preço do Produto</TableCell>
            <TableCell align="right">Data da Compra</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {purchases.map(purchase => (
            <TableRow key={purchase.id}>
              <TableCell>{purchase.customer_gender}</TableCell>
              <TableCell>{purchase.customer_age}</TableCell>
              <TableCell>{purchase.product_name}</TableCell>
              <TableCell>{purchase.product_price}</TableCell>
              <TableCell align="right">{purchase.created_at.split('T')[0]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          Ver detalhes
        </Link>
      </div>
    </React.Fragment>
  );
}
