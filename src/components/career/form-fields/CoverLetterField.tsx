
import { Control } from "react-hook-form";
import { FileText } from "lucide-react";
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

interface CoverLetterFieldProps {
  control: Control<any>;
}

export const CoverLetterField = ({ control }: CoverLetterFieldProps) => {
  return (
    <FormField
      control={control}
      name="coverLetter"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Cover Letter
          </FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Tell us why you're interested in joining our team and what makes you a good fit for the role..."
              className="min-h-[150px]" 
              {...field} 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
