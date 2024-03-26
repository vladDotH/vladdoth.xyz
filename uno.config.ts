import { defineConfig } from 'unocss'
import { projectsData } from './stores/projects'

export default defineConfig({
  safelist: [
    ...(projectsData
      .flatMap((d) => d.technologies.flatMap((t) => t.classes?.split(' ')))
      .filter((v) => !!v) as string[]),
  ],
})
