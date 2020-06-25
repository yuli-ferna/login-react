const classes = {
  root: {
      display: "flex",
      // maxWidth: "300px",
      flexDirection: "column",
      marginTop: "50px",
  },
  actionButton: {
      width: "100%",
      fontWeight: "bold",
  },
  rightSubAction: {
      float: "right",
  },
  rememberMe: {
      float: "left",
  },
  leftSubAction: {
      float: "left",
  },
  form: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      background: "white",
      boxShadow:
      "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
      padding: 20,
      borderRadius: 4,
      // marginTop: 80,
  },
  input: {
      height: 50,
  },
  lastRow: {
      marginBottom: 0,
  },
  formMenuItem:{
      backgroundColor: "transparent",
      padding: 12
  },
  photo:{
      marginTop:10,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: 'center',
      width: "90%"
  },
  logos:{
      width: 95,
      height: 'auto',
      '&:not(:last-child)': {
      marginRight: 20
      },
  },
  logosTitle:{
      textAlign: 'center', 
      color: 'white', 
      marginTop: 10
  },
  logosContainer:{
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'center'
  },
  inputNavbar:{
      height: 35,
  },
  formButton:{
      backgroundColor: 'rgba(99,37,201,1)',
      borderColor: 'transparent',
      '&:hover': {
      background: 'rgb(63, 22, 140)',
      borderColor: 'rgb(63, 22, 140)',

      },
      '&:focus': {
      background: 'rgb(63, 22, 140)',
      borderColor: 'rgb(63, 22, 140)',
      },
      '&:active': {
      background: 'rgb(63, 22, 140)',
      borderColor: 'rgb(63, 22, 140)',
      }

  },
  contentButton:{
      backgroundColor: '#e69138', 
      borderColor: 'transparent',
      flex: 'auto',
      width: 'auto',
      '&:hover': {
      background: '#c57d31',
      borderColor: 'rgb(63, 22, 140)',

      },
      '&:focus': {
      background: '#c57d31',
      borderColor: 'rgb(63, 22, 140)',
      },
      '&:active': {
      background: '#c57d31',
      borderColor: 'rgb(63, 22, 140)',
      },
      '&:not(:last-child)': {
      marginBottom: 5
      },
      marginRight: 10,
      marginLeft: 10
  },
  buttonsContainer:{
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      marginTop: 10
  },
  messageChrome:{
      background: "white",
      boxShadow:
      "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
      marginTop: 30,
      borderRadius: 4,
      width: "90%",
      padding:5,
      // display: 'flex',
      // justifyContent: 'flex-end',
      // alignItems: 'center'
  },
  messageChromeText:{
      margin: 'auto',
      color:'red'
  },
  messageChromeButton:{
      margin: 'auto',
      textTransform: 'uppercase',
      whiteSpace: 'normal',
      lineHeight: '100%',
      height: '100%',
      padding: 5,
  },
  messageChromeLink:{
      color: 'red',
      textDecoration: 'underline',
      '&:hover': {
      color: '#ff5e5e',
      textDecoration: 'underline',
  }
  }
  };

  export default classes;