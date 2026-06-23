const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'style={{background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'}}>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center '>{props.id+1}</h2>
            <div>
                <p className='text-xl text-shadow-2xs leading-relaxed text-white mb-14'>{props.intro}</p>
                <div className='flex justify-between'>
                    <button className={`${props.color} text-white font-medium px-8 py-2 rounded-full`}>{props.tag}</button>
                    <button className={`${props.color} text-white font-medium px-3 py-2 rounded-full`}><i className="ri-arrow-right-line"></i></button>
                </div>    
            </div>
        </div>
  )
}

export default RightCardContent
