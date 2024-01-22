import SearchTemplate from "../components/common/SearchTemplate";
import {useRecoilValue} from "recoil";
import {shoppingDataState} from "../recoil/shoppingData/atom";
import ShoppingCard from "../components/Search/ShoppingCard";
import {formatDate, setLocaleString} from "../utils/commonUits";
import {Stack} from "@mui/joy";
import ShoppingModal from "../components/Search/ShoppingModal";

const Main = () => {

    const shoppingData = useRecoilValue(shoppingDataState);
    return (
        <>
            <SearchTemplate/>
            <Stack spacing={2} sx={{px: {xs: 2, md: 4}, pt: 2, minHeight: 0}}>
                <Stack spacing={2} sx={{overflow: 'auto'}}>
                    {shoppingData.length > 0 && shoppingData.map((shoppingItem: any, shoppingIndex) => {
                        const {
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
                            keepCnt
                        } = shoppingItem;
                        return (
                            <ShoppingCard
                                imageUrl={imageUrl}
                                productTitle={productTitle}
                                openDate={formatDate(openDate)}
                                price={setLocaleString(Number(price))}
                                deliveryFeeContent={setLocaleString(Number(deliveryFeeContent))}
                                reviewCount={reviewCount}
                                purchaseCnt={setLocaleString(purchaseCnt)}
                                originalMallProductId={originalMallProductId}
                                mallProductUrl={mallProductUrl}
                                scoreInfo={scoreInfo}
                                keepCnt={keepCnt}
                            />
                        )
                    })}
                </Stack>
            </Stack>
            <ShoppingModal/>
        </>
    );
};

export default Main;