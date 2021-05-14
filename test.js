const Main = require('./build/index');

/**
 * set AWS credentials: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html
 * set AWS region: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-region.html
 */
const test = async () => {
    /**
     * Configure test event
    */
    const event = {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3"
    }
    await Main.handler(event);
};

test();