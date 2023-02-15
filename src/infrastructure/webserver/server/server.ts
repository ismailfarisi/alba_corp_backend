import app from './app';
import environment from '../../config/environment';

export default async ()=>{
app.listen(environment.port, () => {
    console.log(`App listening on port ${environment.port}`);
  });
}