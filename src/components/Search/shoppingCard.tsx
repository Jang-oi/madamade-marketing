import React from 'react';
import {Box, Button, Card, CardContent, Stack, Typography} from "@mui/joy";

const ShoppingCard = ({
                          imageUrl,
                          productTitle,
                          openDate,
                          price,
                          deliveryFeeContent,
                          reviewCount,
                          purchaseCnt,
                          originalMallProductId
                      }: any) => {

    const onDetailButtonHandler = () => {
        console.log(originalMallProductId);
    }

    return (
        <Card size={"md"}>
            <div>
                <Typography level="title-lg">{productTitle}</Typography>
                <Typography level="body-sm">{openDate}</Typography>
            </div>
            <img src={imageUrl} alt={""}/>
            <CardContent orientation="horizontal">
                <div>
                    <Typography level="body-xs">상품가격</Typography>
                    <Typography fontSize="lg" fontWeight="lg" sx={{color: 'red'}}>
                        {price}원
                    </Typography>
                </div>
                <div>
                    <Typography level="body-xs">배송비</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {deliveryFeeContent}원
                    </Typography>
                </div>
                <div>
                    <Typography level="body-xs">리뷰</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {reviewCount}
                    </Typography>
                </div>
                <div>
                    <Typography level="body-xs">구매건수</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        {purchaseCnt}
                    </Typography>
                </div>
                <Button variant="solid" size="md" color="primary"
                        sx={{ml: 'auto', alignSelf: 'center', fontWeight: 600}}
                        onClick={onDetailButtonHandler}>
                    자세히보기</Button>
            </CardContent>
        </Card>
    );
};

export default ShoppingCard;