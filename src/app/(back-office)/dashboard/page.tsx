import HeadingBar from '@/components/backoffice/HeadingBar'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'
import DashboardCharts from '@/components/backoffice/DashboardCharts'
import RecentOrder from '@/components/backoffice/RecentOrder'

export default function DashBoard() {
    return (
      <div className="">
        <HeadingBar title="Dashboard Overview"/>
        {/* Large Charts */}
        <LargeCards />
        {/* Small Charts */}
        <SmallCards />
        {/* Bars */}
        <DashboardCharts />
        {/* Recent order table */}
        <RecentOrder />
      </div>
    );
  }
  