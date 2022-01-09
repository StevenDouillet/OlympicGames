const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://root:1234@olympicgamesdb.ommrs.mongodb.net/olympic_games?retryWrites=true&w=majority', { useNewUrlParser: true });
    } catch (err) {
        console.error('impossible de se connecter à la base de donnée', err);
        throw err;
    }

    console.info('connection to the database established...');
}

module.exports = connect;
