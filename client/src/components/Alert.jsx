const Alert = ({ msg }) => {
    return (
        <div className='alert bg-red-500 text-white p-2 rounded-md mt-6 text-sm'>
            <i className="alert__icon fa-solid fa-triangle-exclamation" />
            <div className="alert__msg">{msg}</div>
        </div>
    )

};

export default Alert;