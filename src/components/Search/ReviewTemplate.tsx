import { useEffect, useState } from 'react';
import { axiosAPI } from '../../utils/axios';
import { useRecoilState, useRecoilValue } from 'recoil';
import { shoppingDetailModalState } from '../../recoil/shoppingData/atom';
import { SnackbarType } from '../common/MadaSnackbar';
import { snackbarState } from '../../recoil/snackbar/atom';
import LoadingComponent from '../common/LoadingComponent';
import { reviewDataState } from '../../recoil/shoppingData/atom';
import { Table, Tooltip } from '@mui/joy';
import { setLocaleString } from '../../utils/commonUits';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const ReviewTemplate = () => {
  const shoppingDetailModal = useRecoilValue(shoppingDetailModalState);
  const [snackbarOption, setSnackbarOption] = useRecoilState<SnackbarType>(snackbarState);
  const [reviewData, setReviewData] = useRecoilState(reviewDataState);
  const [isLoading, setIsLoading] = useState(false);
  const { shoppingDetailData } = shoppingDetailModal as any;

  const abortController = new AbortController();
  const signal = abortController.signal;

  useEffect(() => {
    const { originalMallProductId, reviewCount, mallProductUrl } = shoppingDetailData;
    if (reviewCount === 0) {
      setSnackbarOption({ ...snackbarOption, open: true, isError: true, message: '해당 상품의 리뷰가 0 건입니다.' });
      return;
    }
    if (reviewData.length > 0) return;

    const getReviewData = async () => {
      try {
        setIsLoading(true);
        const response = await axiosAPI(
          '/getReview',
          { mallProductUrl, originalMallProductId, reviewCount },
          { signal },
        );
        const { returnCode, returnMsg, data } = response.data;
        setSnackbarOption({
          ...snackbarOption,
          open: true,
          isError: returnCode < 0,
          message: returnMsg,
        });
        setReviewData(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    getReviewData();

    return () => abortController.abort();
  }, []);

  return (
    <div>
      <Table variant={'outlined'} sx={{ width: '63vw', height: '45vh' }} borderAxis="both">
        <thead>
          <tr>
            <th style={{ width: '10%', textAlign: 'center' }}>순위</th>
            <th style={{ width: '60%', textAlign: 'center' }}>옵션명</th>
            <th style={{ width: '10%', textAlign: 'center' }}>리뷰 개수</th>
            <th style={{ width: '10%', textAlign: 'center' }}>
              리뷰 점수
              <Tooltip title={'총 리뷰 점수 / 리뷰 개수'}>
                <HelpOutlineIcon fontSize={'small'} />
              </Tooltip>
            </th>
            <th style={{ width: '10%', textAlign: 'center' }}>재구매</th>
          </tr>
        </thead>
        <tbody>
          {reviewData &&
            reviewData.map((reviewItem: any, reviewIndex: any) => {
              return (
                <tr key={reviewIndex} style={{ textAlign: 'center', fontSize: '18px' }}>
                  <td>{reviewIndex + 1}</td>
                  <td>{reviewItem.productOptionContent}</td>
                  <td>{setLocaleString(reviewItem.count)}</td>
                  <td>{setLocaleString(reviewItem.reviewScore / reviewItem.count)}</td>
                  <td>{setLocaleString(reviewItem.repurchase)}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      {isLoading && <LoadingComponent />}
    </div>
  );
};

export default ReviewTemplate;
