import Job from "./Job";

import data from "../data.json";

const Jobs = () => {
return (

<main>
{data.map((elem)=>{
return (
<Job 
key={elem.id}
title={elem.title}
contractType={elem.contractType} 
country={elem.country}
city={elem.city}
className={elem.className}
/>
);

})}


</main>

)



}

export default Jobs;