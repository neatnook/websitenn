import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '../../../../ui/Card';

interface MetricCardProps {
  label: string;
  value: string | number;
  trend: number;
}

export default function MetricCard({ label, value, trend }: MetricCardProps) {
  const isPositive = trend > 0;

  return (
    <Card>
      <div className="p-6">
        <h3 className="text-sm font-medium text-gray-500">{label}</h3>
        <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        <div className={`mt-2 flex items-center text-sm ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          {isPositive ? (
            <TrendingUp className="w-4 h-4 mr-1" />
          ) : (
            <TrendingDown className="w-4 h-4 mr-1" />
          )}
          <span>{Math.abs(trend)}%</span>
          <span className="ml-2">vs last month</span>
        </div>
      </div>
    </Card>
  );
}