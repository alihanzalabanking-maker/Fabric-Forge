import React, { useEffect, useState } from "react";
import { Link, useSearch } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Send } from "lucide-react";

import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/data/products";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  product: z.string().min(1, "Please select a product"),
  quantity: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 30, {
    message: "Minimum order quantity is 30 pieces",
  }),
  fabric: z.string().min(1, "Please select a fabric preference"),
  message: z.string().min(10, "Please provide some details about your requirements"),
});

export default function Quote() {
  const search = useSearch();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      product: "",
      quantity: "30",
      fabric: "",
      message: "",
    },
  });

  useEffect(() => {
    // Parse URL params to pre-fill product if coming from a product page
    const params = new URLSearchParams(search);
    const productSlug = params.get("product");
    if (productSlug) {
      form.setValue("product", productSlug);
    }
  }, [search, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send an API request
    console.log("Form submitted:", values);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 max-w-2xl text-center flex flex-col items-center">
          <div className="h-24 w-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <h1 className="text-4xl font-display font-bold mb-4">Request Sent Successfully!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for reaching out to RM Apparels. Our manufacturing team will review your requirements and get back to you within 24 hours with a detailed quotation.
          </p>
          <div className="flex gap-4">
            <Link href="/">
              <Button size="lg" variant="outline">Return Home</Button>
            </Link>
            <Link href="/collections">
              <Button size="lg">Browse More Products</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-secondary py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Request a Quote</h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            Fill out the form below with your requirements, and our team will provide a comprehensive pricing breakdown.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="bg-card border rounded-2xl p-6 md:p-10 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="john@brand.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company / Brand Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Acme Athletics" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="product"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Type *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a product" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {products.map(p => (
                            <SelectItem key={p.id} value={p.slug}>{p.name}</SelectItem>
                          ))}
                          <SelectItem value="custom">Custom / Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="fabric"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fabric Preference *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select fabric type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="imported">Imported (Premium/China)</SelectItem>
                          <SelectItem value="local">Local (Value/Pakistan)</SelectItem>
                          <SelectItem value="unsure">Not sure, please advise</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated Quantity (Min 30) *</FormLabel>
                    <FormControl>
                      <Input type="number" min="30" {...field} />
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
                    <FormLabel>Project Details *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please describe your project, colors, sizing requirements, and any custom branding (logos, tags, packaging) needed." 
                        className="min-h-[150px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full h-14 text-lg">
                <Send className="mr-2 h-5 w-5" /> Submit Request
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  );
}
