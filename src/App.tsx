import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/joy';
import Header from './components/common/Header';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import MadaSnackbar from './components/common/MadaSnackbar';

const App = () => {
  return (
    <>
      <MadaSnackbar />
      <Header />
      <Box sx={{ mt: 5, marginRight: 'auto', marginLeft: 'auto' }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
