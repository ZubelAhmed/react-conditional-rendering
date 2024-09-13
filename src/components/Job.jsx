
 const Job = (props) => {

  const bool=true;
  const { className, title,contractType,country,city }=props
  
    return (
        <div className={`job ${className}`}>

       {title?(<h2>{props.title}</h2>):(<h2>Cette offre n'a pas de titre</h2>)} 
     <p>{contractType}-{country}-{city}</p>

     {/* {
     bool===true? <p>Bool est truthy</p> : <p>Bool est falsy</p>
     } */}
      </div>
      
    )
  }


export default Job
