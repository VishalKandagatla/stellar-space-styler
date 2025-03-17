
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { api, ApiResponse } from '@/services/api';

export const useTrialSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const startFreeTrial = async (email: string) => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please provide your email to start the free trial.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await api.startFreeTrial(email);
      
      if (response.success) {
        toast({
          title: "Success!",
          description: "Your free trial has been activated. Check your email for details.",
        });
        return true;
      } else {
        throw new Error(response.message || "Failed to start trial");
      }
    } catch (error) {
      console.error("Trial signup error:", error);
      toast({
        title: "Trial signup failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    startFreeTrial
  };
};
