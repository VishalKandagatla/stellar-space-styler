
import { Control } from "react-hook-form";
import { Briefcase, MapPin, Link as LinkIcon } from "lucide-react";
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { positionTypes } from "../form-schema";

interface ProfessionalInfoFieldsProps {
  control: Control<any>;
}

export const ProfessionalInfoFields = ({ control }: ProfessionalInfoFieldsProps) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </FormLabel>
              <FormControl>
                <Input placeholder="City, Country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="positionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Position Type
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select position type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {positionTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="linkedIn"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                LinkedIn Profile (Optional)
              </FormLabel>
              <FormControl>
                <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="portfolio"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                Portfolio/Website (Optional)
              </FormLabel>
              <FormControl>
                <Input placeholder="https://yourportfolio.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};
