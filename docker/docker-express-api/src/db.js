
import mariadb from 'mariadb'

const pool = mariadb.createPool({
    host: '172.17.0.1',  
    user: 'farmdata2db',
    password: 'farmdata2db',
    database: 'farmdata2db'
})

export default pool