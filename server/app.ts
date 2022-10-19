import express, {Request, Response} from 'express';
import CORS from './src/providers/cors';
import * as config from './src/config';
import routes from './src/routes/index'
import path from 'path';

const app = express()
const dev = app.get('env') !== 'production';

async function main() {

	// config
	app.use(CORS.handle)
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

	// Routes - Api

	app.use('/api/', routes)


	const port = config.server.port || 5002
	app.listen(port, () => {
		console.log(
			`Server :: Running @ 'http://localhost:${port}'`,
		)
	})
}
main();