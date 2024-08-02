import GlobalStyles from "./styles/GlobalStyles.tsx";
import {SwitchThemeProvider} from "./components/ThemeContext.tsx";
import Todo from "./components/Todo.tsx";

const App = () => {

  return (
    <>
      <GlobalStyles />
      <SwitchThemeProvider>
        <Todo />
      </SwitchThemeProvider>
    </>
  );
};

export default App;
