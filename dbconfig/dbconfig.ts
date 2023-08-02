import mongoose from 'mongoose'

export async function connect() {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017');
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('mongoDB connection is created!!! ');
        })
        connection.on('error', (err) => {
            console.log('Check that mongoDB is running because its causing an error!' + err);
            process.exit();
        })
    } catch (error) {
        console.log('error to connect')
    }
}