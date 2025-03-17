
/**
 * Main API service module for handling backend requests
 */

// This is a simulated API response for demonstration purposes
// In a real application, this would be a fetch call to your actual backend
const simulateApiCall = async <T>(
  endpoint: string, 
  data?: any, 
  delay = 1000
): Promise<T> => {
  console.log(`API call to ${endpoint} with data:`, data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, delay));
  
  // Return simulated response
  return {
    success: true,
    message: `Successfully called ${endpoint}`,
    timestamp: new Date().toISOString(),
    ...data
  } as T;
};

// Generic response interface
export interface ApiResponse {
  success: boolean;
  message: string;
  timestamp: string;
}

export const api = {
  // Trial registration
  startFreeTrial: async (email: string): Promise<ApiResponse> => {
    return simulateApiCall<ApiResponse>('/api/trial/register', { email });
  },
  
  // Demo scheduling
  scheduleDemo: async (contactInfo: { name?: string; email: string }): Promise<ApiResponse> => {
    return simulateApiCall<ApiResponse>('/api/demo/schedule', contactInfo);
  },
  
  // Property search
  searchProperties: async (searchParams: {
    propertyType?: string;
    location?: string;
    solarPotential?: string;
  }): Promise<ApiResponse & { properties: any[] }> => {
    // Simulate property search results
    return simulateApiCall<ApiResponse & { properties: any[] }>('/api/properties/search', {
      searchParams,
      properties: [
        { id: 1, address: "123 Solar Ave", score: 85, potential: "High" },
        { id: 2, address: "456 Sunny Blvd", score: 78, potential: "Medium" },
        { id: 3, address: "789 Energy Lane", score: 92, potential: "Very High" }
      ]
    });
  }
};
