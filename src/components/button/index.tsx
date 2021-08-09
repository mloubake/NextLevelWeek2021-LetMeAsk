import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

// import "./styles.scss";
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutlined?: boolean;
};

export function Button({ isOutlined, ...props }: ButtonProps) {
	return (
		<Container className={cn("button", { outlined: isOutlined })} {...props} />
	);
}
