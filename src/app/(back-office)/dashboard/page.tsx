import HeadingBar from '@/components/backoffice/HeadingBar'
import LargeCards from '@/components/backoffice/LargeCards'
import SmallCards from '@/components/backoffice/SmallCards'

export default function DashBoard() {
    return (
      <div className="">
        <HeadingBar title="Dashboard Overview"/>
        {/* Large Charts */}
        <LargeCards />
        {/* Small Charts */}
        <SmallCards />
        {/* Bars */}
        {/* Recent order table */}
      </div>
    );
  }
  