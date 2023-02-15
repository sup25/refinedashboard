import { useList } from "@pankod/refine-core";
import { Box, Typography, Stack, } from "@pankod/refine-mui";
import {
    PieChart,
    PropertyReferrals,
    TotalRevenue,
    PropertyCard,
    TopAgent
} from 'components'

const home = () => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="11142d">
                Dashboard
            </Typography>

            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="properties for sale"
                    value={694}
                    series={[75, 25]}
                    colors={['#475be8', '#e4b8ef']}
                />
                <PieChart
                    title="properties for Rent"
                    value={550}
                    series={[60, 40]}
                    colors={['#475ae8', '#e4e8ef']}
                />
                <PieChart
                    title="Total customer"
                    value={5694}
                    series={[75, 25]}
                    colors={['#575be8', '#ef48ef']}
                />
                <PieChart
                    title="properties for Cities"
                    value={333}
                    series={[75, 25]}
                    colors={['#475be8', '#e548ef']}
                />
            </Box>

            <Stack mt="25px" width="100%"
                direction={{ xs: 'column', lg: 'row' }} gap={4}>
                <TotalRevenue />
                <PropertyReferrals />

            </Stack>
        </Box>

    )
}

export default home