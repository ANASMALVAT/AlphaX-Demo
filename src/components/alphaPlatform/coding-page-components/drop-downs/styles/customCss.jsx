export const customStyles = {

  singleValue:(styles) => ({
    ...styles,
    color:'#fff',    
  }),

  control: (styles) => ({
    ...styles,
    width: "100%",
    maxWidth: "14rem",
    minWidth: "12rem",
    borderRadius: "3px",
    fontSize: "0.9rem",
    lineHeight: "2rem",
    background:"transparent",
    cursor: "pointer",
    minWidth:'150px',
    maxWidth:'215px',
    width:"175px",
    border:"4px solid #392A6D",
    borderTop:"4px solid #392A6D",
    borderBottom:"4px solid #392A6D",
    overflow:"auto",
    borderRadius:"2px",
    boxShadow:"none",
    background:"none",
    ":hover": {
      border:"4px solid #392A6D",
      borderTop:"4px solid #392A6D",
      borderBottom:"4px solid #392A6D",
      boxShadow:"none"
    },
    ":focus":{
      focus:"none",
      outline:"none",
      boxShadow:"none"
    },
    ":active":{
      boxShadow:"none"
    }
  }),
  option: (styles) => {
    return {
      ...styles,
      color:'black',
      fontSize: "1rem",
      lineHeight:"1.3rem",
      width: "100%",
      fontweight: "bold",
      opacity: "1",
      textAlign: "left",
      whiteSpace: "nowrap",
      background:"#1c283b",
      color:"white",
      marginBottom:"1px",
      ":hover": {
        cursor: "pointer",
        transition: "0.1s",
        color: "white",
        background:"#4C5ADF",
        border:"white"
      },
      overflow:"hidden",
      borderRadius:"2px",
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      maxWidth: "12rem",
      zIndex:"100",
      // overflow:"hidden",
      border:"none",
      borderRadius:"5px",
      background:"transparent",
      overflow:"auto"

  };
  },
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#fff",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
      border:"none"

    };
  },
};