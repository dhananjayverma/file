// Example for Aggregate Lookup property

const _ = require('lodash');


const salesData = [
  { product: 'Product A', region: 'Region A', revenue: 100 },
  { product: 'Product B', region: 'Region B', revenue: 150 },
  { product: 'Product C', region: 'Region A', revenue: 200 },
  { product: 'Product D', region: 'Region C', revenue: 50 },
  { product: 'Product E', region: 'Region B', revenue: 300 }
];

const groupedData = _.groupBy(salesData, 'region');
const totalRevenueByRegion = {};

for (const region in groupedData) {
  const revenueSum = _.sumBy(groupedData[region], 'revenue');
  totalRevenueByRegion[region] = revenueSum;
}

for (const region in totalRevenueByRegion) {
  console.log(`Region: ${region}, Total Revenue: ${totalRevenueByRegion[region]}`);
}
