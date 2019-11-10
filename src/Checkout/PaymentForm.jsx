import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informe
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="customerGender" label="Gênero" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="customerAge" label="Faixa Etária" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="productName" label="Nome do Produto" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="producePrice" label="Preço do Produto" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
