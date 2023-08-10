const  Page = ({params}) => {
  console.log(params.id)
  return <div className={'h-100 w-100 bg-amber-500'}>My Post:{params.id} </div>
}
export default Page;