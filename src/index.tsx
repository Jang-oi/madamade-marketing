import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {HashRouter} from 'react-router-dom';
import { RecoilRoot } from 'recoil';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
  </HashRouter>,
);

reportWebVitals();
