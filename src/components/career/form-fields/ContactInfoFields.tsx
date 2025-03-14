
import { Control } from "react-hook-form";
import { Mail, Phone } from "lucide-react";
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface ContactInfoFieldsProps {
  control: Control<any>;
}

export const ContactInfoFields = ({ control }: ContactInfoFieldsProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email Address
            </FormLabel>
            <FormControl>
              <Input placeholder="your.email@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone Number
            </FormLabel>
            <FormControl>
              <Input placeholder="+1 (123) 456-7890" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
