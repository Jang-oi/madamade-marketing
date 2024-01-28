import { Table } from '@mui/joy';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { keywordDataState, shoppingDetailModalState } from '../../recoil/shoppingData/atom';
import { SnackbarType } from '../common/MadaSnackbar';
import { snackbarState } from '../../recoil/snackbar/atom';
import { axiosAPI } from '../../utils/axios';
import LoadingComponent from '../common/LoadingComponent';
import { openNewTab, setLocaleString } from '../../utils/commonUits';

const KeywordTemplate = () => {
  const shoppingDetailModal = useRecoilValue(shoppingDetailModalState);
  const [snackbarOption, setSnackbarOption] = useRecoilState<SnackbarType>(snackbarState);
  const [keywordData, setKeywordData] = useRecoilState(keywordDataState);
  const [isLoading, setIsLoading] = useState(false);
  const { shoppingDetailData } = shoppingDetailModal as any;

  useEffect(() => {
    if (keywordData.length > 0 || isLoading) return;
    const { mallProductUrl, productTitle } = shoppingDetailData;
    setIsLoading(true);
    axiosAPI('/getKeyword', { mallProductUrl, productTitle })
      .then((res) => {
        const response = res.data;
        setSnackbarOption({
          ...snackbarOption,
          open: true,
          isError: response.returnCode < 0,
          message: response.returnMsg,
        });
        setKeywordData(response.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onKeywordClick = (encodeValue: string) => {
    const searchUrl = `https://search.shopping.naver.com/search/all?adQuery=${encodeValue}&exagency=true&exrental=true&exused=true&frm=NVSCTAB&npayType=2&origQuery=${encodeValue}&pagingIndex=1&pagingSize=20&productSet=checkout&query=${encodeValue}&sort=review_rel&timestamp=&viewType=list`;
    openNewTab(searchUrl);
  };
  return (
    <div>
      <Table variant={'outlined'} sx={{ width: '63vw', height: '45vh' }} borderAxis="both">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }} rowSpan={2}>
              연관 키워드
            </th>
            <th style={{ textAlign: 'center' }} colSpan={2}>
              월간 검색 수
            </th>
            <th style={{ textAlign: 'center' }} colSpan={2}>
              월평균 클릭 률
            </th>
            <th style={{ textAlign: 'center' }} rowSpan={2}>
              총 상품수
            </th>
            <th style={{ textAlign: 'center' }} rowSpan={2}>
              모바일 웹 검색 합계
            </th>
            {/*            <th style={{ textAlign: 'center' }} rowSpan={2}>
              검색 시 순위
            </th>*/}
          </tr>
          <tr>
            <th style={{ textAlign: 'center', borderRadius: 0 }}>PC</th>
            <th style={{ textAlign: 'center' }}>모바일</th>
            <th style={{ textAlign: 'center' }}>PC</th>
            <th style={{ textAlign: 'center', borderRightWidth: 0 }}>모바일</th>
          </tr>
        </thead>
        <tbody>
          {keywordData &&
            keywordData.map((data: any, index: any) => {
              return (
                <tr key={index}>
                  <td style={{ cursor: 'pointer' }} onClick={() => onKeywordClick(data.relKeyword)}>
                    {data.relKeyword}
                  </td>
                  <td style={{ textAlign: 'center' }}>{setLocaleString(data.monthlyPcQcCnt)}</td>
                  <td style={{ textAlign: 'center' }}>{setLocaleString(data.monthlyMobileQcCnt)}</td>
                  <td style={{ textAlign: 'center' }}>{setLocaleString(data.monthlyAvePcCtr)}%</td>
                  <td style={{ textAlign: 'center' }}>{setLocaleString(data.monthlyAveMobileCtr)}%</td>
                  <td style={{ textAlign: 'center' }}>{setLocaleString(data.total)}</td>
                  <td style={{ textAlign: 'center' }}>{setLocaleString(data.clkCntSum)}</td>
                  {/*                  <td style={{ textAlign: 'center' }}>
                    {data.keywordRate ? setLocaleString(data.keywordRate) : '순위에 없음'}
                  </td>*/}
                </tr>
              );
            })}
        </tbody>
      </Table>
      {isLoading && <LoadingComponent />}
    </div>
  );
};

export default KeywordTemplate;
