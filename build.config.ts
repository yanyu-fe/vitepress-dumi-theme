import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    {
      builder: 'mkdist',
      ext: 'js',
      outDir: 'dist',
      input: 'src',
      declaration: true,
    },
  ],
})
