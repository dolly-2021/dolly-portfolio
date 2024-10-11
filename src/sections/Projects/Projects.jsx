import React from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} link='http://github.io' h3="Social Media App" p="Connecting lives across globe" />
            <ProjectCard src={viberr} link='http://github.io' h3="Coronavirus Tracker App" p="Real-time updates for coronavirus cases" />
        </div>
    </section>
  );
}

export default Projects