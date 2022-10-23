import mongoose from 'mongoose'
import { configMongo } from '../config';

const connectToMongo = async () => {
  try {
		mongoose.connect(
			configMongo.uri, 
			configMongo.connectOptions,
			() => {
				console.log("connected mongoose !!!");
			}
		)
	} catch (error) {
		console.log("err: ", error)
		process.exit(1);
	}
}
export default connectToMongo;