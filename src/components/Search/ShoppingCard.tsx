import React from 'react';
import { AspectRatio, Card, CardContent, CardOverflow, Link, Stack, Tooltip, Typography } from '@mui/joy';
import Rating from '@mui/material/Rating';
import ButtonBase from '@mui/material/ButtonBase';
import { shoppingDetailModalState } from '../../recoil/shoppingData/atom';
import { useSetRecoilState } from 'recoil';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { openNewTab, setLocaleString } from '../../utils/commonUits';

const ShoppingCard = ({
  shoppingIndex,
  imageUrl,
  productTitle,
  openDate,
  price,
  deliveryFeeContent,
  reviewCount,
  purchaseCnt,
  originalMallProductId,
  mallProductUrl,
  scoreInfo,
  keepCnt,
}: any) => {
  const setShoppingDetailModal = useSetRecoilState(shoppingDetailModalState);

  const onDetailButtonHandler = () => {
    setShoppingDetailModal({
      showModal: true,
      shoppingDetailData: { originalMallProductId, reviewCount, mallProductUrl, productTitle },
    });
  };

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      key={shoppingIndex}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        '&:hover': { borderColor: 'var(--joy-palette-neutral-outlinedDisabledBorder)' },
      }}
    >
      <CardOverflow
        sx={{
          mr: { xs: 'var(--CardOverflow-offset)', sm: 0 },
          mb: { xs: 0, sm: 'var(--CardOverflow-offset)' },
          '--AspectRatio-radius': {
            xs: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0',
            sm: 'calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px)) 0 0 calc(var(--CardOverflow-radius) - var(--variant-borderWidth, 0px))',
          },
        }}
      >
        <ButtonBase
          onClick={() => {
            openNewTab(mallProductUrl);
          }}
        >
          <AspectRatio
            ratio="1"
            flex
            sx={{
              minWidth: { sm: 120, md: 160 },
              '--AspectRatio-maxHeight': { xs: '160px', sm: '9999px' },
            }}
          >
            <img alt="" src={imageUrl} />
          </AspectRatio>
        </ButtonBase>
      </CardOverflow>
      <CardContent>
        <Stack spacing={1} direction="row" justifyContent="space-between" alignItems="flex-start">
          <div>
            <ButtonBase onClick={onDetailButtonHandler}>
              <Typography
                level="body-lg"
                sx={{ '&:hover': { textDecoration: 'underLine', textDecorationThickness: '3px' } }}
              >
                <strong>{productTitle}</strong>
              </Typography>
            </ButtonBase>
            <Typography level="title-md">{openDate}</Typography>
          </div>
        </Stack>
        <Stack spacing="0.25rem 1rem" direction="row" useFlexGap flexWrap="wrap" sx={{ my: 0.25 }}>
          <Tooltip title="배송비">
            <Typography level="body-xs" startDecorator={<LocalShippingIcon />}>
              {deliveryFeeContent}
            </Typography>
          </Tooltip>
          <Tooltip title="구매건수">
            <Typography level="body-xs" startDecorator={<ShoppingCartIcon />}>
              {purchaseCnt}
            </Typography>
          </Tooltip>
          <Tooltip title="찜하기">
            <Typography level="body-xs" startDecorator={<FavoriteIcon />}>
              {keepCnt}
            </Typography>
          </Tooltip>
        </Stack>
        <Stack direction="row" sx={{ mt: 'auto' }}>
          <Typography
            level="title-sm"
            startDecorator={
              <>
                <Rating name="half-rating-read" value={scoreInfo} precision={0.5} readOnly />
              </>
            }
            sx={{ display: 'flex', gap: 1 }}
          >
            {`${setLocaleString(reviewCount)} (${scoreInfo})`}
          </Typography>
          <Typography level="title-lg" sx={{ flexGrow: 1, textAlign: 'right' }}>
            <strong>{price}원</strong>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ShoppingCard;
