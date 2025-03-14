
import React, { useState } from 'react';
import { SectionContainer } from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Check, BarChart3, Newspaper, Bell } from 'lucide-react';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import ValueCard from '@/components/ui/value-card';

type SubscriptionFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  interests: string[];
};

export const NewsletterSignup = () => {
  const { toast } = useToast();
  const [frequency, setFrequency] = useState('weekly');
  
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

  const newsletterTypes = [
    {
      id: 'market-trends',
      title: 'Market Trends',
      description: 'Latest updates on market movements',
      icon: BarChart3,
      color: 'blue' as const,
    },
    {
      id: 'investment-insights',
      title: 'Investment Insights',
      description: 'Expert analysis and investment ideas',
      icon: Newspaper,
      color: 'purple' as const,
    },
    {
      id: 'regulatory-updates',
      title: 'Regulatory Updates',
      description: 'Stay informed on policy changes',
      icon: Bell,
      color: 'red' as const,
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name" {...field} />
                          </FormControl>
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
                      </FormItem>
                    )}
                  />

                  <div>
                    <Label className="mb-3 block">Delivery Frequency</Label>
                    <div className="flex flex-wrap gap-3">
                      {['daily', 'weekly', 'monthly'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={`px-4 py-2 rounded-lg border ${
                            frequency === option
                              ? 'bg-primary/10 border-primary text-primary font-medium'
                              : 'border-border bg-background hover:bg-secondary/30'
                          } transition-colors`}
                          onClick={() => setFrequency(option)}
                        >
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

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
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
