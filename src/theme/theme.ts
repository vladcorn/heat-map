import { createMuiTheme } from '@material-ui/core/styles';
import shadows from '@material-ui/core/styles/shadows';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h1: { fontSize: '2.375rem', fontWeight: 700 },
    h5: {
      fontWeight: 700,
    },
    body1: { color: '#202020' },
    button: {
      letterSpacing: '0.04em',
    },
  },
  palette: {
    error: {
      main: '#E41B1F',
    },
    text: {
      primary: '#202020',
      secondary: 'rgba(255, 255, 255, 0.6)',
    },
    common: {
      black: '#202020',
    },
    primary: {
      main: '#E41B1F',
      dark: '#B30004',
    },
    secondary: {
      main: '#1B9CE4',
    },
    grey: {
      100: '#F9FAFF',
      400: '#D0D0D0',
    },
    warning: { main: '#EF6C00' },
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiRadio: {
      root: {
        color: '#D0D0D0',
      },
    },
    MuiCheckbox: {
      root: {
        color: '#D0D0D0',
      },
    },
    MuiTextField: {
      root: {
        width: '100%',
        minHeight: 72,
        '& .MuiFormLabel-root': {
          color: '#202020',
          // opacity: 0.6,
        },
        '& .MuiFormLabel-root.Mui-error': {
          color: '#E41B1F',
          // opacity: 0.7,
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: '#202020',
          opacity: 0.5,
        },
        '& .MuiFormLabel-root.Mui-focused.Mui-error': {
          color: '#E41B1F',
          // opacity: 0.7,
        },
        '& .MuiInputLabel-shrink': {
          // transform: 'translate(0,7.5px) scale(0.75)',
          opacity: 0.5,
        },
        '& .MuiInputBase-input': {
          height: '1.2875em',
          color: '#202020',
          // opacity: 0.6,
        },
        '& .MuiInput-underline:before': {
          borderBottom: `1px solid #202020`,
          opacity: 0.1,
        },
        '& .Mui-error:before': {
          borderColor: '#E41B1F',
          opacity: 1,
        },
        '&:hover': {
          '& .MuiInput-underline:before ': {
            borderBottom: `1px solid #202020`,
            opacity: 0.1,
          },
          '& .Mui-error:before': {
            borderColor: '#E41B1F',
            opacity: 1,
          },
        },
        '& .MuiInput-underline:after': {
          borderBottom: `1px solid #202020`,
          opacity: 0.2,
        },
        '& .Mui-error.MuiInput-underline:after': {
          borderBottom: `1px solid #202020`,
          opacity: 1,
        },
        '& .MuiInput-underline.Mui-focused:after': {
          borderBottom: `1px solid #202020`,
          opacity: 0.2,
        },
        '& .MuiInput-underline.Mui-focused.Mui-error:after': {
          borderColor: '#202020',
          opacity: 1,
        },
        '&.warning': {
          '& .MuiFormLabel-root': {
            color: 'orange',
          },
        },
      },
    },
    MuiInputLabel: {
      root: {
        '&.MuiInputLabel-shrink': {
          // transform: 'translate(0,7.5px) scale(0.75)',
          opacity: 0.5,
        },
        '&.Mui-focused.Mui-error': {
          color: '#E41B1F',
          // opacity: 0.7,
        },
        '&.Mui-focused': {
          color: '#202020',
          opacity: 0.5,
        },
      },
    },
    MuiFormHelperText: {
      root: {
        '&.warning': {
          color: '#EF6C00',
        },
      },
    },
    MuiInputBase: {
      root: {
        '&.MuiInputBase-input': {
          height: '1.2875em',
          color: '#202020',
          // opacity: 0.6,
        },
        '&.MuiInput-underline:before': {
          borderBottom: `1px solid #202020`,
          opacity: 0.1,
        },
        '&.Mui-error:before': {
          borderColor: '#E41B1F',
          opacity: 1,
        },
        '&:hover': {
          '&.MuiInput-underline:before': {
            borderBottom: `1px solid #202020`,
            opacity: 0.1,
          },
          '&.Mui-error:before': {
            borderColor: '#E41B1F',
            opacity: 1,
          },
        },
        '&.MuiInput-underline:after': {
          borderBottom: `1px solid #202020`,
          opacity: 0.2,
        },
        '&.Mui-error.MuiInput-underline:after': {
          borderBottom: `1px solid #202020`,
          opacity: 1,
        },
        '&.MuiInput-underline.Mui-focused:after': {
          borderBottom: `1px solid #202020`,
          opacity: 0.2,
        },
        '&.MuiInput-underline.Mui-focused.Mui-error:after': {
          borderColor: '#202020',
          opacity: 1,
        },
      },
      input: {
        '&:-webkit-autofill': {
          transitionDelay: '9999999s',
          transitionProperty: 'background-color, color',
        },
      },
    },
  },
});
