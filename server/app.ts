import 'dotenv/config';
import express, {Application, Request, Response} from 'express';
import routes from './src/routes/index'
import path from 'path';
import corsConfig from './src/config/cors.config.';
import cors from 'cors'
import mongoose from 'mongoose'

const app: Application = express()
const dev = app.get('env') !== 'production';

async function main() {
	// config
	app.use(cors(corsConfig))
	app.use(express.json({ limit: '25mb' }));
	app.use(express.urlencoded({ extended: true }))
	app.use(express.static(path.join(__dirname, '/src/build')));

	if (!dev) {
		app.disable('x-powered-by');
		app.get('/', (req: Request, res: Response) => {
		  res.sendFile(path.join(__dirname, '/src/build', 'index.html'));
		});
	}

	// Setup database
	const mongoUrl = process.env.MONGO_URL || '';
	try {
		mongoose.connect(
			mongoUrl, 
			{
				bufferCommands: true,
				autoIndex: true,
				autoCreate: true
			},
			() => {
				console.log("connected mongoose !!!");
			}
		)
	} catch (error) {
		console.log("err: ", error)
		process.exit(1);
	}
	
	// Routes - Api
	app.use('/api/', routes)


	const port = process.env.PORT || 5002
	app.listen(port, () => {
		console.log(
			`Server :: Running @ 'http://localhost:${port}'`,
		)
	})
}
main();