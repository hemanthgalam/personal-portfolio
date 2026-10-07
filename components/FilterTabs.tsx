import React from 'react';
import { Area } from '../types';

export type AreaFilter = 'all' | Area;

export const AREA_LABELS: Record<Area, string> = {
  backend: 'Backend',
  robotics: 'Robotics',
  ml: 'ML'
};

const OPTIONS: { value: AreaFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'backend', label: AREA_LABELS.backend },
  { value: 'robotics', label: AREA_LABELS.robotics },
  { value: 'ml', label: AREA_LABELS.ml }
];

interface FilterTabsProps {
  value: AreaFilter;
  onChange: (value: AreaFilter) => void;
  label: string;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ value, onChange, label }) => {
  return (
    <div role="group" aria-label={label} className="inline-flex flex-wrap gap-2 font-mono text-xs">
      {OPTIONS.map(option => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={`px-3.5 py-1.5 rounded-lg border font-bold transition-colors ${
              active
                ? 'bg-sky-500/15 border-sky-400 text-sky-300'
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-sky-500/50 hover:text-white'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default FilterTabs;
