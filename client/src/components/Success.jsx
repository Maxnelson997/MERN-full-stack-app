import { useState } from 'react'
const Success = ({ msg }) => {

    const [show, setShow] = useState(true)

    setTimeout(() => setShow(false), 2000)

    return (
        show && <div className='alert success bg-green-500 text-white p-2 rounded-md mt-6 text-sm'>
            <i className="alert__icon success__icon fa-solid fa-circle-check" />
            <div className="alert__msg success__msg">{msg}</div>
        </div>
    )
};

export default Success;