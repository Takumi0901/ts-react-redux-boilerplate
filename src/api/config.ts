interface Config {
  baseAPIUrl: string
}

const base = {}

function configure(env): Config {
  switch (env) {
    case 'development':
      return {
        ...base,
        baseAPIUrl: 'https://qiita.com/api/v2'
      }
    case 'production':
      return {
        ...base,
        baseAPIUrl: 'https://qiita.com/api/v2'
      }
    default:
      return {
        ...base,
        baseAPIUrl: 'https://qiita.com/api/v2'
      }
  }
}

export default configure(process.env.NODE_ENV)
