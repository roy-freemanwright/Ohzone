import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Check, Info, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Membership() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  const plans = [
    {
      name: "Wellness Starter",
      price: billingCycle === "monthly" ? "$199" : "$1,990",
      period: billingCycle === "monthly" ? "/month" : "/year",
      description: "Perfect for those beginning their wellness journey with essential therapies.",
      features: [
        "1 Core Therapy session per month",
        "10% off all supplements",
        "Complimentary body composition scan",
        "Priority booking",
        "Standard queue access"
      ],
      popular: false,
    },
    {
      name: "Optimal Health",
      price: billingCycle === "monthly" ? "$399" : "$3,990",
      period: billingCycle === "monthly" ? "/month" : "/year",
      description: "Our most comprehensive plan for dedicated health optimization and recovery.",
      features: [
        "4 Core Therapy sessions per month",
        "1 Advanced Therapy session per month",
        "20% off all supplements",
        "Monthly practitioner consultation",
        "Unlimited body composition scans",
        "Priority queue access"
      ],
      popular: true,
      tag: "Best Value"
    },
    {
      name: "Performance Elite",
      price: billingCycle === "monthly" ? "$599" : "$5,990",
      period: billingCycle === "monthly" ? "/month" : "/year",
      description: "Designed for athletes and high-performers seeking maximum results.",
      features: [
        "Unlimited Core Therapy sessions*",
        "4 Advanced Therapy sessions per month",
        "25% off all supplements",
        "Quarterly comprehensive lab testing",
        "Direct access to care team",
        "Highest priority access"
      ],
      popular: false,
    }
  ];

  const faqs = [
    {
      question: "How do membership credits work?",
      answer: "Memberships provide a set number of session credits each month. Core therapies and advanced therapies use different types of credits. Unused credits do not roll over to the next billing cycle and expire at the end of each month. New credits are refreshed automatically when your subscription renews."
    },
    {
      question: "Is my subscription automatically renewed?",
      answer: "Yes. Your subscription renews automatically at the end of each billing cycle to ensure uninterrupted access to your wellness routine. You can cancel anytime in your account settings — your plan will remain active until the end of the current period."
    },
    {
      question: "How does the 'Unlimited' therapy work on the Elite plan?",
      answer: "Unlimited lets you book core therapies without spending credits. To ensure a smooth experience for everyone, we manage scheduling dynamically. You may have one active booking at a time, and concurrent bookings might be restricted during exceptionally high system load or peak hours."
    },
    {
      question: "Can I share my membership?",
      answer: "Memberships are designed for personal use only. Credential sharing or transferring sessions to others is strictly prohibited. However, the Performance Elite plan includes a free guest pass monthly."
    },
    {
      question: "Can I change my subscription after purchase?",
      answer: "Yes. You can upgrade instantly at any time — the change takes effect immediately, and any price difference is prorated. If you downgrade, the change will apply at the end of your current plan duration, and your existing plan will remain active until then."
    }
  ];

  return (
    <>
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-background overflow-hidden">
        <div className="container px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New Plans Available
          </div>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">Pick your plan</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Scale your health with higher limits, priority access, and the newest therapies first.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <button 
              onClick={() => setBillingCycle("monthly")}
              className={cn("px-4 py-2 rounded-full text-sm font-medium transition-colors", billingCycle === "monthly" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground")}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle("annually")}
              className={cn("px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2", billingCycle === "annually" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground hover:text-foreground")}
            >
              Annually <span className="text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Save 16%</span>
            </button>
          </div>
        </div>
      </div>

      <Section className="py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 border bg-card flex flex-col h-full transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? "border-primary shadow-md md:-mt-4 md:mb-4" 
                  : "border-border shadow-sm"
              }`}
            >
              {plan.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-sm">
                  {plan.tag}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-end gap-1">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className="text-muted-foreground font-medium text-sm mb-1">{plan.period}</span>
              </div>

              <Button 
                className={`w-full rounded-xl py-6 text-base font-semibold mb-8 ${
                  plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Choose {plan.name}
              </Button>

              <div className="flex-grow">
                <p className="text-sm font-medium mb-4 text-foreground/80">Included in this plan:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know about our memberships.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl bg-background px-6 py-2 shadow-sm">
                <AccordionTrigger className="text-left font-medium text-base hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <Section className="py-16 md:py-24">
         <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl">
            {/* Background pattern similar to a 'cinematic banner' */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-slate-900 to-slate-950"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
              <div className="max-w-xl">
                <div className="uppercase tracking-widest text-primary font-bold text-xs mb-3">Give the Gift of Wellness</div>
                <h3 className="text-3xl md:text-4xl font-serif mb-4">Looking for a perfect gift?</h3>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  Treat someone special to an unforgettable experience. Our gift cards can be used for any service, membership, or supplement protocol.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base" asChild>
                  <Link href="/giftcards">Purchase a Gift Card</Link>
                </Button>
              </div>
              <div className="hidden md:flex w-48 h-48 bg-white/5 rounded-full items-center justify-center border border-white/10 backdrop-blur-sm">
                <Info className="w-20 h-20 text-primary opacity-80" />
              </div>
            </div>
         </div>
      </Section>
    </>
  );
}