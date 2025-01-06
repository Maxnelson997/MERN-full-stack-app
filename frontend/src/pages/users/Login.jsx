import { useState } from "react";
import Alert from '../../components/Alert';

const Login = () => {

    // error state
    const [error, setError] = useState(null)

    return <section className='card'>
        <h1 className='title'>Login to your account</h1>

        <form>
            <input type="email" placeholder="Email Address" className='input' autoFocus />
            <input type="password" placeholder="Password" className='input' autoFocus />
            <button className='btn'>Login</button>
        </form>

        {error && <Alert msg={error} />}
    </section>
}

export default Login