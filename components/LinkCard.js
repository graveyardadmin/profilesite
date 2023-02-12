export default function LinkCard(props) {
  return(
    <p className="background">
      <b className="orange">{props.title}</b> 
      <br/>
      {props.description}
      <br/>
      <br/>
      <a href={props.url}>{props.link_text}</a>
    </p>
  );
}