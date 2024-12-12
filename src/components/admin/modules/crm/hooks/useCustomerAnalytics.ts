import { useState, useEffect } from 'react';
import { CustomerAnalytics } from '../../../../../types/crm';

export function useCustomerAnalytics() {
  const [analytics, setAnalytics] = useState<CustomerAnalytics>({
    metrics: [
      {
        label: 'Total Customers',
        value: 156,
        trend: 12.5
      },
      {
        label: 'Active Customers',
        value: 134,
        trend: 8.3
      },
      {
        label: 'Average Spend',
        value: '£245',
        trend: 15.2
      },
      {
        label: 'Customer Retention',
        value: '87%',
        trend: 5.7
      }
    ],
    charts: {
      revenue: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Revenue',
            data: [3000, 3500, 4200, 4800, 5100, 5600],
            borderColor: 'rgb(249, 115, 22)',
            tension: 0.4
          }
        ]
      },
      services: {
        labels: ['Regular', 'Deep Clean', 'End of Tenancy', 'Oven'],
        datasets: [
          {
            label: 'Service Distribution',
            data: [45, 25, 20, 10],
            backgroundColor: [
              'rgba(249, 115, 22, 0.8)',
              'rgba(249, 115, 22, 0.6)',
              'rgba(249, 115, 22, 0.4)',
              'rgba(249, 115, 22, 0.2)'
            ]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom' as const
          }
        }
      }
    }
  });

  useEffect(() => {
    // In a real application, you would fetch analytics data here
    // For now, we're using static data
  }, []);

  return analytics;
}