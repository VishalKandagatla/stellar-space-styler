
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { api, ApiResponse } from '@/services/api';

export const useDemoRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const scheduleDemo = async (email: string) => {
    if (!email) {
      toast({
        title: "Email required",
        description: "Please provide your email to schedule a demo.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await api.scheduleDemo({ email });
      
      if (response.success) {
        toast({
          title: "Demo requested!",
          description: "We'll contact you soon to schedule your personalized demo.",
        });
        return true;
      } else {
        throw new Error(response.message || "Failed to schedule demo");
      }
    } catch (error) {
      console.error("Demo scheduling error:", error);
      toast({
        title: "Request failed",
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
    scheduleDemo
  };
};
