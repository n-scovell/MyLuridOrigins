// import useStore from '../states/movies'
interface Ports {
  head:string
}
export default function topper(props: Ports) {
  // const count = useStore((state: any)=> state.count)
  return (
    <>
      <section className="topper">
        <img src="LuridOrigins_Logo.png" alt="Lurid Origins" width="100%" />
        <h2>{props.head}</h2>
      </section>
    </>
  )
}
