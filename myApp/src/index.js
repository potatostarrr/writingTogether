import dva from 'dva';
import './index.css';
import {browserHistory,} from 'dva/router';
import cookie from 'react-cookie'

// 1. Initialize
 const app = dva({
   history: browserHistory,
   onError(e) {
     console.log(e.message);
     switch (e.status){
       case 401:
         cookie.remove('token');
         browserHistory.push('/expired');
         break;
       default:
         return null;
     }
   },
 });
// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/models'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
