
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { SubscriptionFormValues, FrequencyOption, NewsletterType } from './types';

interface SubscriptionConfirmationProps {
  open: boolean;
  onClose: () => void;
  formData: SubscriptionFormValues;
  frequency: FrequencyOption;
  newsletterTypes: NewsletterType[];
}

export const SubscriptionConfirmation: React.FC<SubscriptionConfirmationProps> = ({
  open,
  onClose,
  formData,
  frequency,
  newsletterTypes,
}) => {
  const selectedInterests = newsletterTypes.filter(type => 
    formData.interests.includes(type.id)
  );

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center text-xl">Subscription Confirmed!</DialogTitle>
          <DialogDescription className="text-center">
            Thank you for subscribing to our newsletter.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-sm text-muted-foreground">Name:</div>
              <div className="text-sm font-medium">{formData.firstName} {formData.lastName}</div>
              
              <div className="text-sm text-muted-foreground">Email:</div>
              <div className="text-sm font-medium">{formData.email}</div>
              
              <div className="text-sm text-muted-foreground">Frequency:</div>
              <div className="text-sm font-medium capitalize">{frequency}</div>
            </div>
            
            {selectedInterests.length > 0 && (
              <div>
                <div className="text-sm text-muted-foreground mb-2">Selected Topics:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedInterests.map(interest => (
                    <div 
                      key={interest.id}
                      className={`text-xs px-2 py-1 rounded-full bg-${interest.color}-100 text-${interest.color}-800`}
                    >
                      {interest.title}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <DialogFooter>
          <Button onClick={onClose} className="w-full">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
