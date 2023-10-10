export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:3000/api'
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file'
  },
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.ts'] 
  },
  name: 'api-sample'
}