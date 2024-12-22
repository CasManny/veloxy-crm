import React from 'react'
import { Card } from '../ui/card'
import {  CheckCircle } from 'lucide-react'
import { ProjectTable } from '../tables/project-table'

const ProjectCard = () => {
  return (
      <Card className='my-10 rounded-lg'>
          <div className="p-5">
              <h1 className='font-bold text-xl mb-2'>Projects</h1>
              <div className="flex items-center">
                  <CheckCircle className='text-brand-1 mr-2 size-4' />
                  <p>30 done this month</p>
              </div>
              <ProjectTable />
          </div>
    </Card>
  )
}

export default ProjectCard