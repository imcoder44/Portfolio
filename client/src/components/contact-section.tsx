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
    <section id="contact" className="py-20 bg-black border-t border-green-500/30" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        <motion.div
          variants={itemVariants}
          className="terminal-window max-w-4xl mx-auto mb-16"
        >
          <div className="terminal-header">
            <span className="text-green-500">root@tanishq:/home/contact$ ./connect.sh</span>
          </div>
          <div className="terminal-content">
            <h2 className="text-2xl md:text-3xl font-bold text-green-500 font-mono mb-4">
              &gt; ESTABLISH_CONNECTION.SH
            </h2>
            <div className="text-green-400 font-mono text-sm">
              [INITIALIZING_SECURE_CHANNEL...]<br/>
              [ENCRYPTION: AES-256]<br/>
              <span className="text-green-500">[READY_FOR_TRANSMISSION]</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          variants={itemVariants}
          className="terminal-window max-w-2xl mx-auto mb-12"
        >
          <div className="terminal-content">
            <p className="text-green-300 font-mono text-sm leading-relaxed">
              &gt; Excited to collaborate on security projects or discuss new ideas<br/>
              &gt; Always open to ethical hacking opportunities and research<br/>
              &gt; Drop a secure message below
            </p>
          </div>
        </motion.div>
        
        <div className="max-w-2xl mx-auto">
          <motion.div variants={itemVariants}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-green-500 font-mono text-sm">[USERNAME]:</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter username..."
                          {...field}
                          className="bg-black border-green-500/30 focus:border-green-500 text-green-400 placeholder-green-600 font-mono"
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
                      <FormLabel className="text-green-500 font-mono text-sm">[EMAIL_ADDRESS]:</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="user@secure.domain"
                          {...field}
                          className="bg-black border-green-500/30 focus:border-green-500 text-green-400 placeholder-green-600 font-mono"
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
                      <FormLabel className="text-green-500 font-mono text-sm">[MESSAGE_PAYLOAD]:</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter secure message payload..."
                          rows={5}
                          {...field}
                          className="bg-black border-green-500/30 focus:border-green-500 text-green-400 placeholder-green-600 font-mono resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-green-500/10 border border-green-500 text-green-500 font-mono py-3 px-6 rounded transition-all duration-300 hover:bg-green-500/20 hover:scale-105"
                >
                  {contactMutation.isPending ? (
                    "[TRANSMITTING...]"
                  ) : (
                    <>
                      [SEND_MESSAGE]
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="terminal-window mt-12"
          >
            <div className="terminal-header">
              <span className="text-green-500">root@tanishq:/home/contact$ ls -la connections/</span>
            </div>
            <div className="terminal-content">
              <div className="text-green-500 font-mono text-xs mb-4">[AVAILABLE_CHANNELS]:</div>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="https://github.com/imcoder44"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500/10 p-4 rounded border border-green-500/30 hover:border-green-500 transition-all duration-300 hover:scale-105 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="text-xl text-green-500 group-hover:text-green-400" />
                  <div className="text-green-400 font-mono text-xs mt-1">[GITHUB]</div>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/tanishq-ingole-161a7926b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500/10 p-4 rounded border border-green-500/30 hover:border-green-500 transition-all duration-300 hover:scale-105 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="text-xl text-green-500 group-hover:text-green-400" />
                  <div className="text-green-400 font-mono text-xs mt-1">[LINKEDIN]</div>
                </motion.a>
                <motion.a
                  href="mailto:tanishqingole766@gmail.com"
                  className="bg-green-500/10 p-4 rounded border border-green-500/30 hover:border-green-500 transition-all duration-300 hover:scale-105 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="text-xl text-green-500 group-hover:text-green-400" />
                  <div className="text-green-400 font-mono text-xs mt-1">[EMAIL]</div>
                </motion.a>
                <motion.a
                  href="tel:+918600756454"
                  className="bg-green-500/10 p-4 rounded border border-green-500/30 hover:border-green-500 transition-all duration-300 hover:scale-105 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="text-xl text-green-500 group-hover:text-green-400" />
                  <div className="text-green-400 font-mono text-xs mt-1">[PHONE]</div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
