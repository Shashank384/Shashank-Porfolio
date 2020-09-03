import { createMuiTheme } from '@material-ui/core/styles';

const arcBase = '#0B72B9'
const arcBlue = '#3e98c7'

export default createMuiTheme({
    palette: {
        type: 'light',
        common : {
            base: `${arcBase}`,
            blue: `${arcBlue}`
        },
        primary: {
            main: `${arcBase}`
        },
        secondary: {
            main: `${arcBlue}`
        }
    },
    typography: {
        tab : {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
        }
    },
    overrides: {
        MuiGrid: {
            root:{
                direction: "column"
            }
        }
        
    }

});