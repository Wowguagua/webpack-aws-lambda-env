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

## Other
Setting the AWS Credentials. [Link](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html)
<br>
Setting the AWS Region. [Link](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-region.html)