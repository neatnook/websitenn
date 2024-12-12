import React from 'react';
import { BookingFiltersProps } from '../../../../../types/booking';
import { STATUS_OPTIONS, SERVICE_OPTIONS, DATE_RANGE_OPTIONS } from '../constants';
import FilterSelect from '../../../../common/FilterSelect';

export default function BookingFilters({ filters, onFilterChange }: BookingFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-wrap gap-4">
      <FilterSelect
        id="status"
        label="Status"
        value={filters.status}
        options={STATUS_OPTIONS}
        onChange={(value) => onFilterChange({ ...filters, status: value as BookingFiltersProps['filters']['status'] })}
      />

      <FilterSelect
        id="serviceType"
        label="Service Type"
        value={filters.serviceType}
        options={SERVICE_OPTIONS}
        onChange={(value) => onFilterChange({ ...filters, serviceType: value as BookingFiltersProps['filters']['serviceType'] })}
      />

      <FilterSelect
        id="dateRange"
        label="Date Range"
        value={filters.dateRange}
        options={DATE_RANGE_OPTIONS}
        onChange={(value) => onFilterChange({ ...filters, dateRange: value as BookingFiltersProps['filters']['dateRange'] })}
      />
    </div>
  );
}