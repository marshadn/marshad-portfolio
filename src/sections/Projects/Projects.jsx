import styles from './ProjectsStyles.module.css';
import hospital from '../../assets/hospital.jpg';
import keeperApp from '../../assets/note.jpg';
import portfolio from '../../assets/portfolio.jpg';
import todo from '../../assets/todo.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={hospital}
          link="https://github.com/marshadn/Hospital-Management-System"
          h3="Hospital Management System"
          p="Hospital Web App"
        />
        <ProjectCard
          src={keeperApp}
          link="https://github.com/marshadn/react-keepernote-app"
          h3="Note Taking App"
          p="Keepernote Web App"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/marshadn/marshad-portfolio"
          h3="Portfolio"
          p="Personal Portfolio"
        />
        <ProjectCard
          src={todo}
          link="https://github.com/marshadn/react-basic-to-do-app"
          h3="To-Do"
          p="Basic To-Do App"
        />
      </div>
    </section>
  );
}

export default Projects;
