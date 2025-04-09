"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageSquare, Send, MapPin, Clock, CheckCircle } from "lucide-react"
import { ParticleBackground } from "@/components/particle-background"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  async function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data properly
    const formData = new FormData(event.target);
    formData.append("access_key", "7e9773df-b614-4590-b770-f6c1f6f63c47");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    console.log("Form data:", object); // Log the actual form data

    try {
      setFormStatus({ submitted: true, success: false, message: "Sending..." });
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log("Form submitted successfully:", result);
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you! Your message has been received."
        });
        // Reset form
        event.target.reset();
      } else {
        console.error("Form submission error:", result);
        setFormStatus({
          submitted: true,
          success: false,
          message: "There was an error submitting your form. Please try again."
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({
        submitted: true,
        success: false,
        message: "There was an error submitting your form. Please try again."
      });
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ParticleBackground />
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="nebula-glow"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
              <div className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2 rounded-full mb-2">
                <span className="text-primary text-sm font-medium">Get in Touch</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                Contact Us
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[800px]">
                Have questions about our AI solutions? Ready to transform your business with cutting-edge technology?
                Our team is here to help you navigate the world of AI and find the perfect solution for your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-accent/5 opacity-30"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Send Us a Message</h2>
                <Card className="gradient-card p-6">
                  {formStatus.submitted && formStatus.success ? (
                    <div className="flex flex-col items-center text-center p-6 space-y-4">
                      <CheckCircle className="h-12 w-12 text-green-500" />
                      <h3 className="text-xl font-semibold">{formStatus.message}</h3>
                     
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name
                          </label>
                          <Input 
                            id="name" 
                            name="name" 
                            placeholder="John Doe" 
                            className="bg-background/50 border-primary/20" 
                            required 
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            className="bg-background/50 border-primary/20"
                            required
                          />
                        </div>
                      </div>
                     
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project or inquiry..."
                          className="min-h-[150px] bg-background/50 border-primary/20"
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full gradient-button"
                        disabled={formStatus.submitted && !formStatus.success}
                      >
                        {formStatus.submitted && !formStatus.success ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </>
                        )}
                      </Button>
                      {formStatus.submitted && !formStatus.success && formStatus.message !== "Sending..." && (
                        <p className="text-red-500 text-center mt-2">{formStatus.message}</p>
                      )}
                    </form>
                  )}
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Contact Information</h2>
                <div className="space-y-8">
                  <Card className="gradient-card p-6">
                    <div className="flex items-start">
                      <div className="gradient-icon-bg p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                        <p className="text-muted-foreground mb-1">For general inquiries:</p>
                        <a href="mailto:info@botmate.in" className="text-primary hover:underline">
                          info@botmate.in
                        </a>
                        <p className="text-muted-foreground mt-3 mb-1">For support:</p>
                        <a href="mailto:support@botmate.in" className="text-primary hover:underline">
                          support@botmate.in
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="gradient-card p-6">
                    <div className="flex items-start">
                      <div className="gradient-icon-bg p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                        <p className="text-muted-foreground mb-1">Main Office:</p>
                        <a href="tel:+916367727023" className="text-primary hover:underline">
                          +91 636-772-7023
                        </a>
                        
                      </div>
                    </div>
                  </Card>

                  
                  <Card className="gradient-card p-6">
                    <div className="flex items-start">
                      <div className="gradient-icon-bg p-3 rounded-full mr-4">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                        <p className="text-muted-foreground mb-1">Monday - Friday:</p>
                        <p className="mb-2">9:00 AM - 6:00 PM IST</p>
                        <p className="text-muted-foreground mb-1">Saturday:</p>
                        <p className="mb-2">10:00 AM - 2:00 PM IST</p>
                        <p className="text-muted-foreground mb-1">Sunday:</p>
                        <p>Closed</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 gradient-bg border-y border-border/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 gradient-text">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Find quick answers to common questions about our AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="gradient-card p-6">
                <div className="flex items-start">
                  <div className="gradient-icon-bg p-2 rounded-full mr-4 mt-1">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How quickly can you implement an AI solution?</h3>
                    <p className="text-muted-foreground">
                      Implementation timelines vary based on complexity, but most of our AI chatbot and automation
                      solutions can be deployed within 2-4 weeks. Custom enterprise solutions may take 4-8 weeks.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="gradient-card p-6">
                <div className="flex items-start">
                  <div className="gradient-icon-bg p-2 rounded-full mr-4 mt-1">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Do you offer custom AI solutions?</h3>
                    <p className="text-muted-foreground">
                      Yes, we specialize in creating custom AI solutions tailored to your specific business needs,
                      industry requirements, and existing systems.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="gradient-card p-6">
                <div className="flex items-start">
                  <div className="gradient-icon-bg p-2 rounded-full mr-4 mt-1">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">What industries do you serve?</h3>
                    <p className="text-muted-foreground">
                      We serve a wide range of industries including manufacturing, e-commerce, healthcare, finance, real
                      estate, and customer support centers. Our AI solutions are adaptable to various business contexts.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="gradient-card p-6">
                <div className="flex items-start">
                  <div className="gradient-icon-bg p-2 rounded-full mr-4 mt-1">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Do you provide ongoing support?</h3>
                    <p className="text-muted-foreground">
                      Yes, we offer comprehensive support and maintenance packages to ensure your AI solutions continue
                      to perform optimally. Our team is available for troubleshooting, updates, and enhancements.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}