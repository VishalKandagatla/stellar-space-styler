
import React from 'react';
import { Label } from '@/components/ui/label';
import { FrequencyOption } from './types';

interface FrequencySelectorProps {
  frequency: FrequencyOption;
  setFrequency: (frequency: FrequencyOption) => void;
}

export const FrequencySelector: React.FC<FrequencySelectorProps> = ({ 
  frequency,
  setFrequency
}) => {
  const options: FrequencyOption[] = ['daily', 'weekly', 'monthly'];
  
  return (
    <div>
      <Label className="mb-3 block">Delivery Frequency</Label>
      <div className="flex flex-wrap gap-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`px-4 py-2 rounded-lg border ${
              frequency === option
                ? 'bg-primary/10 border-primary text-primary font-medium'
                : 'border-border bg-background hover:bg-secondary/30'
            } transition-colors`}
            onClick={() => setFrequency(option as FrequencyOption)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};
