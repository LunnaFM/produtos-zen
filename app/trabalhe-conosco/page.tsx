"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

export default function TrabalheConosco() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
    curriculo: null as File | null,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, curriculo: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your server
    console.log("Form submitted:", formData)
    toast({
      title: "Mensagem enviada",
      description: "Entraremos em contato em breve!",
    })

    // Reset form
    setFormData({
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
      curriculo: null,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6b4a9] to-[#a97a8f] flex flex-col items-center pt-20">
      <main className="bg-white max-w-6xl w-[90%] px-6 md:px-16 py-10 md:py-16">
        <h1 className="text-3xl text-gray-800 mb-3 font-normal">Trabalhe conosco</h1>
        <p className="text-gray-600 mb-12 text-base">Nos envie uma mensagem que entraremos em contato!</p>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0">
            <Input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              className="flex-1 bg-gray-100 placeholder-gray-400 text-gray-500 text-sm px-5 py-4 focus:outline-none"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 bg-gray-100 placeholder-gray-400 text-gray-500 text-sm px-5 py-4 focus:outline-none"
              required
            />
          </div>

          <Input
            type="text"
            name="assunto"
            placeholder="Assunto"
            value={formData.assunto}
            onChange={handleChange}
            className="w-full bg-gray-100 placeholder-gray-400 text-gray-500 text-sm px-5 py-4 focus:outline-none"
            required
          />

          <Textarea
            name="mensagem"
            placeholder="Mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            className="w-full bg-gray-100 placeholder-gray-400 text-gray-500 text-sm px-5 py-4 resize-none focus:outline-none"
            rows={12}
            required
          />

          <div>
            <Label htmlFor="curriculo" className="block mb-2 text-gray-700 text-sm">
              Currículo
            </Label>
            <Input id="curriculo" type="file" onChange={handleFileChange} className="w-full text-gray-700 text-sm" />
          </div>

          <Button type="submit" className="bg-black text-white px-8 py-4 h-auto text-sm hover:bg-gray-800">
            Enviar Mensagem
          </Button>
        </form>
      </main>
    </div>
  )
}
