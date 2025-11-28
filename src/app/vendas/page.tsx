"use client"

import { useState } from "react"
import { Building2, Check, ArrowRight, Star, Users, TrendingUp, Shield, Zap, BookOpen, Calculator, DollarSign, Clock, CheckCircle2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function LandingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const plans = [
    {
      id: "gratuito",
      nome: "Plano Gratuito",
      preco: "R$ 0",
      periodo: "para sempre",
      descricao: "Ideal para começar e testar o sistema",
      recursos: [
        "1 obra simultânea",
        "Conteúdo básico do guia",
        "Gestão básica de etapas",
        "Controle financeiro simples",
        "Suporte por email"
      ],
      limitacoes: [
        "Simulador limitado",
        "Sem relatórios avançados",
        "Sem módulos premium do guia"
      ],
      destaque: false,
      cta: "Começar Grátis"
    },
    {
      id: "profissional",
      nome: "Plano Profissional",
      preco: "R$ 39",
      periodo: "/mês",
      descricao: "Para engenheiros que querem crescer",
      recursos: [
        "Até 5 obras simultâneas",
        "Guia completo (8 módulos)",
        "Simulador MCMV ilimitado",
        "Gestão financeira avançada",
        "Relatórios detalhados",
        "Controle de documentos",
        "Alertas e notificações",
        "Suporte prioritário"
      ],
      limitacoes: [],
      destaque: true,
      cta: "Assinar Agora",
      badge: "Mais Popular"
    },
    {
      id: "premium",
      nome: "Plano Premium",
      preco: "R$ 89",
      periodo: "/mês",
      descricao: "Para profissionais que querem dominar o mercado",
      recursos: [
        "Obras ilimitadas",
        "Guia completo + conteúdo exclusivo",
        "Simulador MCMV avançado",
        "Gestão financeira completa",
        "Relatórios personalizados",
        "Integração com contabilidade",
        "Dashboard executivo",
        "Análise de rentabilidade",
        "Suporte VIP (WhatsApp)",
        "Consultoria mensal inclusa"
      ],
      limitacoes: [],
      destaque: false,
      cta: "Começar Premium"
    }
  ]

  const depoimentos = [
    {
      nome: "Carlos Silva",
      cargo: "Engenheiro Civil",
      foto: "👨‍💼",
      texto: "Consegui aprovar minha primeira obra MCMV em apenas 45 dias. O guia é completo e o simulador me ajudou a não errar no orçamento.",
      rating: 5
    },
    {
      nome: "Ana Paula Santos",
      cargo: "Arquiteta",
      foto: "👩‍💼",
      texto: "Estava perdendo oportunidades por não saber lidar com obras financiadas. Agora já tenho 3 obras em andamento e lucro garantido.",
      rating: 5
    },
    {
      nome: "Roberto Oliveira",
      cargo: "Construtor",
      foto: "👷",
      texto: "O sistema de gestão financeira me salvou. Antes eu perdia dinheiro sem saber onde. Agora tenho controle total e margem de lucro de 15%.",
      rating: 5
    }
  ]

  const beneficios = [
    {
      icone: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      titulo: "Guia Completo",
      descricao: "8 módulos práticos que ensinam desde a captação até a entrega da obra"
    },
    {
      icone: <Calculator className="w-6 h-6 sm:w-8 sm:h-8" />,
      titulo: "Simulador MCMV",
      descricao: "Calcule a viabilidade de qualquer obra antes de começar"
    },
    {
      icone: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />,
      titulo: "Gestão Financeira",
      descricao: "Controle completo de custos, liberações e lucro real"
    },
    {
      icone: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      titulo: "Economia de Tempo",
      descricao: "Automatize processos e foque no que realmente importa"
    },
    {
      icone: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      titulo: "Sem Erros",
      descricao: "Evite os erros que reprovam 70% das obras na Caixa"
    },
    {
      icone: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      titulo: "Aumente seu Lucro",
      descricao: "Otimize custos e maximize sua margem de lucro"
    }
  ]

  const stats = [
    { numero: "500+", label: "Obras Aprovadas" },
    { numero: "95%", label: "Taxa de Aprovação" },
    { numero: "R$ 2.5M+", label: "Em Obras Gerenciadas" },
    { numero: "4.9/5", label: "Avaliação Média" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-slate-900">Minha Obra Minha Vida</h1>
                <p className="text-xs sm:text-sm text-slate-500 hidden sm:block">Gestão inteligente de obras MCMV</p>
              </div>
            </div>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base h-9 sm:h-11">
                Acessar Sistema
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-12 sm:py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-500/20 text-white border-blue-400/30 mb-4 sm:mb-6 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              Sistema Completo de Gestão MCMV
            </Badge>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Pare de perder oportunidades
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              Aprenda a captar, aprovar e executar sua primeira obra financiada e comece a ganhar dinheiro com engenharia agora.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto shadow-xl"
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Planos e Preços
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto"
                onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer o Sistema
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{stat.numero}</p>
                  <p className="text-xs sm:text-sm text-blue-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Tudo que você precisa para dominar obras MCMV
            </h3>
            <p className="text-base sm:text-lg text-slate-600">
              Sistema completo que te guia do zero até a entrega da obra com lucro garantido
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-white border-slate-200 hover:shadow-xl transition-all hover:border-blue-200">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 sm:mb-6">
                  {beneficio.icone}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{beneficio.titulo}</h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{beneficio.descricao}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Quem já usa está lucrando
            </h3>
            <p className="text-base sm:text-lg text-slate-600">
              Veja o que profissionais como você estão dizendo sobre o sistema
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="p-6 sm:p-8 bg-white border-slate-200 hover:shadow-xl transition-all">
                <div className="flex items-center gap-1 mb-4 sm:mb-6">
                  {[...Array(depoimento.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6 leading-relaxed italic">
                  "{depoimento.texto}"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl sm:text-2xl">
                    {depoimento.foto}
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-bold text-slate-900">{depoimento.nome}</p>
                    <p className="text-xs sm:text-sm text-slate-600">{depoimento.cargo}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section id="planos" className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Escolha o plano ideal para você
            </h3>
            <p className="text-base sm:text-lg text-slate-600">
              Comece grátis e evolua conforme seu negócio cresce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`p-6 sm:p-8 relative ${
                  plan.destaque 
                    ? 'border-2 border-blue-600 shadow-2xl scale-100 md:scale-105' 
                    : 'border-slate-200 hover:shadow-xl'
                } transition-all`}
              >
                {plan.badge && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs sm:text-sm px-3 sm:px-4 py-1">
                    {plan.badge}
                  </Badge>
                )}

                <div className="text-center mb-6 sm:mb-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{plan.nome}</h4>
                  <div className="flex items-baseline justify-center gap-1 mb-2 sm:mb-3">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">{plan.preco}</span>
                    <span className="text-base sm:text-lg text-slate-600">{plan.periodo}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">{plan.descricao}</p>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.recursos.map((recurso, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-700">{recurso}</span>
                    </div>
                  ))}
                  {plan.limitacoes.map((limitacao, index) => (
                    <div key={index} className="flex items-start gap-3 opacity-50">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-500">{limitacao}</span>
                    </div>
                  ))}
                </div>

                <Link href="/">
                  <Button 
                    className={`w-full h-11 sm:h-12 text-sm sm:text-base ${
                      plan.destaque
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Garantia */}
          <div className="mt-12 sm:mt-16 text-center">
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">Garantia de 7 dias</h4>
                  <p className="text-sm sm:text-base text-slate-700">
                    Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Pronto para transformar sua carreira?
          </h3>
          <p className="text-base sm:text-xl text-slate-300 mb-8 sm:mb-10 leading-relaxed">
            Junte-se a centenas de profissionais que já estão lucrando com obras MCMV
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto shadow-xl"
              >
                Começar Agora Grátis
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto"
              onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Todos os Planos
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-slate-900">Minha Obra Minha Vida</p>
                <p className="text-xs sm:text-sm text-slate-500">© 2024 Todos os direitos reservados</p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Suporte</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Documentação</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Termos</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
