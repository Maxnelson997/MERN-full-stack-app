import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert';
import { registerUser } from "../../controllers/usersController";
import { UserContext } from "../../contexts/UserContext";


const Register = () => {

    // Use user context
    const { setUser } = useContext(UserContext);

    // Use navigate hook
    const navigate = useNavigate()

    // Error state
    const [error, setError] = useState(null)

    // Form data state
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordConfirm: ''
    })

    // Handle register
    const handleRegister = async (e) => {
        e.preventDefault()
        const { email, password, passwordConfirm } = formData;
        try {
            await registerUser(email, password, passwordConfirm);
            setUser({
                email,
                posts: []
            })
            navigate('/dashboard')
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <section className='card'>
            <h1 className='title'>Create an account</h1>

            <form onSubmit={handleRegister}>
                <input type="email"
                    placeholder="Email Address"
                    className='input'
                    value={formData.email}
                    onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                    autoFocus />
                <input type="password"
                    placeholder="Password"
                    className='input'
                    value={formData.password}
                    onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }}
                    autoFocus />
                <input type="password"
                    placeholder="Confirm Password"
                    className='input'
                    value={formData.passwordConfirm}
                    onChange={(e) => { setFormData({ ...formData, passwordConfirm: e.target.value }) }}
                    autoFocus />
                <button
                    className='btn'
                >
                    Register
                </button>
            </form>

            {error && <Alert msg={error} />}
        </section>
    )
}

export default Register