import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles({
  homepage: {

  },
  images: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    
  },
  banner: {
    // minHeight: "50vh",
    // maxHeight: "50vh",
    // marginBottom: "3rem"
  },
  gridBanner: {
    // margin: 0,
    // width: '100%',
  },
  main: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
    '& img': {
      width: "55%"
    },
    '& p': {
      margin: "1rem",
      fontSize: "1.2rem",
      textAlign: "center"
    },
    '& button': {
      textTransform: 'none',
      fontSize: "1.2rem",
      fontWeight: "400",
      background: '#3F51B5'
    }

  },
  allNfts: {
    marginTop: "2rem",
    padding: "0 2rem",
  },
  title: {
    fontFamily: "sans-serif",
    fontSize: "2.8rem !important",
    fontWeight: "1000",
    marginBottom: "1rem",
  }
});

export { useStyles };