import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosAPI } from '../utils/axios';
import { useRecoilState } from 'recoil';
import { SnackbarType } from '../components/common/MadaSnackbar';
import { snackbarState } from '../recoil/snackbar/atom';

const useLicenseCheck = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [snackbarOption, setSnackbarOption] = useRecoilState<SnackbarType>(snackbarState);

  const checkLicense = async () => {
    setIsLoading(true);

    try {
      const res = await axiosAPI('/getLicense', {});
      const { returnCode } = res.data;

      if (returnCode > 0) {
        navigate('/');
      } else {
        navigate('/license');
      }
    } catch (error: any) {
      navigate('/license');
      setSnackbarOption({
        ...snackbarOption,
        open: true,
        isError: true,
        message: `오류가 발생했습니다. 담당자에게 화면 캡쳐 부탁드립니다 ${error.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { checkLicense, isLoading };
};

export default useLicenseCheck;
