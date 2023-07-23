
const getEnv = (key) => { 
    console.log(process.env);
    if (process.env[key]) {
        return process.env[key];
    } else {
        throw new Error(`Environment variable ${key} is not set`);
    }
}

const setEnv = (key, value) => { 
    process.env[key] = value;
}

export { getEnv, setEnv };