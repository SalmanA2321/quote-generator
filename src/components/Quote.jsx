const Quote = ({quote, author}) => {
    return (
        <div className='card'>
            <p className='text-3xl w-[500px] text-center'>“{quote}”</p>
            <p className='text-3xl italic'>-{author}</p>
        </div>
    )
}

export default Quote