
import React, { useState } from 'react';
import { SectionContainer } from '@/components/ui/section-container';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { SubscriptionFormValues, FrequencyOption } from './types';
import { SubscriptionForm } from './SubscriptionForm';

export const NewsletterSignup = () => {
  const { toast } = useToast();
  const [frequency, setFrequency] = useState<FrequencyOption>('weekly');
  
  const form = useForm<SubscriptionFormValues>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      interests: [],
    },
  });

  const onSubmit = (data: SubscriptionFormValues) => {
    console.log('Form data:', data, 'Frequency:', frequency);
    
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    form.reset();
  };

  return (
    <section className="py-16 bg-secondary/30">
      <SectionContainer>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <Mail className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Subscribe to Our Newsletter</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of investors who receive our personalized market insights delivered straight to their inbox.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-border shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <SubscriptionForm 
                form={form}
                onSubmit={onSubmit}
                frequency={frequency}
                setFrequency={setFrequency}
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
