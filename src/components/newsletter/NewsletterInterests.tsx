
import React from 'react';
import ValueCard from '@/components/ui/value-card';
import { Label } from '@/components/ui/label';
import { BarChart3, Newspaper, Bell } from 'lucide-react';
import { NewsletterType } from './types';
import { UseFormReturn } from 'react-hook-form';
import { SubscriptionFormValues } from './types';

interface NewsletterInterestsProps {
  form: UseFormReturn<SubscriptionFormValues>;
}

export const NewsletterInterests: React.FC<NewsletterInterestsProps> = ({ form }) => {
  const newsletterTypes: NewsletterType[] = [
    {
      id: 'market-trends',
      title: 'Market Trends',
      description: 'Latest updates on market movements',
      icon: BarChart3,
      color: 'blue',
    },
    {
      id: 'investment-insights',
      title: 'Investment Insights',
      description: 'Expert analysis and investment ideas',
      icon: Newspaper,
      color: 'purple',
    },
    {
      id: 'regulatory-updates',
      title: 'Regulatory Updates',
      description: 'Stay informed on policy changes',
      icon: Bell,
      color: 'red',
    },
  ];

  const toggleInterest = (id: string) => {
    const currentInterests = form.getValues('interests');
    if (currentInterests.includes(id)) {
      form.setValue(
        'interests',
        currentInterests.filter(item => item !== id)
      );
    } else {
      form.setValue('interests', [...currentInterests, id]);
    }
  };

  return (
    <div>
      <Label className="mb-3 block">Newsletter Interests</Label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {newsletterTypes.map((type) => {
          const isSelected = form.watch('interests').includes(type.id);
          return (
            <ValueCard
              key={type.id}
              color={type.color}
              title={type.title}
              description={type.description}
              icon={<type.icon className="h-3 w-3 text-white" />}
              onClick={() => toggleInterest(type.id)}
              bordered={isSelected}
              className={isSelected ? 'ring-2 ring-primary ring-offset-2' : ''}
            />
          );
        })}
      </div>
    </div>
  );
};
