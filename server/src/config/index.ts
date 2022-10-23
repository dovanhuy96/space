import 'dotenv/config';
/**
 * Server Configuration
 * Configurable server object required by the API include settings for the server port (port), a UUID
 * used to encode the authorization token (apiUuid), and the duration of that token (tokenExpiration).
 */
 export const server = {
	port: 9005,
	apiUuid: '0eb14adc-a16e-400c-8f55-7d6c016bb36d',
	tokenExpiration: {
		days: 1,
		hours: 8,
		minutes: 0,
		seconds: 0,
	}
}

export const configMongo =  {
	uri: `mongodb+srv://${process.env.USER_MONGO_DB}:${process.env.PASSWORD_MONGO_DB}@cluster0.eholcyr.mongodb.net/?retryWrites=true&w=majority`,
	connectOptions: {
		bufferCommands: true,
		autoIndex: true,
		autoCreate: true
	}
};