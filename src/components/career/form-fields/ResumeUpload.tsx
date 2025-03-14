
import { Upload, X } from "lucide-react";
import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ResumeUploadProps {
  resumeFile: File | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearFile: () => void;
}

export const ResumeUpload = ({ resumeFile, handleFileChange, clearFile }: ResumeUploadProps) => {
  return (
    <div>
      <FormLabel className="flex items-center gap-2 mb-2">
        <Upload className="h-4 w-4" />
        Resume <span className="text-red-500">*</span>
      </FormLabel>
      <div className="flex items-center space-x-2">
        <Input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-white hover:file:bg-primary/90"
        />
        {resumeFile && (
          <Button 
            type="button" 
            variant="ghost" 
            size="icon" 
            onClick={clearFile}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      {resumeFile && (
        <p className="text-sm text-muted-foreground mt-2">
          Selected file: {resumeFile.name}
        </p>
      )}
      {!resumeFile && (
        <p className="text-sm text-muted-foreground mt-2">
          Please upload your resume (PDF, DOC or DOCX)
        </p>
      )}
    </div>
  );
};
