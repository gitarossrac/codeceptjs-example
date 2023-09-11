export const config: CodeceptJS.MainConfig = {
  tests: 'tests/e2e/*.Test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.nemzetisport.hu',
      show: true
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'codeceptjs-example'
}