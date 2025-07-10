import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real implementation, you would send an email here
      // For now, we'll just log the message and return success
      console.log("Contact form submission:", validatedData);
      
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
