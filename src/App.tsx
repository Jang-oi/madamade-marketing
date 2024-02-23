import { Route, Routes, useNavigate } from 'react-router-dom';
import { Box } from '@mui/joy';
import Header from './components/common/Header';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import MadaSnackbar from './components/common/MadaSnackbar';
import License from './pages/License';
import React, { useEffect } from 'react';
import useLicenseCheck from './hooks/useLicenseCheck';
import LoadingComponent from './components/common/LoadingComponent';

const App = () => {
  const { checkLicense, isLoading } = useLicenseCheck();
  useEffect(() => {
    checkLicense();
  }, []);
  if (isLoading) return <LoadingComponent />;

  return (
    <>
      <MadaSnackbar />
      {/*<Header />*/}
      <Box sx={{ mt: 5, marginRight: 'auto', marginLeft: 'auto' }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/license" element={<License />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </>
  );
};

export default App;
