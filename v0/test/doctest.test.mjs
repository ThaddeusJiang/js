import doctest from '@supabase/doctest-js'

describe('Doctests', () => {
  // file paths are relative to root of directory
  doctest('/src/mathjs.ts')
  doctest('/src/base64.ts')
})
