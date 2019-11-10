import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Bem-vindo, Eduardo
      </Typography>
      <Typography component="p">
        Melhore suas vendas com o melhor sistema virtual para análise e controle de dados.
      </Typography>
    </Paper>
  );
}

export function SettingsSheet() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Nome
      </Typography>
      <Typography component="p">
        Eduardo
      </Typography>
      <br />
      <Typography variant="h5" component="h3">
        Unidade
      </Typography>
      <Typography component="p">
        Lojas Curitiba
      </Typography>
      <br />
      <Typography variant="h5" component="h3">
        Cargo
      </Typography>
      <Typography component="p">
        Vendedor Pleno
      </Typography>
    </Paper>
  );
}
