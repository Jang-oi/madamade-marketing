import ErrorView from '../components/common/ErrorView';
import { axiosAPI } from '../utils/axios';

const License = () => {
  const onLicenseButtonHandler = async () => {
    await axiosAPI('/setLicense', {});
  };

  return (
    <ErrorView code={'라이센스 갱신이 필요합니다.'} buttonValue={'갱신하기'} buttonCallBack={onLicenseButtonHandler} />
  );
};

export default License;
