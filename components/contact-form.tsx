"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

// Schema für die Formularvalidierung
const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({
    message: "Bitte gib eine gültige E-Mail-Adresse ein.",
  }),
  message: z.string().min(10, {
    message: "Die Nachricht sollte mindestens 10 Zeichen enthalten.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Formular mit React Hook Form und Zod-Validierung
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  // Formular absenden
  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Nachricht')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Error:', error)
      // Here you could add error handling UI if needed
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <h3 className="font-body text-lg mb-2">Vielen Dank für Ihre Nachricht!</h3>
        <p className="font-mono text-sm mb-6">
          Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.
        </p>
        <Button variant="outline" className="rounded-full font-mono text-xs" onClick={() => setIsSubmitted(false)}>
          Neue Nachricht senden
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-sm">Name (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Dein Name" className="font-mono text-sm" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-sm">E-Mail *</FormLabel>
              <FormControl>
                <Input placeholder="deine@email.de" className="font-mono text-sm" required {...field} />
              </FormControl>
              <FormMessage className="font-mono text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-mono text-sm">Nachricht *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Deine Nachricht an uns..."
                  className="font-mono text-sm min-h-[150px]"
                  required
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-mono text-xs" />
            </FormItem>
          )}
        />

        <div className="pt-2">
          <p className="font-mono text-xs text-gray-500 mb-6">
            Mit dem Absenden erklärst du dich mit der Verarbeitung deiner Daten gemäß unserer{" "}
            <Link href="/datenschutz" className="text-[#ff4d00] hover:underline">
              Datenschutzerklärung
            </Link>{" "}
            einverstanden.
          </p>

          <Button type="submit" className="rounded-full font-mono text-xs px-8" disabled={isSubmitting}>
            {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
