import React, { createContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext";

import GlobalStyle from "./styles/global";

import { Home } from "./pages/home/index";
import { NewRoom } from "./pages/newRoom/index";
import { Room } from "./pages/room";
import { AdminRoom } from "./pages/adminRoom";
import usePersistedState from "./hooks/usePersistedState";

import light from "./styles/theme/light";
import dark from "./styles/theme/dark";

import { ThemeProvider } from "styled-components";

type ToggleContextType = {
	toggleContext: (theme: any) => void;
};

export const ToggleContext: any = createContext<ToggleContextType>({
	toggleContext: () => {},
});

function App() {
	const [theme, setTheme] = usePersistedState("theme", dark);

	const themeToggle = () => {
		setTheme(theme.title === "dark" ? light : dark);
	};

	return (
		<ThemeProvider theme={theme}>
			<ToggleContext.Provider value={themeToggle}>
				<GlobalStyle />
				<BrowserRouter>
					<AuthContextProvider>
						<Switch>
							<Route path="/" exact component={Home} />
							<Route path="/rooms/new" component={NewRoom} />
							<Route path="/rooms/:id" component={Room} />

							<Route path="/admin/rooms/:id" component={AdminRoom} />
						</Switch>
					</AuthContextProvider>
				</BrowserRouter>
			</ToggleContext.Provider>
		</ThemeProvider>
	);
}

export default App;
