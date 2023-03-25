const mongoose = require("mongoose");

//connect data
const connectDatabase = () => {
    mongoose.connect('mongodb+srv://livmo:livmo@livmo.raykivf.mongodb.net/BAGNGO?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log(mongoose.connection.db.databaseName + ' database is connected'))
        .catch((err) => console.log('Failed to connect to MongooDB', err));
}

module.exports = {connectDatabase}
