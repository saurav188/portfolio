import '../css/App.css';

function Project(props) {
  return (
    <div className="project">
      <a href={props.link}>
        <div className="img_container">
          <img src={props.img} alt="Project img"></img>
        </div>
        <div className="description_container">
          <div className="project_title">
            <h3>{props.title}</h3>
          </div>
          <div className="project_description">
            {props.description}
          </div>
          <div className="language_used">
            language used
          </div>
        </div>
      </a>
    </div>
  );
};

export default Project;