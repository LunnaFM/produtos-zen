"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, Loader2, Send, Upload } from "lucide-react"

export default function TrabalheConosco() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
    curriculo: null as File | null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, curriculo: e.target.files![0] }))
      if (errors.curriculo) {
        setErrors((prev) => ({ ...prev, curriculo: "" }))
      }
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.assunto.trim()) {
      newErrors.assunto = "Assunto é obrigatório"
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória"
    } else if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = "Mensagem deve ter pelo menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", formData)

      setIsSubmitted(true)

      // Reset form after success
      setTimeout(() => {
        setFormData({
          nome: "",
          email: "",
          assunto: "",
          mensagem: "",
          curriculo: null,
        })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#e6b4a9] to-[#a97a8f] flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Mensagem Enviada!</h2>
            <p className="text-gray-600">Obrigado pelo seu interesse! Entraremos em contato em breve.</p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Redirecionando...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e6b4a9] to-[#a97a8f] flex flex-col items-center pt-20">
      <main className="bg-white max-w-6xl w-[90%] px-6 md:px-16 py-10 md:py-16 rounded-lg shadow-lg">
        <h1 className="text-3xl text-gray-800 mb-3 font-normal">Trabalhe conosco</h1>
        <p className="text-gray-600 mb-12 text-base">Nos envie uma mensagem que entraremos em contato!</p>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0">
            <div className="flex-1">
              <Input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                className={`w-full bg-gray-100 placeholder-gray-400 text-gray-700 text-sm px-5 py-4 focus:outline-none focus:ring-2 focus:ring-amber-500 border-0 ${
                  errors.nome ? "ring-2 ring-red-500" : ""
                }`}
                required
              />
              {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
            </div>
            <div className="flex-1">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-gray-100 placeholder-gray-400 text-gray-700 text-sm px-5 py-4 focus:outline-none focus:ring-2 focus:ring-amber-500 border-0 ${
                  errors.email ? "ring-2 ring-red-500" : ""
                }`}
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <Input
              type="text"
              name="assunto"
              placeholder="Assunto"
              value={formData.assunto}
              onChange={handleChange}
              className={`w-full bg-gray-100 placeholder-gray-400 text-gray-700 text-sm px-5 py-4 focus:outline-none focus:ring-2 focus:ring-amber-500 border-0 ${
                errors.assunto ? "ring-2 ring-red-500" : ""
              }`}
              required
            />
            {errors.assunto && <p className="text-red-500 text-xs mt-1">{errors.assunto}</p>}
          </div>

          <div>
            <Textarea
              name="mensagem"
              placeholder="Mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              className={`w-full bg-gray-100 placeholder-gray-400 text-gray-700 text-sm px-5 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500 border-0 ${
                errors.mensagem ? "ring-2 ring-red-500" : ""
              }`}
              rows={12}
              required
            />
            {errors.mensagem && <p className="text-red-500 text-xs mt-1">{errors.mensagem}</p>}
            <div className="text-right text-xs text-gray-400 mt-1">{formData.mensagem.length}/500 caracteres</div>
          </div>

          <div>
            <Label htmlFor="curriculo" className="block mb-2 text-gray-700 text-sm font-medium">
              Currículo (opcional)
            </Label>
            <div className="relative">
              <Input
                id="curriculo"
                type="file"
                onChange={handleFileChange}
                className="w-full text-gray-700 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
                accept=".pdf,.doc,.docx"
              />
              {formData.curriculo && (
                <div className="mt-2 flex items-center text-sm text-green-600">
                  <Upload className="w-4 h-4 mr-2" />
                  Arquivo selecionado: {formData.curriculo.name}
                </div>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white px-8 py-4 h-auto text-sm hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Enviar Mensagem</span>
              </>
            )}
          </Button>

          {/* Progress indicator */}
          {isSubmitting && (
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-amber-600 h-2 rounded-full animate-pulse" style={{ width: "70%" }}></div>
            </div>
          )}
        </form>
      </main>
    </div>
  )
}
