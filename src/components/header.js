import '../css/App.css';

function Header() {
  return (
    <div className="header">
        <div className="welcome"><h1>Welcome,</h1></div>
        <h1 className="name">Saurav Thakur</h1>
        <div className="btns">
          <div className="resume"><a href="https://drive.google.com/file/d/18tiExMfwK1Cq6BK9xc3c5DOc4jkOi6IR/view">Resume</a></div>
          <div className="github"><a href="https://github.com/saurav188">Github</a></div>
        </div>
    </div>
  );
}

export default Header;