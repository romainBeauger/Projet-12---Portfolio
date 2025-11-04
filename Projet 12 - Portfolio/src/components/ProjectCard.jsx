import { Github, ExternalLink } from 'lucide-react'


export default function ProjectCard({project, index, onClick}) {
  return (

    <div
      onClick= {onClick}
      className= "bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}    
    >
      {/* Image du projet */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}${project.images[0]}`}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay au hover */}
        <div className="absolute inset-0 bg-primary-dark/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className='text-white text-xl font-semibold'>
          Voir le projet
        </span>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <h3 className='text-2xl font-bold mb-3 text-primary-dark'>
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span 
              key={tech}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Liens */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-dark hover:text-white transition-all duration-300"
          >
            <Github size={20} />
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-dark hover:text-white transition-all duration-300"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}