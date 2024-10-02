import mongoose from "mongoose";

type ConnectionObject = {
    isConnected? : number
}


const connection: ConnectionObject = {}


async function dbConnection(): Promise<void> {
    if(connection.isConnected){
        console.log('already connect to db');
        return ;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URLn || '' , {})
        connection.isConnected =  db.connections[0].readyState;

        console.log('connect to db successfully');
    
    } catch (error) {
        console.log('databese failed to connect' , error);
        process.exit(1);
    }
}

export default dbConnection;