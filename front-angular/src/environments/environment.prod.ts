export const environment = {
  production: true,
  environment: $ENV.ENVIRONMENT,
  APIKeys: {
    SomeAPIKey: $ENV.SomeAPIKey,
    SomeOtherAPIKey: $ENV.SomeOtherAPIKey
  },
   test:$ENV.test

};
console.log($ENV)
console.log(environment)
