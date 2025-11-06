
interface Props {
    title:string;
    text:string;
}

export const HeaderComponent = (parametros:Props) => {

  const { title , text } = parametros;
  
  return (
    <div className="content-center">        
        <h1>{ title }</h1>
        <p>{ text }</p>
    </div>
  )
}