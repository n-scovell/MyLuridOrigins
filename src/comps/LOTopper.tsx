
interface Ports {
  head:string
}

export default function topper(props: Ports) {

  return (
    <>
      <section className="topper">
        <img src="LO_Logo.svg" alt="Lurid Origins" width="700" height="400" fetchPriority="high" />
        <h2>{props.head} </h2>
      </section>
    </>
  )
}
