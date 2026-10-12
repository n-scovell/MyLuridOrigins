// import useStore from '../states/movies'
interface Ports {
  head:string
}
export default function topper(props: Ports) {
  // const count = useStore((state: any)=> state.count)
  return (
    <>
      <div>THIS IS WORKING {props.head}</div>
    </>
  )
}
