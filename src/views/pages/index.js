import azure_pipeline01 from './azure-pipeline01'
import azure_pipeline02 from './azure-pipeline02'
import azure_pipeline03 from './azure-pipeline03'
import azure_pipeline04 from './azure-pipeline04'
import azure_pipeline05 from './azure-pipeline05'
import azure_pipeline06 from './azure-pipeline06'
import azure_pipeline07 from './azure-pipeline07'

const pages = [
  {
    name: 'Page 1',
    meta: {
      title: 'Azure Pipeline'
    },
    component: azure_pipeline01
  },
  {
    name: 'Page 2',
    meta: {
      title: 'Pipeline with the code with YML file'
    },
    component: azure_pipeline02
  },
  {
    name: 'Page 3',
    meta: {
      title: 'Benefits of using YAML'
    },
    component: azure_pipeline03
  },
  {
    name: 'Page 4',
    meta: {
      title: 'YAML: A Preferred Method'
    },
    component: azure_pipeline04
  },
  {
    name: 'Page 5',
    meta: {
      title: 'YAML-based pipeline features'
    },
    component: azure_pipeline05
  },
  {
    name: 'Page 6',
    meta: {
      title: 'A agent to deploy'
    },
    component: azure_pipeline06
  },
  {
    name: 'Page 7',
    meta: {
      title: 'Project'
    },
    component: azure_pipeline07
  },
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages