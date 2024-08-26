/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'sst-test',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    }
  },
  async run() {
    const api = new sst.aws.ApiGatewayV2('MyApi')
    api.route('GET /', {
      handler: 'functions/index.handler',
    })
    api.route('GET /blog', {
      handler: 'functions/blog.handler',
    })
    api.route('GET /account', {
      handler: 'functions/account.handler',
    })
  },
})
