import {useForm, SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

import {Form, Button, Row, Col, FloatingLabel} from "react-bootstrap";

const signUpSchema = z
	.object({
		firstName: z.string().min(2, {message: "First name must be at least 2 characters long"}),
		email: z.string().min(2).email(),
		password: z
			.string()
			.min(6)
			.regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, {message: "weak password"}),
		confirmPassword: z.string().min(6),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

type Inputs = {
	firstName: string;
	email: string;
	password: string;
	confirmPassword: string;
};

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<Inputs>({
		resolver: zodResolver(signUpSchema),
	});
	const sbmitForm: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};

	return (
		<>
			<Row>
				<Col md={{span: 6, offset: 3}}>
					<Form onSubmit={handleSubmit(sbmitForm)}>
						<FloatingLabel label='First Name' className='mb-5'>
							<Form.Control type='text' placeholder='First Name' {...register("firstName")} isInvalid={!!errors.firstName?.message} />
							<Form.Control.Feedback type='invalid'>{errors.firstName?.message}</Form.Control.Feedback>
						</FloatingLabel>

						<FloatingLabel label='Email address' className='mb-5'>
							<Form.Control type='email' placeholder='name@example.com' {...register("email")} isInvalid={!!errors.email?.message} />
							<Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
						</FloatingLabel>

						<FloatingLabel label='Password' className='mb-5'>
							<Form.Control type='password' placeholder='Password' {...register("password")} />
							<Form.Control.Feedback type='invalid'>{errors.password?.message}</Form.Control.Feedback>
						</FloatingLabel>

						<FloatingLabel label='Confirm Password' className='mb-5'>
							<Form.Control type='password' placeholder='Confirm Password' {...register("confirmPassword")} />
							<Form.Control.Feedback type='invalid'>{errors.confirmPassword?.message}</Form.Control.Feedback>
						</FloatingLabel>

						<Button variant='primary' type='submit'>
							Register
						</Button>
					</Form>
				</Col>
			</Row>
		</>
	);
};

export default Register;
