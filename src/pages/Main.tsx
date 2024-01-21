import SearchTemplate from "../components/common/SearchTemplate";
import {useRecoilValue} from "recoil";
import {shoppingDataState} from "../recoil/shoppingData/atom";
import ShoppingCard from "../components/Search/shoppingCard";
import {formatDate, setLocaleString} from "../utils/commonUits";
import {Grid} from "@mui/joy";

const Main = () => {

    const shoppingData = useRecoilValue(shoppingDataState);
    return (
        <>
            <SearchTemplate/>
            <Grid container direction={"row"} spacing={4} sx={{mt: 5}}>
                {shoppingData.length > 0 && shoppingData.map((shoppingItem: any, shoppingIndex) => (
                    <Grid xs={12} sm={12} md={6} lg={4} xl={3} key={shoppingIndex}>
                        <ShoppingCard imageUrl={shoppingItem.imageUrl} productTitle={shoppingItem.productTitle}
                                      openDate={formatDate(shoppingItem.openDate)}
                                      price={setLocaleString(Number(shoppingItem.price))}
                                      deliveryFeeContent={setLocaleString(Number(shoppingItem.deliveryFeeContent))}
                                      reviewCount={setLocaleString(shoppingItem.reviewCount)}
                                      purchaseCnt={setLocaleString(shoppingItem.purchaseCnt)}
                                      originalMallProductId={shoppingItem.originalMallProductId}/>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Main;