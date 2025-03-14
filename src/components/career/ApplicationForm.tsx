
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { formSchema, positionTypes } from "./form-schema";
import { PersonalInfoFields } from "./form-fields/PersonalInfoFields";
import { ContactInfoFields } from "./form-fields/ContactInfoFields";
import { ProfessionalInfoFields } from "./form-fields/ProfessionalInfoFields";
import { ResumeUpload } from "./form-fields/ResumeUpload";
import { CVUpload } from "./form-fields/CVUpload";
import { CoverLetterField } from "./form-fields/CoverLetterField";

type FormValues = z.infer<typeof formSchema>;

interface ApplicationFormProps {
  onCancel: () => void;
  onSuccess?: () => void;
}

const ApplicationForm = ({ onCancel, onSuccess }: ApplicationFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      positionType: "fullTime",
      linkedIn: "",
      portfolio: "",
      coverLetter: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    if (!resumeFile) {
      toast({
        title: "Resume required",
        description: "Please upload your resume to proceed with your application.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call - In a real application, you would send the form data and files to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log form data (for demonstration purposes)
      console.log("Form submission:", {
        ...values,
        resumeFile: resumeFile ? resumeFile.name : null,
        cvFile: cvFile ? cvFile.name : null
      });
      
      toast({
        title: "Application submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you soon.",
      });
      
      // Call the success callback if provided
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'resume' | 'cv') => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (fileType === 'resume') {
        setResumeFile(files[0]);
      } else {
        setCvFile(files[0]);
      }
    }
  };

  const clearFile = (fileType: 'resume' | 'cv') => {
    if (fileType === 'resume') {
      setResumeFile(null);
    } else {
      setCvFile(null);
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-fin-blue">Application Form</h2>
        <Button variant="ghost" size="icon" onClick={onCancel}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <PersonalInfoFields control={form.control} />
          
          <ContactInfoFields control={form.control} />
          
          <ProfessionalInfoFields control={form.control} />
          
          <div className="space-y-6">
            <ResumeUpload 
              resumeFile={resumeFile} 
              handleFileChange={(e) => handleFileChange(e, 'resume')} 
              clearFile={() => clearFile('resume')} 
            />
            
            <CVUpload 
              cvFile={cvFile} 
              handleFileChange={(e) => handleFileChange(e, 'cv')} 
              clearFile={() => clearFile('cv')} 
            />
            
            <CoverLetterField control={form.control} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-to-r from-primary to-fin-blue text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onCancel}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ApplicationForm;
