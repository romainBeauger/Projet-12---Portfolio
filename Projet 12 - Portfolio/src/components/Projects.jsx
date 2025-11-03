import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projectsData } from '../data/projectsData'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section 
      id='projects'
      className='relative py-20 bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]'
    >
      {/* Séparateur arrondi en HAUT - vient de Skills */}
      <div className="absolute top-0 left-0 w-full -mt-10">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            fill="#f9fafb"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>

      <div className='mt-10 container mx-auto px-4 md:px-8'>
        <div className='animate-fade-in'>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-50">
            Mes Projets
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12">
              Une sélection de mes réalisations
          </p>

          {/* Grille de projets */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-15'>
            {projectsData.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modale */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Séparateur arrondi */}
      <div className="absolute bottom-0 left-0 w-full ">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            fill="#f9fafb"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>


      

    </section>
  )
}