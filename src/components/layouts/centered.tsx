import Grid from '@mui/material/Grid';

const Centered = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item xs={4}>
        {children}
      </Grid>
    </Grid>
  );
}

export default Centered;
