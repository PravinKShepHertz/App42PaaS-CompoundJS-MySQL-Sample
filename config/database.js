module.exports = {
    development: {
        driver: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'compoundjs_dev'
    },
    test: {
        driver: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'compoundjs_test'
    },
    production: {
        driver: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'compoundjs_production'
    }
};
