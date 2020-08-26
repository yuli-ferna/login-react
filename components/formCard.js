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
  inputMetaburn: {
    height: 40,
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
    width: "100%"
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
    color: "#ff0080",
    boxShadow: ' inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5)',
    borderRadius: '20px',
   // backgroundColor: 'rgba(99,37,201,1)',
    background: '#6325c9',
    borderColor: 'transparent',
    '&:hover': {
    //  color: "rgba(255,20,147)",
    //  background: 'rgb(63, 22, 140)',
    //  borderColor: 'rgb(63, 22, 140)',
      boxShadow: ' inset -6px -6px 10px 0 rgba(0, 0, 0, 0.2), inset 6px 6px 10px 0 rgba(255, 255, 255, 0.5)',

    },
    '&:focus': {
    //  color: "rgba(255,20,147)",
    //  background: 'rgb(63, 22, 140)',
    //  borderColor: 'rgb(63, 22, 140)',
      boxShadow: ' inset -6px -6px 10px 0 rgba(0, 0, 0, 0.2), inset 6px 6px 10px 0 rgba(255, 255, 255, 0.5)',
    },
    '&:active': {
    //  color: "rgba(255,20,147)",
    //  background: 'rgb(63, 22, 140)',
    //  borderColor: 'rgb(63, 22, 140)',
      boxShadow: ' inset -6px -6px 10px 0 rgba(0, 0, 0, 0.2), inset 6px 6px 10px 0 rgba(255, 255, 255, 0.5)',
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
    width: "100%",
    marginTop: 10
  },
  messageChrome:{
    background: "white",
    boxShadow:
      "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
    marginTop: 30,
    borderRadius: 4,
    width: "100%",
    padding:5,
    // display: 'flex',
    // justifyContent: 'flex-end',
    // alignItems: 'center'
  },

  contentButtonsNeu: {
    height: 50,
    width: '100%',
    color: "#ff0080",
   // fontWeight: "bold",
    backgroundColor: "transparent",
    backgroundColor: "#6325c9",
    boxShadow: ' 6px 6px 10px 0 rgba(0, 0, 0, 0.2), -6px -6px 10px 0 rgba(255, 255, 255, 0.5)',
    borderRadius: '20',
    borderColor: 'transparent',
    '&:hover': {
      color: "#ff0080",
      backgroundColor: "#6325c9",
      borderColor: 'transparent',
      boxShadow: ' inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5)',

    },
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