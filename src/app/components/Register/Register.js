import React from 'react';

import Card from '../Card/Card';
import { Form, TextInput, Button } from '@carbon/react';

import { Add } from '@carbon/react/icons';

const Register = (props) => {
	return (
		<div className="register__main" style={{ backgroundColor: `black;` }}>
			<div className="register__right-pane">
				<Card className="register">
					<p>{props.title}</p>
					<h2>Register</h2>
					<Form>
						<div className="register__control">
							<TextInput
								id="username"
								required
								placeholder="Username"
							/>
						</div>
						<div className="register__control">
							<TextInput
								type="email"
								id="email"
								required
								placeholder="Email"
							/>
						</div>
						<div className="register__control">
							<TextInput
								type="password"
								id="password"
								required
								placeholder="Password"
							/>
						</div>
						<div className="register__control">
							<TextInput
								type="password"
								id="passwordConfirm"
								required
								placeholder="Repeat Password"
							/>
						</div>
						<div className="register__button">
							<Button
								renderIcon={(props) => (
									<Add size={20} {...props} />
								)}
								type="submit"
							>
								Create Account
							</Button>
						</div>
					</Form>
				</Card>
			</div>
		</div>
	);
};

export default Register;
