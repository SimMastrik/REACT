// export default function Navbar(props) {
//console.log(props.menu);
//const menu = props.menu;
export default function Navbar({ menu, textLogo }) {
  console.log(menu);
  console.log(textLogo);
  //usare map per iterare le voci del menu
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">Contatti</a>
      </div>
    </nav>
  );
}
