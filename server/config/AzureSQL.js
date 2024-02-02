const sqlConfig = {
    user: 'eriksmith85', // better stored in an app setting such as process.env.DB_USER
    password: 'Sher-Bear@14', // better stored in an app setting such as process.env.DB_PASSWORD
    server: 'esmith.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: 'hospital-records', // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true
    }
}

module.exports = sqlConfig;