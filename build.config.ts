import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    // {
    //   builder: 'mkdist',
    //   outDir: 'dist/lib',
    //   input: 'src',
    //   ext: 'js',
    //   declaration: true,
    //   format: 'cjs',
    // },
    {
      builder: 'mkdist',
      outDir: 'dist',
      input: 'src',
      ext: 'js',
      declaration: true,
      format: 'esm',
    },
  ],
})
