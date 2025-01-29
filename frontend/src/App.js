import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/Singup";
import { Toaster } from "react-hot-toast";
import{useAuthcontext} from "./Components/Hooks/context";

function App() {
	const { authUser } = useAuthcontext();
	return (
		<div className='p-4 h-screen flex items-center justify-center'>
			<Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
			</Routes>
			<Toaster />
		</div>
	);
}

export default App;