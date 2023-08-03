import {styled} from "@mui/system";
import {Box} from "@mui/material";

const DashboardBox = styled(Box)(({theme}) => ({
    backgroundColor:theme.palette.background.light,
    borderRadius: "1rem",

}))

export default DashboardBox