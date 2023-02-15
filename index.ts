
import createServer from './src/infrastructure/webserver/server/server';

// Start the server
const start = async () => {
  try {
    await createServer();
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();