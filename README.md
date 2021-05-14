# Webpack AWS Lambda Environment

## Develop
Start writing your lambda function at: `src/index.js`
```
npm run dev
```
Build the bundle file in development mode.

## Debug
```
npm run watch
```
webpack can watch files and recompile
### Configure test event
```
/**
 * test.js
*/
const Main = require('./build/index');

const test = async () => {
    const event = {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
    }
    await Main.handler(event);
};

test();
```
### Environment
Add .env in the root and add environment if you want.
```
/**
 * .env
*/
AWS_REGION={YOUR_AWS_REGION}
AWS_ACCESS_KEY_ID={YOUR_AWS_ACCESS_KEY_ID}
AWS_SECRET_ACCESS_KEY={YOUR_AWS_SECRET_ACCESS_KEY}
```

### Test your event
```
npm run test
```

## Build
```
npm run build
```
Will build the bundle js file and .zip file in `build` folder.

### Deploy
Upload .zip file to your lambda function.
<br>
if you have aws cli, add the `FUNCTION_NAME` in your environment. Environment may look like this
```
/**
 * .env
*/
AWS_REGION={YOUR_AWS_REGION}
AWS_ACCESS_KEY_ID={YOUR_AWS_ACCESS_KEY_ID}
AWS_SECRET_ACCESS_KEY={YOUR_AWS_SECRET_ACCESS_KEY}
FUNCTION_NAME={YOUR_LAMBDA_FUNCTION_NAME}
```
deploy your function by using aws cli
```
npm run deploy
```

## Others
Setting the AWS Credentials. [Link](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html)
<br>
Setting the AWS Region. [Link](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-region.html)