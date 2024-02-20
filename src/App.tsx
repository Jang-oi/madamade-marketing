import {Route, Routes, useNavigate} from 'react-router-dom';
import {Box} from '@mui/joy';
import Header from './components/common/Header';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import MadaSnackbar from './components/common/MadaSnackbar';
import License from "./pages/License";
import React, {useEffect, useState} from "react";
import {axiosAPI} from "./utils/axios";
import LoadingComponent from "./components/common/LoadingComponent";

const App = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axiosAPI('/getLicense', {})
            .then((res) => {
                const response = res.data;
                const {returnCode} = response;

                if (returnCode > 0) navigate('/');
                else navigate('/license');
            })
            .catch()
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <LoadingComponent/>;

    return (
        <>
            <MadaSnackbar/>
            {/*<Header />*/}
            <Box sx={{mt: 5, marginRight: 'auto', marginLeft: 'auto'}}>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/license" element={<License/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Box>
        </>
    );
};

export default App;
