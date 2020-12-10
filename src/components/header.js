import '../css/App.css';

function Header() {
  return (
    <div className="header">
        <div className="welcome"><h1>Welcome,</h1></div>
        <h1 className="name">Saurav Thakur</h1>
        <div className="btns">
          <div className="resume"><a href="#">Resume</a></div>
          <div className="github"><a href="#">Github</a></div>
        </div>
    </div>
  );
}

export default Header;