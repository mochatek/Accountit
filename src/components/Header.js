import Logo from "../logo.png";

function Header() {
  return (
    <header id="title">
      <img alt="logo" src={Logo} />
      <h4>Accountit</h4>
    </header>
  );
}

export default Header;
