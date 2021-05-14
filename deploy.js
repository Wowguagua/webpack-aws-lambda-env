const { exec } = require("child_process");

exec(`aws lambda update-function-code --function-name ${process.env.FUNCTION_NAME} --zip-file fileb://build/bundle.zip `, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});