import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, login as loginUser } from '../store/actions/authActions';
import { Backdrop, CircularProgress } from '@mui/material'
import { clearErrors } from '../store/actions/errorActions';

const login = () => {
	const [email, setEmail] = React.useState("")
	const [password, setPassword] = React.useState("")
	const [isLoading, setIsLoading] = React.useState(false)
	const dispatch = useDispatch()
	const router = useRouter()
	const auth = useSelector(state => state.auth)
	const error = useSelector(state => state.error)
	const SubmitForm = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		dispatch(loginUser({ email, password }));
	}
	// useEffect(() => {

	// }, [])
	console.log("effetc tunning")
	useEffect(() => {
		if (auth.isAuthenticated) {
			router.push("/")
			setIsLoading(false)
			dispatch(clearErrors())
		}
		else {
			setIsLoading(false)
		}


	}, [])
	return (
		<div className="relative z-0">
			<img src="" alt="" />
			<div className="container mx-auto px-4">
				<div className="xl:w-8/12 lg:w-10/12 md:w-11/12 w-full mx-auto">
					<div className="flex lg:flex-row h-screen  flex-col lg:space-y-0 space-y-10  justify-center lg:justify-between items-center">
						<div className="lg:w-1/2 w-full space-y-5">
							<h1 className="text-btn-blue text-3xl md:text-5xl tracking-widest font-bold text-left">
								facebook
							</h1>
							<p className="font-medium text-black tracking-wider text-xl text-left">
								Facebook helps you connect and share with the people in your
								life
							</p>
						</div>
						<div className="lg:w-1/2 w-full">
							<div className="w-full h-full  shadow-2xl p-2.5 md:p-10">
								<form className="space-y-10" onSubmit={SubmitForm}>
									<input
										className="w-full outline-none border border-gray-400 rounded-xl text-base text-gray-500 p-5"
										type="email"
										placeholder="Email address or Phone number"
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
									<input
										className="w-full outline-none border border-gray-400 rounded-xl text-base text-gray-500 p-5"
										type="password"
										autoComplete="true"
										placeholder="Password"
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
									<div>
										<button variant="outlined" className="p-5 w-full text-center block outline-none border border-gray-400 rounded-xl text-xl text-white bg-btn-blue" >
											Login
										</button>
										{isLoading ? <Backdrop className="text-white bg-white z-50" open={open} >
											<CircularProgress className="text-btn-blue " />
										</Backdrop> : ""}
									</div>
									{error.status ? <h1 className="text-red-500 font-semibold tracking-widest text-center">{error.msg.msg}fd</h1> : ""}

									<div className="w-1/2 block mx-auto outline-none border border-gray-400 rounded-xl text-base text-white py-2.5 px-1 bg-btn-green">
										<button
											className="w-full"
											type="submit"
											onClick={() => {
												setSignUp(!signUp);
											}}
										>
											Create New Account
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* {signUp ? <SignUpPopUp closepopup={CloseSignUpPopUp} /> : null} */}
		</div>
	)
}

export default login
