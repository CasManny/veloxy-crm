import { CheckCircle } from 'lucide-react'
import { ProjectTable } from '../tables/project-table'

const ProjectCard = () => {
  return (
      <div className='my-10 rounded-lg w-full bg-white'>
          <div className="p-5 w-full">
              <h1 className='font-bold text-base sm:text-xl mb-2'>Projects</h1>
              <div className="flex items-center">
                  <CheckCircle className='text-brand-1 mr-2 size-4' />
                  <p>30 done this month</p>
              </div>
              <ProjectTable />
          </div>
    </div>
  )
}

export default ProjectCard