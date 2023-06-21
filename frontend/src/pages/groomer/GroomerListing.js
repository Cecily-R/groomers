
const GroomerListing = (props) => {
  return (
    <>
      <h3>{props.groomer.name}</h3>
      <p>{props.groomer.location}</p>
      <p>{props.groomer.rating}</p>
      {props.groomer.services.map ((service) => (
          <p>{service}</p>
      ))}  
    </>
  )
}

export default GroomerListing;