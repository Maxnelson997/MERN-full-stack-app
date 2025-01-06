const Alert = ({ msg }) => {
    return (
        <div className='bg-red-500 text-white p-2 rounded-md mt-6 text-sm'>
            <i class="fa-solid fa-triangle-exclamation" />
            {msg}
        </div>
    )

};

export default Alert;