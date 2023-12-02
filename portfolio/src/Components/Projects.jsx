import React from 'react'
import { Link } from 'react-router-dom'
const Projects = () => {
  return (
    <>
      <section id="projects" class="bg-light py-5">
        <div class="container">
            <h2 class="text-center">Our Projects</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="project-card">
                        <h3>ToDo App </h3>
                        <p>This ToDo app is built using Props and LocalStorage.</p>
                        <Link  to='/todo' className="btn btn-secondary">ToDo App</Link>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="project-card">
                        <h3>Task Management System </h3>
                        <p>Fullstack Task Management System in MERN </p>
                        <Link  to='/task-manager' className="btn btn-secondary">Task Manager</Link>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="project-card">
                        <h3>Password Generator</h3>
                        <p>This is my password Generator in Reactjs and Bootstrap</p>
                        <Link to="/password-generator" className="btn btn-secondary" > Click Here</Link >
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="project-card">
                        <h3>LetMeToss App</h3>
                        <p>This is a simple coin toss game </p>
                        <Link to="/toss" className="btn btn-secondary" > Click Here</Link >
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Projects
