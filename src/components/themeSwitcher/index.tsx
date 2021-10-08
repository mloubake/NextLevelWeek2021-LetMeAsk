import { useContext } from "react";
import { Container, Flipper } from "./styles";
import anime from "animejs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import usePersistedState from "../../hooks/usePersistedState";
import dark from "../../styles/theme/dark";
import light from "../../styles/theme/light";

import { ToggleContext } from "../../App";

export function ThemeSwitcher(props: any) {
	const [theme, setTheme] = usePersistedState("theme", dark);

	const toggleContext: any = useContext(ToggleContext);

	function handleChangeTheme() {
		if (theme === dark) {
			anime({
				targets: ".rotateClockwise",
				rotateY: "180deg",
				easing: "spring(2, 80, 10, 0)",
			});
			setTheme(light);
		}
		if (theme === light) {
			anime({
				targets: ".rotateAntiClockwise",
				rotateY: "0deg",
				easing: "spring(2, 80, 10, 0)",
			});
			setTheme(dark);
		}
	}

	return (
		<Container
			className="themeSwitcher"
			onClick={() => {
				toggleContext();
				handleChangeTheme();
			}}
		>
			<Flipper
				className={theme === dark ? "rotateClockwise" : "rotateAntiClockwise"}
			>
				<FontAwesomeIcon
					icon={theme === dark ? faMoon : faSun}
					className={theme === dark ? "moon" : "sun"}
				/>
			</Flipper>
		</Container>
	);
}
