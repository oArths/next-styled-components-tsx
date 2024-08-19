export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
}


const lightTheme: Theme = {
  colors: {
    primary: "#fff",
    secondary: "#adb5bd",
    background: "#333",
  },
};

const theme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    background: "#fff",
  },
};
const darkTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    background: "#fff",
  },
};

export { lightTheme, darkTheme, theme };
