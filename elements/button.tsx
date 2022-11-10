import Link from 'next/link';
import classes from './button.module.css';

interface IButton {
	link: string;
	children: any;
}

const Button: React.FC<IButton> = (props) => {
	return (
		<Link href={props.link} className={classes.link}>
			{props.children}
		</Link>
	);
};
export default Button;
