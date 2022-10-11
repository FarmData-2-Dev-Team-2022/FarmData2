
import express, { request } from 'express'
import pool from './db'

const app = express()

// Home Route
app.get('/', async (req, res) => {
    res.json({
        message: 'FarmData server'
    })
})

const port = process.env.PORT || 8000

// Listening Server
app.listen(port, () => {
    console.log(`Server is up at port:${port}`)
})

app.get('/test', async (req, res) => {
    let conn
    try {
        conn = await pool.getConnection()

        let sql = `SELECT * FROM farm_asset`
        let result = await conn.query(sql)

        res.send(result)
    } catch (error) {
        throw error
    } finally {
        if (conn) {
            conn.release()
        }
    }
})

// use : to specify route parameters
app.get("/user/:userid?", async (req, res) => {
    let conn
    try {
        conn = await pool.getConnection()
        if (req.params.userid == null) {
            var sql = `SELECT name, mail FROM users`
        } else {
            var sql = `SELECT name, mail FROM users WHERE uid = ${req.params.userid}`
        }
        let result = await conn.query(sql)

        res.send(result)
    } catch (error) {
        throw error
    } finally {
        if (conn) {
            conn.release()
        }
    }

})

// use : to specify route parameters
app.get("/assetbywhom/:username?", async (req, res) => {
    let conn
    try {
        conn = await pool.getConnection()
        if (req.params.userid == null) {
            var sql = `SELECT farm_asset.id, farm_asset.name AS assetname, users.name AS username FROM farm_asset INNER JOIN users ON users.uid = farm_asset.uid`
        } else {
            var sql = `SELECT farm_asset.id, farm_asset.name AS assetname, users.name AS username FROM farm_asset INNER JOIN users ON users.uid = farm_asset.uid WHERE users.name = ${req.params.username}`
        }
        let result = await conn.query(sql)

        res.send(result)
    } catch (error) {
        throw error
    } finally {
        if (conn) {
            conn.release()
        }
    }

})