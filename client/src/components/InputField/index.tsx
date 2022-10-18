import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputHTMLAttributes, useState } from 'react';
import useStyles from './styles';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	icon?: any;
}

function InputField(props: InputFieldProps) {
	const classes = useStyles();
	const { icon: Icon, type = 'text', ...inputProps } = props;
	const [inputType, setInputType] = useState<string>(type);

	return (
		<div className={`${classes.inputGroup} flex-center--ver`}>
			{Icon && (
				<div className={`${classes.inputIcon} h-100 flex-center`}>
					<Icon className={classes.icon} />
				</div>
			)}

			<input
				className={`${classes.input} w-100 h-100`}
				type={inputType}
				{...inputProps}
			/>

			{type === 'password' && (
				<>
					{inputType === 'password' ? (
						<VisibilityOffIcon
							className={classes.passwordIcon}
							onClick={() => setInputType('text')}
						/>
					) : (
						<VisibilityIcon
							className={classes.passwordIcon}
							onClick={() => setInputType('password')}
						/>
					)}
				</>
			)}
		</div>
	);
}

export default InputField;
