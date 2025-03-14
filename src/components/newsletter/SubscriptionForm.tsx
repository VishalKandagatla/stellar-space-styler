
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { UseFormReturn } from 'react-hook-form';
import { SubscriptionFormValues, FrequencyOption, NewsletterType } from './types';
import { FrequencySelector } from './FrequencySelector';
import { NewsletterInterests } from './NewsletterInterests';

interface SubscriptionFormProps {
  form: UseFormReturn<SubscriptionFormValues>;
  onSubmit: (data: SubscriptionFormValues) => void;
  frequency: FrequencyOption;
  setFrequency: (frequency: FrequencyOption) => void;
  newsletterTypes?: NewsletterType[];
}

export const SubscriptionForm: React.FC<SubscriptionFormProps> = ({
  form,
  onSubmit,
  frequency,
  setFrequency,
  newsletterTypes
}) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Enter your email address" 
                  type="email" 
                  required 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FrequencySelector 
          frequency={frequency}
          setFrequency={setFrequency}
        />

        <NewsletterInterests form={form} newsletterTypes={newsletterTypes} />

        <div className="pt-4">
          <Button type="submit" className="w-full" size="lg">
            <Mail className="mr-2 h-4 w-4" />
            Subscribe Now
          </Button>
          
          <p className="text-xs text-center text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
            You can unsubscribe at any time.
          </p>
        </div>
      </form>
    </Form>
  );
};
