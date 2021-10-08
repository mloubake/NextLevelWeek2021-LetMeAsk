import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		title: string;

		colors: {
			//pages
			home: string;
			homePosterBackground: string;
			homePosterText: string;
			room: string;
			roomBackground: string;
			roomTitle: string;
			roomHeaderBottomBorder: string;
			separator: string;

			//components
			roomCodeBackground: string;
			roomCodeIconBackground: string;
			roomCodeBorder: string;
			roomCodeText: string;

			letMeAskLogoText: string;

			themeSwitcherBackground: string;
			themeSwitcherBorder: string;
			themeSwitcherSun: string;
			themeSwitcherMoon: string;

			buttonBackground: string;
			buttonBackgroundText: string;
			outlinedButtonBackground: string;
			outlinedButtonBorder: string;
			outlinedButtonText: string;

			questionCounterBackground: string;
			questionCounterText: string;

			historyBarToogleButtonBorder: string;
			historyBarToogleButtonBackground: string;

			questionBackground: string;
			questionHighlightedBackground: string;
			questionHighlightedBorder: string;
			questionBolderText: string;
			questionBoldText: string;
			questionText: string;
			questionAnswerBackground: string;
			questionIcon: string;
			questionIconHighlighted: string;

			textareaBackground: string;
			textareaBorder: string;
			textareaColor: string;
		};
	}
}
