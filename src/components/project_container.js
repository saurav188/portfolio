import '../css/App.css';
import Project from './project'
import path_finding from "../pics/path_finding.jpg"
import django_shop from "../pics/django-shop.jpg"
import todo_app from "../pics/todo-app.jpg"
import relax_sound from "../pics/relax-sound.jpg"
import apple_home_page from "../pics/apple-home-page.jpg"

function Project_container() {
    return (
      <div className="project_container">
        <Project 
          title="Path Finding Visualizer" 
          img={path_finding} 
          description="
            Algorithms Visualized are:
            A* algorithm,
            dijkstra,
            Breadth First Search(BFS)
          " 
          link='https://path-algo-visualiser.herokuapp.com/'
          language='JavaScript, ReactJS, HTML/SCSS '
        />
        <Project 
          title="Django E-commerce Website" 
          img={django_shop} 
          description="
            CRUD Functionality,
            User Authentications,
            Product Orders,
            Pagination,
            Cart Manipulation,
            Reviewing Products
          " 
          link='https://django-shop-app.herokuapp.com/'
          language='Python, Django, JavaScript, HTML/SCSS'
        />
        <Project 
          title="Todo App" 
          img={todo_app} 
          description="
            Frontend-Backend interaction using API,
            CRUD functionality
          " 
          link='https://frozen-savannah-33670.herokuapp.com/'
          language='Python, Django, JavaScript, ReactJS, HTML/SCSS'
        />
        <Project 
          title="Relax Sound" 
          img={relax_sound} 
          description="
            Change the duration for which the sound plays(max=8hr),
            loops the same sound over and over to optimize memory requirements 
          " 
          link='https://relaxsound.herokuapp.com/'
          language='JavaScript, HTML/SCSS'
        />
        <Project 
          title="Apple Home page Duplicate" 
          img={apple_home_page} 
          description="
            A duplicate page of apple home page(Date:8/12/2020), 
            Potraits my skill to put a design to an actual webpage
          " 
          link='https://apple-home-page-duplicate.herokuapp.com/'
          language='HTML/SCSS,JavaScript'
        />
      </div>
    );
};

export default Project_container;