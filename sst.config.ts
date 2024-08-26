/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  // Define general app config.
  app(input) {
    return {
      name: 'sst-test',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    }
  },
  // Define your graph of resources.
  async run() {
    const api = new sst.aws.ApiGatewayV2('MyApi')

    // Split folder setup with separate bundling.
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
