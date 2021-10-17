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
      <Grid item width={300}>
        {children}
      </Grid>
    </Grid>
  );
}

export default Centered;
