
interface Ports {
  head:string
}
export default function topper(props: Ports) {

  return (
    <>
      <section className="topper">
        <img src="LuridOrigins_Logo.png" alt="Lurid Origins" width="100%" />
        <h2>{props.head} </h2>
      </section>
    </>
  )
}
