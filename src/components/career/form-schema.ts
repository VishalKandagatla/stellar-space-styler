
import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  location: z.string().min(2, "Please enter your location"),
  positionType: z.string().optional(),
  linkedIn: z.string().optional(),
  portfolio: z.string().optional(),
  coverLetter: z.string().min(10, "Cover letter must be at least 10 characters"),
});

export const positionTypes = [
  { value: "fullTime", label: "Full-Time" },
  { value: "partTime", label: "Part-Time" },
  { value: "contract", label: "Contract" },
  { value: "internship", label: "Internship" },
];
