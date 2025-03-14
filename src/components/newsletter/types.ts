
export type SubscriptionFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  interests: string[];
};

export type NewsletterType = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: 'blue' | 'purple' | 'red' | 'green' | 'yellow';
};

export type FrequencyOption = 'daily' | 'weekly' | 'monthly';
