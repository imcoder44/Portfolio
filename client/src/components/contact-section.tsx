import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { contactFormSchema, type ContactFormData } from "@shared/schema";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-[hsl(217,33%,17%)]" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-8"
        >
          <span className="bg-gradient-to-r from-[hsl(158,64%,52%)] to-[hsl(199,89%,48%)] bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="text-center text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          I'm always excited to collaborate on security projects or discuss new ideas. Drop me a message!
        </motion.p>
        
        <div className="max-w-2xl mx-auto">
          <motion.div variants={itemVariants}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          {...field}
                          className="bg-[hsl(222,47%,11%)] border-slate-600 focus:border-[hsl(199,89%,48%)] text-slate-100 placeholder-slate-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          {...field}
                          className="bg-[hsl(222,47%,11%)] border-slate-600 focus:border-[hsl(199,89%,48%)] text-slate-100 placeholder-slate-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project or idea..."
                          rows={5}
                          {...field}
                          className="bg-[hsl(222,47%,11%)] border-slate-600 focus:border-[hsl(199,89%,48%)] text-slate-100 placeholder-slate-400 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-[hsl(199,89%,48%)] to-[hsl(188,94%,43%)] hover:from-[hsl(199,89%,45%)] hover:to-[hsl(188,94%,40%)] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 mt-12"
          >
            <motion.a
              href="https://github.com/imcoder44"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[hsl(222,47%,11%)] p-4 rounded-lg border border-slate-600 hover:border-[hsl(199,89%,48%)] transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="text-2xl text-[hsl(199,89%,48%)]" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tanishq-ingole-161a7926b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[hsl(222,47%,11%)] p-4 rounded-lg border border-slate-600 hover:border-[hsl(199,89%,48%)] transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="text-2xl text-[hsl(199,89%,48%)]" />
            </motion.a>
            <motion.a
              href="mailto:tanishqingole766@gmail.com"
              className="bg-[hsl(222,47%,11%)] p-4 rounded-lg border border-slate-600 hover:border-[hsl(199,89%,48%)] transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="text-2xl text-[hsl(199,89%,48%)]" />
            </motion.a>
            <motion.a
              href="tel:+918600756454"
              className="bg-[hsl(222,47%,11%)] p-4 rounded-lg border border-slate-600 hover:border-[hsl(199,89%,48%)] transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="text-2xl text-[hsl(199,89%,48%)]" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
