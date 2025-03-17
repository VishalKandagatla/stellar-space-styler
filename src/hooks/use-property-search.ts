
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { api } from '@/services/api';

interface SearchParams {
  propertyType?: string;
  location?: string;
  solarPotential?: string;
}

interface Property {
  id: number;
  address: string;
  score: number;
  potential: string;
  [key: string]: any;
}

export const usePropertySearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Property[]>([]);
  const { toast } = useToast();

  const searchProperties = async (params: SearchParams) => {
    setIsLoading(true);
    
    try {
      const response = await api.searchProperties(params);
      
      if (response.success) {
        setResults(response.properties);
        
        toast({
          title: "Search complete",
          description: `Found ${response.properties.length} properties matching your criteria.`,
        });
        
        return response.properties;
      } else {
        throw new Error(response.message || "Search failed");
      }
    } catch (error) {
      console.error("Property search error:", error);
      
      toast({
        title: "Search failed",
        description: error instanceof Error ? error.message : "Something went wrong with your search. Please try again.",
        variant: "destructive",
      });
      
      setResults([]);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    results,
    searchProperties
  };
};
