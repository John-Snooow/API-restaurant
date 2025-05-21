export default {
    client: 'sqlite3',
    connection: {
        filename: './src/database/database.db',
    },
    
    useNullAsDefault: true,

    migrations: {
        extemsion: 'ts',
        directory: './src/database/migrations'
    },

    seeds: {
        extemsion: 'ts',
        directory: './src/database/seeds'
    }
}