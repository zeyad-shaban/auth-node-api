const settings = {
    development: {
        SECRET_KEY: 'ThePassword'
    }
};


const config = () => {
    if (!process.env.NODE_ENV) return settings.development;
};

module.exports = config()