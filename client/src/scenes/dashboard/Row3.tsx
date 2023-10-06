import DashboardBox from "@/components/DashboardBox";
import {useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery} from "@/state/api";
import {useTheme} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import BoxHeader from "@/components/BoxHeader";


const Row3 = () => {
    const {palette} = useTheme();
    const pieColors = [palette.primary[800], palette.primary[500]];

    const {data: kpiData} = useGetKpisQuery();
    const {data: productData} = useGetProductsQuery();
    const {data: transactionData} = useGetTransactionsQuery();


    return (
        <>
            <DashboardBox gridArea="g">
                <BoxHeader title={'List of Products'}
                           sideText={`${productData?.length} products`}/>
                <DataGrid columns={} rows={}/>
            </DashboardBox>
            <DashboardBox gridArea="h"></DashboardBox>
            <DashboardBox gridArea="i"></DashboardBox>
            <DashboardBox gridArea="j"></DashboardBox>
        </>


    );
};

export default Row3;