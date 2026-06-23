import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 overflow-hidden relative rounded-4xl transition-transform duration-300 hover:scale-105 cursor-pointer'>
        <img className='h-full w-full object-cover' src={props.img}alt='my img'/>
        <RightCardContent id={props.id} tag={props.tag} intro={props.intro} color={props.color}/>
    </div>
  )
}

export default RightCard
