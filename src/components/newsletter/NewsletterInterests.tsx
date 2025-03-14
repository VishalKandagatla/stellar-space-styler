
import React from 'react';
import ValueCard from '@/components/ui/value-card';
import { Label } from '@/components/ui/label';
import { NewsletterType } from './types';
import { UseFormReturn } from 'react-hook-form';
import { SubscriptionFormValues } from './types';

interface NewsletterInterestsProps {
  form: UseFormReturn<SubscriptionFormValues>;
  newsletterTypes?: NewsletterType[];
}

export const NewsletterInterests: React.FC<NewsletterInterestsProps> = ({ 
  form,
  newsletterTypes = []
}) => {
  const defaultTypes: NewsletterType[] = [
    {
      id: 'market-trends',
      title: 'Market Trends',
      description: 'Latest updates on market movements',
      icon: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="none" />
        <path d="M3 16.5L7 12.5L11 16.5L21 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      color: 'blue',
    },
    {
      id: 'investment-insights',
      title: 'Investment Insights',
      description: 'Expert analysis and investment ideas',
      icon: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="none" />
        <path d="M6 2H18C18.5304 2 19.0391 2.21071 19.4142 2.58579C19.7893 2.96086 20 3.46957 20 4V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 6H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      color: 'purple',
    },
    {
      id: 'regulatory-updates',
      title: 'Regulatory Updates',
      description: 'Stay informed on policy changes',
      icon: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="none" />
        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      color: 'red',
    }
  ];

  const types = newsletterTypes.length > 0 ? newsletterTypes : defaultTypes;

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
        {types.map((type) => {
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
