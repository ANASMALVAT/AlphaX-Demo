export const customStyles = {

  singleValue:(styles) => ({
    ...styles,
    color:'#000000',
    
  }),

  control: (styles) => ({
    ...styles,
    borderRadius: "3px",
    fontSize: "1.3rem",
    fontweight:"bold",
    lineHeight: "2rem",
    background:"#F5F5F5",
    cursor: "pointer",
    maxWidth: "14rem",
    minWidth: "14rem",
    height:"3rem",
    width:"175px",
    // boxShadow:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  ":hover": {
    boxShadow:"0 4px 4px -1px rgb(0 0 0 / 0.1), 0 4px 4px -2px rgb(0 0 0 / 0.1)",
    },
    overflow:"auto",
    borderRadius:"3px",
    textAlign:"center",
    color:'#2D33CA',
  }),

  option: (styles) => {
    return {
      ...styles,
      color:'black',
      fontSize: "0.5rem",
      lineHeight:"1.5rem",
      fontweight: "bold",
      opacity: "1",
      textAlign: "left",
      whiteSpace: "nowrap",
      background:"#00182D",
      color:"white",
      border:"none",
      ":hover": {
        cursor: "pointer",
        transition: "0.1s",
        color: "white",
        background:"#4C5ADF",
      },
      overflow:"hidden",
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      maxWidth: "18rem",
      zIndex:"100",
      border:"none",
      background:"#00182D",
      overflow:"auto",
      border:"none",
  };
  },
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#fff",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
      border:"none",
      fontWeight:"light",
      border:"none"

    };
  },
};
