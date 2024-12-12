import React from 'react';
import StatsCard from './components/StatsCard';
import ReviewManager from './reviews/ReviewManager';
import { useAdmin } from './context/AdminContext';

const stats = [
  { title: 'Total Bookings', value: 156 },
  { title: 'Pending Bookings', value: 12 },
  { title: 'Reviews', value: 127 },
  { title: 'Average Rating', value: '4.8' },
];

export default function DashboardOverview() {
  const { setActiveTab } = useAdmin();

  React.useEffect(() => {
    setActiveTab('overview');
  }, [setActiveTab]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>
      <div className="mt-8">
        <ReviewManager />
      </div>
    </div>
  );
}