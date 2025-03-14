
import { Control } from "react-hook-form";
import { User } from "lucide-react";
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface PersonalInfoFieldsProps {
  control: Control<any>;
}

export const PersonalInfoFields = ({ control }: PersonalInfoFieldsProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <User className="h-4 w-4" />
              First Name
            </FormLabel>
            <FormControl>
              <Input placeholder="John" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Last Name
            </FormLabel>
            <FormControl>
              <Input placeholder="Doe" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
