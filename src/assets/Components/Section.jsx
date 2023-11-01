const Section = (props)=>{
return (
    <section>
      <h2>{props.elem.category}</h2>
      <div className='container'>
     {props.elem.images.map((url)=>{
         return <img src={url} alt="" key={url}/>;
 
     })}
    </div>
    </section>
)
}

export default Section