
import { z } from 'zod';
import React from 'react';

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

// Validation schema
export const subscriptionSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  interests: z.array(z.string()).optional(),
});
