



('express');

//Load env variables
dotenv.config({path: './config/config.env'});

const app = express();

//Mount routers
app.use('/api/v1/bootcamp', bootcamps);

app.get('/', (req, res) => {    
    res.status(200).json({success: true, data: {"id": 1, "name": "sharad"}})
})

const PORT = process.env.PORT ;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
    );

