

module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],

  theme: {
    fontFamily:{
      // sans:['Roboto','sans-serif']
    },

    extend: {
      colors: {
        primary: "#0B243A",
        vesuvius: "#000020",
        algoblack:"#00182D",
        algoprob:"#1B3B6F",
        algocodeOutput: "#1E293B",
        algoXcolor:"#392A6D",
        
      }
    },
    minWidth:{
      '3/4':'75%'
    }
  },
  plugins: [require('flowbite/plugin')]
  ,
};