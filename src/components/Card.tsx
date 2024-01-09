interface CardProps{
  bg: string;
  bgHover: string;
  title: string;
  color?: string;
}

export default function Card(props: CardProps){
  return(
    <div className="card">
        <div className="imgBox">
          <img src={props.bg} alt="Background" />
        </div>
        <img src={props.bgHover} alt="Hover background" className='c3d'/>
        <h2 style={{backgroundColor: props.color ? props.color : '#333'}}>
          {props.title}
        </h2>
    </div>
  )
  
}
