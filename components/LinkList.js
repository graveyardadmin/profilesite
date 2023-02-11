export default function LinkList(props) {
  return(
    <div className="link-list">
      <h3 className="magic">{props.title}</h3>
      {props.children}
    </div>
  );
}