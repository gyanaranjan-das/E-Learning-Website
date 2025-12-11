const mongoose =require('mongoose');

const connectionDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected: ${conn.connection.host}');
    }catch(error){
        console.error('Erro: ${erroe.message}');
        process.exit(1);
    }
};

module.exports = connectionDB;