import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react'

function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Animation d'entrée
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      window.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  })

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300) // Attendre la fin de l'animation
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-2xl max-w-5xl w-full max-h-screen overflow-y-auto relative transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
      >
        {/* Bouton fermer */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>

        {/* Carousel d'images */}
        <div className="relative h-[500px] md:h-[60vh] bg-gray-100 rounded-t-2xl overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}${project.images[currentImageIndex]}`}
            alt={`${project.title} - ${currentImageIndex + 1}`}
            className="w-full h-full object-contain transition-opacity duration-300"
            key={currentImageIndex}
          />

          {/* Navigation du carousel */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 bottom-1/3 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-500/70 hover:bg-gray-500/90 rounded-full transition-all hover:scale-110 cursor-pointer"
              >
                <ChevronLeft size={50} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 bottom-1/3 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-500/70 hover:bg-gray-500/90 rounded-full transition-all hover:scale-110 cursor-pointer"
              >
                <ChevronRight size={50} />
              </button>

              {/* Indicateurs */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'w-8 bg-slate-400'
                        : 'w-2 bg-slate-400'
                    }`}
                  />
                ))}
              </div>div
            </>
          )}
        </div>

        {/* Informations */}
        <div className="p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary-dark">
            {project.title}
          </h2>
          <p className="text-gray-500 mb-6">{project.date}</p>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-primary-dark">
              Technologies utilisées
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Liens */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              <Github size={20} />
              Voir sur GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary-dark text-white hover:bg-primary font-semibold rounded-lg transition-all duration-300"
              >
                <ExternalLink size={20} />
                Voir la démo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal