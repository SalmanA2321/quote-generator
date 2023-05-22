const Social = ({imgSrc, handleFunction}) => {
    return (
        <button 
            onClick={handleFunction}
            className='grid place-content-center h-10 w-10 bg-brown rounded-full'
        >
            <img src={imgSrc} />
        </button>
    )
}

export default Social