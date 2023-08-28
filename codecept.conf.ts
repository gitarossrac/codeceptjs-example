export const config: CodeceptJS.MainConfig = {
  tests: 'tests/e2e/*.Test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.google.hu/',
      show: true
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'codeceptjs-example'
}