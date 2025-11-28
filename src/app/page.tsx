"use client"

import { useState } from "react"
import { Building2, Calculator, BookOpen, DollarSign, AlertTriangle, TrendingUp, Clock, CheckCircle2, Plus, ArrowRight, FileText, Calendar, X, TrendingDown, Wallet, CreditCard, PiggyBank, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function ObraCertaApp() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedObra, setSelectedObra] = useState<number | null>(null)
  const [selectedObraFinanceiro, setSelectedObraFinanceiro] = useState<number | null>(null)
  const [selectedGuiaModule, setSelectedGuiaModule] = useState<number | null>(null)
  const [showAddDespesaModal, setShowAddDespesaModal] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [simuladorData, setSimuladorData] = useState({
    renda: "",
    tipoTerreno: "",
    custoObra: "",
    prazo: ""
  })

  // Dados mockados para demonstração
  const obras = [
    {
      id: 1,
      nome: "Residência Silva - MCMV Faixa 2",
      endereco: "Rua das Flores, 123",
      progresso: 65,
      orcamento: 180000,
      gasto: 117000,
      status: "em_andamento",
      etapaAtual: "Alvenaria e Estrutura",
      prazoEntrega: "45 dias",
      lucro: 8500,
      detalhes: {
        cliente: "João Silva",
        telefone: "(11) 98765-4321",
        dataInicio: "15/01/2024",
        dataPrevisao: "15/06/2024",
        etapas: [
          { nome: "Serviços Preliminares", progresso: 100, valor: 8000, status: "concluida" },
          { nome: "Infraestrutura", progresso: 100, valor: 25000, status: "concluida" },
          { nome: "Supraestrutura", progresso: 100, valor: 35000, status: "concluida" },
          { nome: "Paredes", progresso: 80, valor: 18000, status: "em_andamento" },
          { nome: "Esquadrias", progresso: 40, valor: 12000, status: "em_andamento" },
          { nome: "Vidros e Plásticos", progresso: 0, valor: 5000, status: "pendente" },
          { nome: "Coberturas", progresso: 40, valor: 15000, status: "em_andamento" },
          { nome: "Impermeabilizações", progresso: 0, valor: 8000, status: "pendente" },
          { nome: "Revestimentos Internos", progresso: 0, valor: 12000, status: "pendente" },
          { nome: "Forros", progresso: 0, valor: 6000, status: "pendente" },
          { nome: "Revestimentos Externos", progresso: 0, valor: 10000, status: "pendente" },
          { nome: "Pintura", progresso: 0, valor: 8000, status: "pendente" },
          { nome: "Piso", progresso: 0, valor: 9000, status: "pendente" },
          { nome: "Acabamentos", progresso: 0, valor: 7000, status: "pendente" },
          { nome: "Instalações Elétricas e Telefônicas", progresso: 0, valor: 10000, status: "pendente" },
          { nome: "Instalações Hidráulicas", progresso: 0, valor: 9000, status: "pendente" },
          { nome: "Instalações de Esgoto e Água Pluvial", progresso: 0, valor: 8000, status: "pendente" },
          { nome: "Louças e Metais", progresso: 0, valor: 6000, status: "pendente" },
          { nome: "Complementos", progresso: 0, valor: 5000, status: "pendente" }
        ],
        proximaMedicao: "20/05/2024",
        documentosPendentes: ["ART de Instalações Elétricas", "Nota Fiscal Materiais Março"],
        financeiro: {
          liberacoes: [
            { data: "20/01/2024", etapa: "Fundação", valor: 30000, status: "liberado" },
            { data: "15/02/2024", etapa: "Estrutura", valor: 45000, status: "liberado" },
            { data: "10/03/2024", etapa: "Alvenaria", valor: 25000, status: "liberado" },
            { data: "20/04/2024", etapa: "Cobertura", valor: 17000, status: "liberado" },
            { data: "20/05/2024", etapa: "Instalações", valor: 22000, status: "pendente" },
            { data: "20/06/2024", etapa: "Acabamento", valor: 41000, status: "pendente" }
          ],
          despesas: [
            { categoria: "Materiais", valor: 75000, percentual: 64 },
            { categoria: "Mão de Obra", valor: 32000, percentual: 27 },
            { categoria: "Equipamentos", valor: 8000, percentual: 7 },
            { categoria: "Outros", valor: 2000, percentual: 2 }
          ],
          fluxoCaixa: {
            entradas: 117000,
            saidas: 117000,
            saldo: 0,
            proximaLiberacao: 22000
          }
        }
      }
    },
    {
      id: 2,
      nome: "Casa Santos - MCMV Faixa 1",
      endereco: "Av. Principal, 456",
      progresso: 30,
      orcamento: 150000,
      gasto: 45000,
      status: "em_andamento",
      etapaAtual: "Infraestrutura",
      prazoEntrega: "90 dias",
      lucro: 12000,
      detalhes: {
        cliente: "Maria Santos",
        telefone: "(11) 91234-5678",
        dataInicio: "01/03/2024",
        dataPrevisao: "01/09/2024",
        etapas: [
          { nome: "Serviços Preliminares", progresso: 100, valor: 7000, status: "concluida" },
          { nome: "Infraestrutura", progresso: 60, valor: 22000, status: "em_andamento" },
          { nome: "Supraestrutura", progresso: 0, valor: 30000, status: "pendente" },
          { nome: "Paredes", progresso: 0, valor: 16000, status: "pendente" },
          { nome: "Esquadrias", progresso: 0, valor: 10000, status: "pendente" },
          { nome: "Vidros e Plásticos", progresso: 0, valor: 4000, status: "pendente" },
          { nome: "Coberturas", progresso: 0, valor: 13000, status: "pendente" },
          { nome: "Impermeabilizações", progresso: 0, valor: 7000, status: "pendente" },
          { nome: "Revestimentos Internos", progresso: 0, valor: 10000, status: "pendente" },
          { nome: "Forros", progresso: 0, valor: 5000, status: "pendente" },
          { nome: "Revestimentos Externos", progresso: 0, valor: 8000, status: "pendente" },
          { nome: "Pintura", progresso: 0, valor: 7000, status: "pendente" },
          { nome: "Piso", progresso: 0, valor: 8000, status: "pendente" },
          { nome: "Acabamentos", progresso: 0, valor: 6000, status: "pendente" },
          { nome: "Instalações Elétricas e Telefônicas", progresso: 0, valor: 9000, status: "pendente" },
          { nome: "Instalações Hidráulicas", progresso: 0, valor: 8000, status: "pendente" },
          { nome: "Instalações de Esgoto e Água Pluvial", progresso: 0, valor: 7000, status: "pendente" },
          { nome: "Louças e Metais", progresso: 0, valor: 5000, status: "pendente" },
          { nome: "Complementos", progresso: 0, valor: 4000, status: "pendente" }
        ],
        proximaMedicao: "15/06/2024",
        documentosPendentes: ["Laudo de Sondagem", "Projeto Estrutural Aprovado"],
        financeiro: {
          liberacoes: [
            { data: "10/03/2024", etapa: "Fundação", valor: 25000, status: "liberado" },
            { data: "05/04/2024", etapa: "Estrutura", valor: 20000, status: "liberado" },
            { data: "15/05/2024", etapa: "Alvenaria", valor: 30000, status: "pendente" },
            { data: "15/06/2024", etapa: "Cobertura", valor: 25000, status: "pendente" },
            { data: "15/07/2024", etapa: "Instalações", valor: 25000, status: "pendente" },
            { data: "15/08/2024", etapa: "Acabamento", valor: 25000, status: "pendente" }
          ],
          despesas: [
            { categoria: "Materiais", valor: 28000, percentual: 62 },
            { categoria: "Mão de Obra", valor: 13000, percentual: 29 },
            { categoria: "Equipamentos", valor: 3000, percentual: 7 },
            { categoria: "Outros", valor: 1000, percentual: 2 }
          ],
          fluxoCaixa: {
            entradas: 45000,
            saidas: 45000,
            saldo: 0,
            proximaLiberacao: 30000
          }
        }
      }
    },
    {
      id: 3,
      nome: "Residência Oliveira",
      endereco: "Rua do Comércio, 789",
      progresso: 100,
      orcamento: 200000,
      gasto: 185000,
      status: "concluida",
      etapaAtual: "Entregue",
      prazoEntrega: "Concluído",
      lucro: 15000,
      detalhes: {
        cliente: "Carlos Oliveira",
        telefone: "(11) 99876-5432",
        dataInicio: "10/08/2023",
        dataPrevisao: "10/02/2024",
        etapas: [
          { nome: "Serviços Preliminares", progresso: 100, valor: 9000, status: "concluida" },
          { nome: "Infraestrutura", progresso: 100, valor: 30000, status: "concluida" },
          { nome: "Supraestrutura", progresso: 100, valor: 40000, status: "concluida" },
          { nome: "Paredes", progresso: 100, valor: 20000, status: "concluida" },
          { nome: "Esquadrias", progresso: 100, valor: 13000, status: "concluida" },
          { nome: "Vidros e Plásticos", progresso: 100, valor: 6000, status: "concluida" },
          { nome: "Coberturas", progresso: 100, valor: 16000, status: "concluida" },
          { nome: "Impermeabilizações", progresso: 100, valor: 9000, status: "concluida" },
          { nome: "Revestimentos Internos", progresso: 100, valor: 13000, status: "concluida" },
          { nome: "Forros", progresso: 100, valor: 7000, status: "concluida" },
          { nome: "Revestimentos Externos", progresso: 100, valor: 11000, status: "concluida" },
          { nome: "Pintura", progresso: 100, valor: 9000, status: "concluida" },
          { nome: "Piso", progresso: 100, valor: 10000, status: "concluida" },
          { nome: "Acabamentos", progresso: 100, valor: 8000, status: "concluida" },
          { nome: "Instalações Elétricas e Telefônicas", progresso: 100, valor: 11000, status: "concluida" },
          { nome: "Instalações Hidráulicas", progresso: 100, valor: 10000, status: "concluida" },
          { nome: "Instalações de Esgoto e Água Pluvial", progresso: 100, valor: 9000, status: "concluida" },
          { nome: "Louças e Metais", progresso: 100, valor: 7000, status: "concluida" },
          { nome: "Complementos", progresso: 100, valor: 6000, status: "concluida" }
        ],
        proximaMedicao: "Obra Finalizada",
        documentosPendentes: [],
        financeiro: {
          liberacoes: [
            { data: "20/08/2023", etapa: "Fundação", valor: 35000, status: "liberado" },
            { data: "20/09/2023", etapa: "Estrutura", valor: 50000, status: "liberado" },
            { data: "20/10/2023", etapa: "Alvenaria", valor: 35000, status: "liberado" },
            { data: "20/11/2023", etapa: "Cobertura", valor: 30000, status: "liberado" },
            { data: "20/12/2023", etapa: "Instalações", valor: 25000, status: "liberado" },
            { data: "20/01/2024", etapa: "Acabamento", valor: 25000, status: "liberado" }
          ],
          despesas: [
            { categoria: "Materiais", valor: 115000, percentual: 62 },
            { categoria: "Mão de Obra", valor: 52000, percentual: 28 },
            { categoria: "Equipamentos", valor: 13000, percentual: 7 },
            { categoria: "Outros", valor: 5000, percentual: 3 }
          ],
          fluxoCaixa: {
            entradas: 200000,
            saidas: 185000,
            saldo: 15000,
            proximaLiberacao: 0
          }
        }
      }
    }
  ]

  const guiaSteps = [
    { 
      id: 1, 
      titulo: "Captação do Cliente", 
      descricao: "Como encontrar e qualificar clientes para MCMV", 
      icone: "👥", 
      status: "disponivel",
      conteudo: {
        introducao: "A captação de clientes é o primeiro passo para construir um negócio sólido em obras financiadas pelo MCMV.",
        topicos: [
          {
            titulo: "Perfil do Cliente Ideal",
            conteudo: "Famílias com renda de até R$ 8.000,00, sem imóvel próprio, com documentação regular e histórico de crédito positivo."
          },
          {
            titulo: "Canais de Captação",
            conteudo: "Redes sociais, parcerias com imobiliárias, indicações, eventos comunitários e marketing digital direcionado."
          },
          {
            titulo: "Qualificação do Lead",
            conteudo: "Verificar renda familiar, situação cadastral, disponibilidade de terreno e interesse real em construir."
          }
        ]
      }
    },
    { 
      id: 2, 
      titulo: "Documentação Necessária", 
      descricao: "Checklist completo de documentos para aprovação", 
      icone: "📄", 
      status: "disponivel",
      conteudo: {
        introducao: "A documentação correta é fundamental para aprovação rápida do financiamento MCMV.",
        topicos: [
          {
            titulo: "Documentos do Cliente",
            conteudo: "RG, CPF, comprovante de residência, comprovante de renda (últimos 3 meses), certidão de casamento, declaração de dependentes."
          },
          {
            titulo: "Documentos do Terreno",
            conteudo: "Matrícula atualizada, IPTU, certidões negativas, planta de situação, memorial descritivo."
          },
          {
            titulo: "Documentos Técnicos",
            conteudo: "Projeto arquitetônico aprovado, ART/RRT, orçamento SINAPI, cronograma físico-financeiro."
          }
        ]
      }
    },
    { 
      id: 3, 
      titulo: "Projeto e Padrões MCMV", 
      descricao: "Requisitos técnicos e normas da Caixa", 
      icone: "📐", 
      status: "disponivel",
      conteudo: {
        introducao: "O projeto deve seguir rigorosamente as especificações técnicas do programa MCMV.",
        topicos: [
          {
            titulo: "Área Mínima e Máxima",
            conteudo: "Área útil mínima de 32m² e máxima conforme faixa. Pé-direito mínimo de 2,50m."
          },
          {
            titulo: "Cômodos Obrigatórios",
            conteudo: "Sala, 2 quartos, cozinha, banheiro e área de serviço. Todos com ventilação e iluminação natural."
          },
          {
            titulo: "Especificações Técnicas",
            conteudo: "Fundação adequada ao solo, estrutura em concreto ou alvenaria estrutural, cobertura em telhas cerâmicas ou fibrocimento."
          }
        ]
      }
    },
    { 
      id: 4, 
      titulo: "Orçamento SINAPI", 
      descricao: "Como criar orçamento compatível com SINAPI", 
      icone: "💰", 
      status: "premium",
      conteudo: {
        introducao: "O orçamento deve ser elaborado com base na tabela SINAPI para aprovação pela Caixa.",
        topicos: [
          {
            titulo: "Estrutura do Orçamento",
            conteudo: "Composição de custos unitários, quantitativos, BDI, encargos sociais e trabalhistas."
          },
          {
            titulo: "Tabela SINAPI",
            conteudo: "Como consultar, interpretar e aplicar os valores da tabela SINAPI atualizada."
          },
          {
            titulo: "Margem de Lucro",
            conteudo: "Como calcular e incluir sua margem de forma competitiva e viável."
          }
        ]
      }
    },
    { 
      id: 5, 
      titulo: "Aprovação da Caixa", 
      descricao: "Processo de análise e aprovação do financiamento", 
      icone: "✅", 
      status: "premium",
      conteudo: {
        introducao: "Entenda o passo a passo da análise e aprovação do financiamento pela Caixa Econômica Federal.",
        topicos: [
          {
            titulo: "Análise Cadastral",
            conteudo: "Verificação de score, restrições, capacidade de pagamento e histórico do cliente."
          },
          {
            titulo: "Análise Técnica",
            conteudo: "Avaliação do projeto, orçamento, viabilidade técnica e conformidade com normas."
          },
          {
            titulo: "Prazos e Etapas",
            conteudo: "Cronograma típico de análise, documentos complementares e aprovação final."
          }
        ]
      }
    },
    { 
      id: 6, 
      titulo: "Liberação de Recursos", 
      descricao: "Etapas de medição e liberação de parcelas", 
      icone: "🏦", 
      status: "premium",
      conteudo: {
        introducao: "Os recursos são liberados em parcelas conforme o avanço físico da obra.",
        topicos: [
          {
            titulo: "Etapas de Medição",
            conteudo: "Fundação, estrutura, alvenaria, cobertura, instalações e acabamento. Percentuais de cada etapa."
          },
          {
            titulo: "Processo de Vistoria",
            conteudo: "Como preparar a obra para vistoria, documentação necessária e prazo de liberação."
          },
          {
            titulo: "Gestão do Fluxo de Caixa",
            conteudo: "Como planejar compras e pagamentos considerando o cronograma de liberações."
          }
        ]
      }
    },
    { 
      id: 7, 
      titulo: "Prestação de Contas", 
      descricao: "Como prestar contas corretamente à Caixa", 
      icone: "📊", 
      status: "premium",
      conteudo: {
        introducao: "A prestação de contas adequada garante a liberação das próximas parcelas.",
        topicos: [
          {
            titulo: "Documentação Fiscal",
            conteudo: "Notas fiscais, recibos, contratos de prestação de serviço e comprovantes de pagamento."
          },
          {
            titulo: "Relatório Fotográfico",
            conteudo: "Como documentar o avanço da obra com fotos padronizadas e datadas."
          },
          {
            titulo: "Planilha de Custos",
            conteudo: "Controle detalhado de gastos por etapa e comparativo com orçamento aprovado."
          }
        ]
      }
    },
    { 
      id: 8, 
      titulo: "Erros que Reprovam", 
      descricao: "Principais erros e como evitá-los", 
      icone: "⚠️", 
      status: "premium",
      conteudo: {
        introducao: "Conheça os erros mais comuns que causam reprovação e como evitá-los.",
        topicos: [
          {
            titulo: "Erros Documentais",
            conteudo: "Documentação incompleta, desatualizada ou com inconsistências cadastrais."
          },
          {
            titulo: "Erros Técnicos",
            conteudo: "Projeto fora dos padrões, orçamento incompatível, especificações inadequadas."
          },
          {
            titulo: "Erros de Execução",
            conteudo: "Obra não conforme projeto, materiais diferentes do especificado, prazos não cumpridos."
          }
        ]
      }
    }
  ]

  const calcularViabilidade = () => {
    const renda = parseFloat(simuladorData.renda)
    const custo = parseFloat(simuladorData.custoObra)
    
    if (!renda || !custo) return null

    const capacidadePagamento = renda * 0.3 * 360 // 30% da renda por 30 anos
    const viavel = capacidadePagamento >= custo

    return {
      viavel,
      capacidadePagamento,
      diferenca: capacidadePagamento - custo,
      percentualViabilidade: (capacidadePagamento / custo) * 100
    }
  }

  const viabilidade = calcularViabilidade()

  const obraSelecionada = obras.find(o => o.id === selectedObra)
  const obraFinanceiroSelecionada = obras.find(o => o.id === selectedObraFinanceiro)
  const moduloSelecionado = guiaSteps.find(m => m.id === selectedGuiaModule)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Mobile-First */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <Building2 className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-slate-900">Minha Obra Minha Vida</h1>
                <p className="text-[10px] sm:text-xs text-slate-500 hidden sm:block">Gestão inteligente de obras MCMV</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1">
                Gratuito
              </Badge>
              <a href="/vendas">
                <Button 
                  size="sm"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 h-8 sm:h-9 text-xs sm:text-sm px-2 sm:px-4"
                >
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Fazer Upgrade</span>
                  <span className="sm:hidden">Upgrade</span>
                </Button>
              </a>
              <Button 
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white h-8 sm:h-9 text-xs sm:text-sm px-2 sm:px-4"
                onClick={() => setActiveTab("nova-obra")}
              >
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                <span className="hidden sm:inline">Nova Obra</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs - Mobile Optimized */}
      <div className="bg-white border-b border-slate-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b-0 h-12 sm:h-14 p-0 gap-3 sm:gap-6 inline-flex min-w-max">
              <TabsTrigger 
                value="dashboard" 
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none pb-3 sm:pb-4 data-[state=active]:text-blue-600 text-xs sm:text-sm whitespace-nowrap"
              >
                <Building2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                <span className="hidden xs:inline">Minhas Obras</span>
                <span className="xs:hidden">Obras</span>
              </TabsTrigger>
              <TabsTrigger 
                value="simulador"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none pb-3 sm:pb-4 data-[state=active]:text-blue-600 text-xs sm:text-sm whitespace-nowrap"
              >
                <Calculator className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Simulador
              </TabsTrigger>
              <TabsTrigger 
                value="guia"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none pb-3 sm:pb-4 data-[state=active]:text-blue-600 text-xs sm:text-sm whitespace-nowrap"
              >
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                Guia
              </TabsTrigger>
              <TabsTrigger 
                value="nova-obra"
                className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-600 rounded-none pb-3 sm:pb-4 data-[state=active]:text-blue-600 text-xs sm:text-sm whitespace-nowrap"
              >
                <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                <span className="hidden sm:inline">Nova Obra</span>
                <span className="sm:hidden">Nova</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content - Mobile Optimized */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <Tabs value={activeTab} className="w-full">
          {/* DASHBOARD */}
          <TabsContent value="dashboard" className="space-y-4 sm:space-y-6 mt-0">
            {/* Métricas Gerais - Mobile Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
              <Card className="p-3 sm:p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-2 sm:mb-0">
                    <p className="text-[10px] sm:text-sm text-slate-600 mb-0.5 sm:mb-1">Obras Ativas</p>
                    <p className="text-xl sm:text-3xl font-bold text-slate-900">2</p>
                    <p className="text-[9px] sm:text-xs text-blue-600 mt-0.5 sm:mt-1 flex items-center gap-1">
                      <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3" />
                      +1 este mês
                    </p>
                  </div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center self-end sm:self-auto">
                    <Building2 className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                </div>
              </Card>

              <Card className="p-3 sm:p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-2 sm:mb-0">
                    <p className="text-[10px] sm:text-sm text-slate-600 mb-0.5 sm:mb-1">Lucro Previsto</p>
                    <p className="text-xl sm:text-3xl font-bold text-slate-900">R$ 35k</p>
                    <p className="text-[9px] sm:text-xs text-blue-600 mt-0.5 sm:mt-1 flex items-center gap-1">
                      <TrendingUp className="w-2 h-2 sm:w-3 sm:h-3" />
                      Margem 12%
                    </p>
                  </div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center self-end sm:self-auto">
                    <DollarSign className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                </div>
              </Card>

              <Card className="p-3 sm:p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-2 sm:mb-0">
                    <p className="text-[10px] sm:text-sm text-slate-600 mb-0.5 sm:mb-1">Em Execução</p>
                    <p className="text-xl sm:text-3xl font-bold text-slate-900">R$ 162k</p>
                    <p className="text-[9px] sm:text-xs text-slate-600 mt-0.5 sm:mt-1">de R$ 330k</p>
                  </div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center self-end sm:self-auto">
                    <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                </div>
              </Card>

              <Card className="p-3 sm:p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-2 sm:mb-0">
                    <p className="text-[10px] sm:text-sm text-slate-600 mb-0.5 sm:mb-1">Concluídas</p>
                    <p className="text-xl sm:text-3xl font-bold text-slate-900">1</p>
                    <p className="text-[9px] sm:text-xs text-blue-600 mt-0.5 sm:mt-1 flex items-center gap-1">
                      <CheckCircle2 className="w-2 h-2 sm:w-3 sm:h-3" />
                      100% entregue
                    </p>
                  </div>
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center self-end sm:self-auto">
                    <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Lista de Obras - Mobile Optimized */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base sm:text-xl font-bold text-slate-900">Obras em Andamento</h2>
                <Button variant="outline" size="sm" className="border-slate-300 text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-4">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Exportar</span>
                </Button>
              </div>

              {obras.filter(o => o.status === "em_andamento").map((obra) => (
                <Card key={obra.id} className="p-3 sm:p-6 bg-white border-slate-200 hover:shadow-lg transition-all hover:border-blue-200">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1 sm:mb-2">
                          <h3 className="text-sm sm:text-lg font-bold text-slate-900">{obra.nome}</h3>
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 text-[10px] sm:text-xs w-fit">
                            Em Andamento
                          </Badge>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">{obra.endereco}</p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-3 sm:mb-4">
                          <div>
                            <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">Etapa Atual</p>
                            <p className="text-xs sm:text-sm font-semibold text-slate-900">{obra.etapaAtual}</p>
                          </div>
                          <div>
                            <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">Prazo</p>
                            <p className="text-xs sm:text-sm font-semibold text-slate-900 flex items-center gap-1">
                              <Clock className="w-2 h-2 sm:w-3 sm:h-3" />
                              {obra.prazoEntrega}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">Orçamento</p>
                            <p className="text-xs sm:text-sm font-semibold text-slate-900">
                              R$ {(obra.orcamento / 1000).toFixed(0)}k
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">Lucro</p>
                            <p className="text-xs sm:text-sm font-semibold text-blue-600">
                              R$ {(obra.lucro / 1000).toFixed(1)}k
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <span className="text-slate-600">Progresso</span>
                            <span className="font-semibold text-slate-900">{obra.progresso}%</span>
                          </div>
                          <Progress value={obra.progresso} className="h-1.5 sm:h-2" />
                          
                          <div className="flex items-center justify-between text-xs sm:text-sm mt-2 sm:mt-3">
                            <span className="text-slate-600">Financeiro</span>
                            <span className="font-semibold text-slate-900">
                              R$ {(obra.gasto / 1000).toFixed(0)}k / R$ {(obra.orcamento / 1000).toFixed(0)}k
                            </span>
                          </div>
                          <Progress value={(obra.gasto / obra.orcamento) * 100} className="h-1.5 sm:h-2" />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-0">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="border-slate-300 flex-1 sm:flex-none text-xs h-8">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          Cronograma
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-slate-300 flex-1 sm:flex-none text-xs h-8"
                          onClick={() => setSelectedObraFinanceiro(obra.id)}
                        >
                          <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          Financeiro
                        </Button>
                      </div>
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs h-8 sm:h-9"
                        onClick={() => setSelectedObra(obra.id)}
                      >
                        Ver Detalhes
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Alertas - Mobile Optimized */}
            <Card className="p-4 sm:p-6 bg-amber-50 border-amber-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-bold text-amber-900 mb-1">Atenção: Medição Pendente</h3>
                  <p className="text-xs sm:text-sm text-amber-800 mb-2 sm:mb-3">
                    A obra "Residência Silva" está com medição da Caixa agendada para daqui 5 dias. 
                    Certifique-se de que todos os documentos estão prontos.
                  </p>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white text-xs h-8">
                    Ver Checklist
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* SIMULADOR MCMV - Mobile Optimized */}
          <TabsContent value="simulador" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Formulário */}
              <Card className="p-4 sm:p-6 bg-white border-slate-200">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h2 className="text-lg sm:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">Simulador de Viabilidade MCMV</h2>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Insira os dados do cliente e da obra para verificar se o financiamento é viável
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <Label htmlFor="renda" className="text-slate-700 text-xs sm:text-sm">Renda Familiar Mensal</Label>
                      <div className="relative mt-1.5">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs sm:text-sm">R$</span>
                        <Input
                          id="renda"
                          type="number"
                          placeholder="3.500,00"
                          className="pl-10 border-slate-300 h-9 sm:h-10 text-sm"
                          value={simuladorData.renda}
                          onChange={(e) => setSimuladorData({...simuladorData, renda: e.target.value})}
                        />
                      </div>
                      <p className="text-[10px] sm:text-xs text-slate-500 mt-1">Soma de todas as rendas comprovadas</p>
                    </div>

                    <div>
                      <Label htmlFor="tipoTerreno" className="text-slate-700 text-xs sm:text-sm">Tipo do Terreno</Label>
                      <Select 
                        value={simuladorData.tipoTerreno}
                        onValueChange={(value) => setSimuladorData({...simuladorData, tipoTerreno: value})}
                      >
                        <SelectTrigger className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="proprio">Terreno Próprio</SelectItem>
                          <SelectItem value="financiar">Terreno + Construção</SelectItem>
                          <SelectItem value="lote">Lote Urbanizado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="custoObra" className="text-slate-700 text-xs sm:text-sm">Custo Estimado da Obra</Label>
                      <div className="relative mt-1.5">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs sm:text-sm">R$</span>
                        <Input
                          id="custoObra"
                          type="number"
                          placeholder="180.000,00"
                          className="pl-10 border-slate-300 h-9 sm:h-10 text-sm"
                          value={simuladorData.custoObra}
                          onChange={(e) => setSimuladorData({...simuladorData, custoObra: e.target.value})}
                        />
                      </div>
                      <p className="text-[10px] sm:text-xs text-slate-500 mt-1">Valor total incluindo materiais e mão de obra</p>
                    </div>

                    <div>
                      <Label htmlFor="prazo" className="text-slate-700 text-xs sm:text-sm">Prazo de Execução</Label>
                      <Select
                        value={simuladorData.prazo}
                        onValueChange={(value) => setSimuladorData({...simuladorData, prazo: value})}
                      >
                        <SelectTrigger className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm">
                          <SelectValue placeholder="Selecione o prazo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">6 meses</SelectItem>
                          <SelectItem value="12">12 meses</SelectItem>
                          <SelectItem value="18">18 meses</SelectItem>
                          <SelectItem value="24">24 meses</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white h-10 sm:h-12 text-sm sm:text-base"
                      disabled={!simuladorData.renda || !simuladorData.custoObra}
                    >
                      <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Calcular Viabilidade
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Resultado */}
              <Card className={`p-4 sm:p-6 border-2 ${viabilidade?.viavel ? 'bg-blue-50 border-blue-200' : viabilidade ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200'}`}>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">Resultado da Análise</h3>
                    {!viabilidade && (
                      <p className="text-xs sm:text-sm text-slate-600">
                        Preencha os campos ao lado para ver o resultado da simulação
                      </p>
                    )}
                  </div>

                  {viabilidade && (
                    <>
                      <div className={`p-4 sm:p-6 rounded-xl ${viabilidade.viavel ? 'bg-blue-100' : 'bg-red-100'}`}>
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                          {viabilidade.viavel ? (
                            <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                          ) : (
                            <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                          )}
                          <div>
                            <p className={`text-lg sm:text-2xl font-bold ${viabilidade.viavel ? 'text-blue-900' : 'text-red-900'}`}>
                              {viabilidade.viavel ? 'Obra Viável!' : 'Obra Inviável'}
                            </p>
                            <p className={`text-xs sm:text-sm ${viabilidade.viavel ? 'text-blue-700' : 'text-red-700'}`}>
                              {viabilidade.viavel 
                                ? 'O cliente tem capacidade de pagamento' 
                                : 'Renda insuficiente para o financiamento'}
                            </p>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg">
                          <span className="text-xs sm:text-sm text-slate-600">Capacidade de Pagamento</span>
                          <span className="text-base sm:text-lg font-bold text-slate-900">
                            R$ {(viabilidade.capacidadePagamento / 1000).toFixed(0)}k
                          </span>
                        </div>

                        <div className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg">
                          <span className="text-xs sm:text-sm text-slate-600">Custo da Obra</span>
                          <span className="text-base sm:text-lg font-bold text-slate-900">
                            R$ {(parseFloat(simuladorData.custoObra) / 1000).toFixed(0)}k
                          </span>
                        </div>

                        <div className={`flex items-center justify-between p-3 sm:p-4 rounded-lg ${viabilidade.viavel ? 'bg-blue-100' : 'bg-red-100'}`}>
                          <span className={`text-xs sm:text-sm font-semibold ${viabilidade.viavel ? 'text-blue-700' : 'text-red-700'}`}>
                            {viabilidade.viavel ? 'Margem de Segurança' : 'Déficit'}
                          </span>
                          <span className={`text-base sm:text-lg font-bold ${viabilidade.viavel ? 'text-blue-900' : 'text-red-900'}`}>
                            R$ {Math.abs(viabilidade.diferenca / 1000).toFixed(0)}k
                          </span>
                        </div>

                        <div className="p-3 sm:p-4 bg-white rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs sm:text-sm text-slate-600">Índice de Viabilidade</span>
                            <span className="text-xs sm:text-sm font-semibold text-slate-900">
                              {viabilidade.percentualViabilidade.toFixed(0)}%
                            </span>
                          </div>
                          <Progress value={Math.min(viabilidade.percentualViabilidade, 100)} className="h-1.5 sm:h-2" />
                        </div>
                      </div>

                      <Separator />

                      <div className="space-y-2 sm:space-y-3">
                        <h4 className="text-sm sm:text-base font-semibold text-slate-900">Próximos Passos:</h4>
                        {viabilidade.viavel ? (
                          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>Solicitar documentação completa do cliente</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>Elaborar projeto compatível com padrões MCMV</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>Preparar orçamento detalhado com base SINAPI</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>Iniciar processo de aprovação na Caixa</span>
                            </li>
                          </ul>
                        ) : (
                          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                              <span>Revisar escopo do projeto para reduzir custos</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                              <span>Verificar possibilidade de co-devedor</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                              <span>Considerar entrada maior do cliente</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                              <span>Avaliar outras linhas de financiamento</span>
                            </li>
                          </ul>
                        )}
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm h-9 sm:h-10">
                        <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        Gerar Relatório Completo
                      </Button>
                    </>
                  )}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* GUIA INTERATIVO - Mobile Optimized */}
          <TabsContent value="guia" className="mt-0">
            <div className="space-y-4 sm:space-y-6">
              <Card className="p-4 sm:p-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">Guia Completo da Construção Financiada</h2>
                    <p className="text-xs sm:text-sm text-blue-100 mb-3 sm:mb-4">
                      Aprenda o passo a passo completo para dominar obras financiadas pelo MCMV
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>8 módulos completos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Conteúdo prático</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl flex items-center justify-center ml-3">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {guiaSteps.map((step) => (
                  <Card 
                    key={step.id} 
                    className={`p-4 sm:p-6 border-2 transition-all hover:shadow-lg ${ 
                      step.status === 'premium' 
                        ? 'bg-slate-50 border-slate-200 opacity-75' 
                        : 'bg-white border-slate-200 hover:border-blue-200 cursor-pointer'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                        {step.icone}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1 sm:mb-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">Módulo {step.id}</p>
                            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-0.5 sm:mb-1">{step.titulo}</h3>
                          </div>
                          {step.status === 'premium' && (
                            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 text-[10px] sm:text-xs ml-2">
                              Premium
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4">{step.descricao}</p>
                        {step.status === 'disponivel' ? (
                          <Button 
                            size="sm" 
                            className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto text-xs h-8"
                            onClick={() => setSelectedGuiaModule(step.id)}
                          >
                            Acessar Módulo
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" className="border-slate-300 w-full sm:w-auto text-xs h-8" disabled>
                            Disponível no Premium
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* CTA Premium - Mobile Optimized */}
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">Desbloqueie Todo o Conteúdo</h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-4 sm:mb-6">
                    Acesse todos os módulos do guia, gerencie obras ilimitadas e use o simulador MCMV sem restrições
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto text-xs sm:text-sm h-9 sm:h-10">
                      Assinar Plano Premium
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto text-xs sm:text-sm h-9 sm:h-10">
                      Ver Planos
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* NOVA OBRA - Mobile Optimized */}
          <TabsContent value="nova-obra" className="mt-0">
            <Card className="p-4 sm:p-8 bg-white border-slate-200 max-w-4xl mx-auto">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold text-slate-900 mb-1 sm:mb-2">Cadastrar Nova Obra</h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Preencha os dados abaixo para adicionar uma nova obra ao sistema
                  </p>
                </div>

                <Separator />

                <div className="space-y-4 sm:space-y-6">
                  {/* Informações Básicas */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Informações Básicas</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <Label htmlFor="nomeObra" className="text-slate-700 text-xs sm:text-sm">Nome da Obra</Label>
                        <Input
                          id="nomeObra"
                          placeholder="Ex: Residência Silva"
                          className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="tipoObra" className="text-slate-700 text-xs sm:text-sm">Tipo de Obra</Label>
                        <Select>
                          <SelectTrigger className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm">
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mcmv1">MCMV Faixa 1</SelectItem>
                            <SelectItem value="mcmv2">MCMV Faixa 2</SelectItem>
                            <SelectItem value="mcmv3">MCMV Faixa 3</SelectItem>
                            <SelectItem value="particular">Particular</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Documentação Legal */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Documentação Legal</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div>
                        <Label htmlFor="alvara" className="text-slate-700 text-xs sm:text-sm">Número do Alvará</Label>
                        <Input
                          id="alvara"
                          placeholder="Ex: 2024/001234"
                          className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="art" className="text-slate-700 text-xs sm:text-sm">Número da ART</Label>
                        <Input
                          id="art"
                          placeholder="Ex: SP20240012345"
                          className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contrato" className="text-slate-700 text-xs sm:text-sm">Número do Contrato</Label>
                        <Input
                          id="contrato"
                          placeholder="Ex: CONT-2024-001"
                          className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Endereço */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Endereço</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        <div className="sm:col-span-2">
                          <Label htmlFor="endereco" className="text-slate-700 text-xs sm:text-sm">Logradouro</Label>
                          <Input
                            id="endereco"
                            placeholder="Rua, Avenida, etc."
                            className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                          />
                        </div>
                        <div>
                          <Label htmlFor="numero" className="text-slate-700 text-xs sm:text-sm">Número</Label>
                          <Input
                            id="numero"
                            placeholder="123"
                            className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        <div>
                          <Label htmlFor="cidade" className="text-slate-700 text-xs sm:text-sm">Cidade</Label>
                          <Input
                            id="cidade"
                            placeholder="São Paulo"
                            className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                          />
                        </div>
                        <div>
                          <Label htmlFor="estado" className="text-slate-700 text-xs sm:text-sm">Estado</Label>
                          <Select>
                            <SelectTrigger className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm">
                              <SelectValue placeholder="UF" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="SP">SP</SelectItem>
                              <SelectItem value="RJ">RJ</SelectItem>
                              <SelectItem value="MG">MG</SelectItem>
                              <SelectItem value="ES">ES</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="cep" className="text-slate-700 text-xs sm:text-sm">CEP</Label>
                          <Input
                            id="cep"
                            placeholder="00000-000"
                            className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dados do Cliente */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Dados do Cliente</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <Label htmlFor="nomeCliente" className="text-slate-700 text-xs sm:text-sm">Nome Completo</Label>
                        <Input
                          id="nomeCliente"
                          placeholder="João da Silva"
                          className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefone" className="text-slate-700 text-xs sm:text-sm">Telefone</Label>
                        <Input
                          id="telefone"
                          placeholder="(11) 98765-4321"
                          className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cpf" className="text-slate-700 text-xs sm:text-sm">CPF</Label>
                        <Input
                          id="cpf"
                          placeholder="000.000.000-00"
                          className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-slate-700 text-xs sm:text-sm">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="cliente@email.com"
                          className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dados Financeiros */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Dados Financeiros</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <div>
                        <Label htmlFor="orcamento" className="text-slate-700 text-xs sm:text-sm">Orçamento Total</Label>
                        <div className="relative mt-1.5">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs sm:text-sm">R$</span>
                          <Input
                            id="orcamento"
                            type="number"
                            placeholder="180.000,00"
                            className="pl-10 border-slate-300 h-9 sm:h-10 text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="lucroEstimado" className="text-slate-700 text-xs sm:text-sm">Lucro Estimado</Label>
                        <div className="relative mt-1.5">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs sm:text-sm">R$</span>
                          <Input
                            id="lucroEstimado"
                            type="number"
                            placeholder="15.000,00"
                            className="pl-10 border-slate-300 h-9 sm:h-10 text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="prazoExecucao" className="text-slate-700 text-xs sm:text-sm">Prazo de Execução</Label>
                        <Select>
                          <SelectTrigger className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3">3 meses</SelectItem>
                            <SelectItem value="6">6 meses</SelectItem>
                            <SelectItem value="12">12 meses</SelectItem>
                            <SelectItem value="18">18 meses</SelectItem>
                            <SelectItem value="24">24 meses</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Datas */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Cronograma</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <Label htmlFor="dataInicio" className="text-slate-700 text-xs sm:text-sm">Data de Início</Label>
                        <Input
                          id="dataInicio"
                          type="date"
                          className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dataPrevisao" className="text-slate-700 text-xs sm:text-sm">Data Prevista de Conclusão</Label>
                        <Input
                          id="dataPrevisao"
                          type="date"
                          className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Botões de Ação - Mobile Optimized */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      className="border-slate-300 text-xs sm:text-sm h-9 sm:h-10"
                      onClick={() => setActiveTab("dashboard")}
                    >
                      Cancelar
                    </Button>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm h-9 sm:h-10"
                      onClick={() => {
                        setActiveTab("dashboard")
                      }}
                    >
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Cadastrar Obra
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Modal de Detalhes da Obra - Mobile Optimized */}
      {selectedObra && obraSelecionada && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4" onClick={() => setSelectedObra(null)}>
          <Card className="w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-slate-200 p-4 sm:p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">{obraSelecionada.nome}</h2>
                <p className="text-xs sm:text-sm text-slate-600">{obraSelecionada.endereco}</p>
              </div>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setSelectedObra(null)}
                className="border-slate-300 h-8 w-8 sm:h-10 sm:w-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Informações do Cliente */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">Informações do Cliente</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <Card className="p-3 sm:p-4 bg-slate-50 border-slate-200">
                    <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">Cliente</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">{obraSelecionada.detalhes.cliente}</p>
                  </Card>
                  <Card className="p-3 sm:p-4 bg-slate-50 border-slate-200">
                    <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">Telefone</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">{obraSelecionada.detalhes.telefone}</p>
                  </Card>
                  <Card className="p-3 sm:p-4 bg-slate-50 border-slate-200">
                    <p className="text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">Data de Início</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900">{obraSelecionada.detalhes.dataInicio}</p>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Progresso Geral */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">Progresso Geral</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <Card className="p-3 sm:p-4 bg-white border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-slate-600">Progresso Físico</span>
                      <span className="text-base sm:text-lg font-bold text-slate-900">{obraSelecionada.progresso}%</span>
                    </div>
                    <Progress value={obraSelecionada.progresso} className="h-2 sm:h-3" />
                  </Card>
                  <Card className="p-3 sm:p-4 bg-white border-slate-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-slate-600">Execução Financeira</span>
                      <span className="text-base sm:text-lg font-bold text-slate-900">
                        {((obraSelecionada.gasto / obraSelecionada.orcamento) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <Progress value={(obraSelecionada.gasto / obraSelecionada.orcamento) * 100} className="h-2 sm:h-3" />
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Etapas da Obra */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">Etapas da Obra</h3>
                <div className="space-y-2 sm:space-y-3 max-h-80 sm:max-h-96 overflow-y-auto">
                  {obraSelecionada.detalhes.etapas.map((etapa, index) => (
                    <Card key={index} className="p-3 sm:p-4 bg-white border-slate-200">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
                            etapa.status === 'concluida' ? 'bg-blue-100' :
                            etapa.status === 'em_andamento' ? 'bg-blue-100' :
                            'bg-slate-100'
                          }`}>
                            {etapa.status === 'concluida' ? (
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                            ) : etapa.status === 'em_andamento' ? (
                              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                            ) : (
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-400 rounded-full" />
                            )}
                          </div>
                          <div>
                            <h4 className="text-xs sm:text-sm font-semibold text-slate-900">{etapa.nome}</h4>
                            <p className="text-[10px] sm:text-xs text-slate-500">R$ {(etapa.valor / 1000).toFixed(0)}k</p>
                          </div>
                        </div>
                        <Badge className={
                          etapa.status === 'concluida' ? 'bg-blue-100 text-blue-700 text-[10px] sm:text-xs' :
                          etapa.status === 'em_andamento' ? 'bg-blue-100 text-blue-700 text-[10px] sm:text-xs' :
                          'bg-slate-100 text-slate-700 text-[10px] sm:text-xs'
                        }>
                          {etapa.status === 'concluida' ? 'Concluída' :
                           etapa.status === 'em_andamento' ? 'Em Andamento' :
                           'Pendente'}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5 sm:mb-2">
                        <span className="text-slate-600">Progresso</span>
                        <span className="font-semibold text-slate-900">{etapa.progresso}%</span>
                      </div>
                      <Progress value={etapa.progresso} className="h-1.5 sm:h-2" />
                    </Card>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Alertas e Próximas Ações */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">Alertas e Próximas Ações</h3>
                <div className="space-y-2 sm:space-y-3">
                  <Card className="p-3 sm:p-4 bg-blue-50 border-blue-200">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-blue-900 mb-0.5 sm:mb-1">Próxima Medição</p>
                        <p className="text-xs sm:text-sm text-blue-800">{obraSelecionada.detalhes.proximaMedicao}</p>
                      </div>
                    </div>
                  </Card>

                  {obraSelecionada.detalhes.documentosPendentes.length > 0 && (
                    <Card className="p-3 sm:p-4 bg-amber-50 border-amber-200">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm font-semibold text-amber-900 mb-1.5 sm:mb-2">Documentos Pendentes</p>
                          <ul className="space-y-0.5 sm:space-y-1">
                            {obraSelecionada.detalhes.documentosPendentes.map((doc, index) => (
                              <li key={index} className="text-xs sm:text-sm text-amber-800 flex items-center gap-2">
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-amber-600 rounded-full" />
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  )}
                </div>
              </div>

              {/* Ações */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm h-9 sm:h-10">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Gerar Relatório Completo
                </Button>
                <Button variant="outline" className="flex-1 border-slate-300 text-xs sm:text-sm h-9 sm:h-10">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Ver Cronograma Detalhado
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Modal Financeiro - Mobile Optimized */}
      {selectedObraFinanceiro && obraFinanceiroSelecionada && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4" onClick={() => setSelectedObraFinanceiro(null)}>
          <Card className="w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-slate-200 p-4 sm:p-6 flex items-center justify-between z-10">
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-slate-900">Gestão Financeira</h2>
                <p className="text-xs sm:text-sm text-slate-600">{obraFinanceiroSelecionada.nome}</p>
              </div>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setSelectedObraFinanceiro(null)}
                className="border-slate-300 h-8 w-8 sm:h-10 sm:w-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Resumo Financeiro */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">Resumo Financeiro</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                  <Card className="p-3 sm:p-4 bg-blue-50 border-blue-200">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Wallet className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-blue-700">Entradas</p>
                        <p className="text-base sm:text-lg font-bold text-blue-900">
                          R$ {(obraFinanceiroSelecionada.detalhes.financeiro.fluxoCaixa.entradas / 1000).toFixed(0)}k
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-3 sm:p-4 bg-red-50 border-red-200">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-red-700">Saídas</p>
                        <p className="text-base sm:text-lg font-bold text-red-900">
                          R$ {(obraFinanceiroSelecionada.detalhes.financeiro.fluxoCaixa.saidas / 1000).toFixed(0)}k
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-3 sm:p-4 bg-blue-50 border-blue-200">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <PiggyBank className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-blue-700">Saldo Atual</p>
                        <p className="text-base sm:text-lg font-bold text-blue-900">
                          R$ {(obraFinanceiroSelecionada.detalhes.financeiro.fluxoCaixa.saldo / 1000).toFixed(0)}k
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-3 sm:p-4 bg-amber-50 border-amber-200">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-amber-700">Próxima Liberação</p>
                        <p className="text-base sm:text-lg font-bold text-amber-900">
                          R$ {(obraFinanceiroSelecionada.detalhes.financeiro.fluxoCaixa.proximaLiberacao / 1000).toFixed(0)}k
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <Separator />

              {/* Liberações da Caixa */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">Liberações da Caixa</h3>
                <div className="space-y-2 sm:space-y-3">
                  {obraFinanceiroSelecionada.detalhes.financeiro.liberacoes.map((liberacao, index) => (
                    <Card key={index} className={`p-3 sm:p-4 ${
                      liberacao.status === 'liberado' ? 'bg-blue-50 border-blue-200' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${
                            liberacao.status === 'liberado' ? 'bg-blue-100' : 'bg-slate-200'
                          }`}>
                            {liberacao.status === 'liberado' ? (
                              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                            ) : (
                              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500" />
                            )}
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-semibold text-slate-900">{liberacao.etapa}</p>
                            <p className="text-[10px] sm:text-xs text-slate-600">{liberacao.data}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm sm:text-lg font-bold text-slate-900">
                            R$ {(liberacao.valor / 1000).toFixed(0)}k
                          </p>
                          <Badge className={
                            liberacao.status === 'liberado' 
                              ? 'bg-blue-100 text-blue-700 text-[10px] sm:text-xs' 
                              : 'bg-slate-200 text-slate-700 text-[10px] sm:text-xs'
                          }>
                            {liberacao.status === 'liberado' ? 'Liberado' : 'Pendente'}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Distribuição de Despesas */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">Distribuição de Despesas</h3>
                <div className="space-y-2 sm:space-y-3">
                  {obraFinanceiroSelecionada.detalhes.financeiro.despesas.map((despesa, index) => (
                    <Card key={index} className="p-3 sm:p-4 bg-white border-slate-200">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <span className="text-xs sm:text-sm font-semibold text-slate-900">{despesa.categoria}</span>
                        <div className="text-right">
                          <p className="text-xs sm:text-sm font-bold text-slate-900">R$ {(despesa.valor / 1000).toFixed(0)}k</p>
                          <p className="text-[10px] sm:text-xs text-slate-500">{despesa.percentual}%</p>
                        </div>
                      </div>
                      <Progress value={despesa.percentual} className="h-1.5 sm:h-2" />
                    </Card>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Ações */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm h-9 sm:h-10">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Exportar Relatório Financeiro
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-slate-300 text-xs sm:text-sm h-9 sm:h-10"
                  onClick={() => setShowAddDespesaModal(true)}
                >
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Adicionar Despesa
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Modal Adicionar Despesa - Mobile Optimized */}
      {showAddDespesaModal && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-2 sm:p-4" onClick={() => setShowAddDespesaModal(false)}>
          <Card className="w-full max-w-md bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 sm:p-6 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-base sm:text-xl font-bold text-slate-900">Adicionar Despesa</h3>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setShowAddDespesaModal(false)}
                className="border-slate-300 h-8 w-8 sm:h-10 sm:w-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div>
                <Label htmlFor="categoria" className="text-slate-700 text-xs sm:text-sm">Categoria</Label>
                <Select>
                  <SelectTrigger className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="materiais">Materiais</SelectItem>
                    <SelectItem value="mao_obra">Mão de Obra</SelectItem>
                    <SelectItem value="equipamentos">Equipamentos</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="descricao" className="text-slate-700 text-xs sm:text-sm">Descrição</Label>
                <Input
                  id="descricao"
                  placeholder="Ex: Cimento, Areia, Pedreiro..."
                  className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                />
              </div>

              <div>
                <Label htmlFor="valor" className="text-slate-700 text-xs sm:text-sm">Valor</Label>
                <div className="relative mt-1.5">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs sm:text-sm">R$</span>
                  <Input
                    id="valor"
                    type="number"
                    placeholder="0,00"
                    className="pl-10 border-slate-300 h-9 sm:h-10 text-sm"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="data" className="text-slate-700 text-xs sm:text-sm">Data</Label>
                <Input
                  id="data"
                  type="date"
                  className="mt-1.5 border-slate-300 h-9 sm:h-10 text-sm"
                />
              </div>

              <Separator />

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 border-slate-300 text-xs sm:text-sm h-9 sm:h-10"
                  onClick={() => setShowAddDespesaModal(false)}
                >
                  Cancelar
                </Button>
                <Button 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm h-9 sm:h-10"
                  onClick={() => {
                    setShowAddDespesaModal(false)
                  }}
                >
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Adicionar
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Modal do Guia Interativo - Mobile Optimized */}
      {selectedGuiaModule && moduloSelecionado && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4" onClick={() => setSelectedGuiaModule(null)}>
          <Card className="w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-slate-200 p-4 sm:p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl sm:text-2xl">
                  {moduloSelecionado.icone}
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500">Módulo {moduloSelecionado.id}</p>
                  <h2 className="text-lg sm:text-2xl font-bold text-slate-900">{moduloSelecionado.titulo}</h2>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setSelectedGuiaModule(null)}
                className="border-slate-300 h-8 w-8 sm:h-10 sm:w-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Introdução */}
              <div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {moduloSelecionado.conteudo.introducao}
                </p>
              </div>

              <Separator />

              {/* Tópicos */}
              <div className="space-y-4 sm:space-y-6">
                {moduloSelecionado.conteudo.topicos.map((topico, index) => (
                  <Card key={index} className="p-4 sm:p-6 bg-slate-50 border-slate-200">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm sm:text-base font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1 sm:mb-2">{topico.titulo}</h4>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{topico.conteudo}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Separator />

              {/* Ações */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-0 pt-4">
                <Button 
                  variant="outline" 
                  className="border-slate-300 text-xs sm:text-sm h-9 sm:h-10"
                  onClick={() => {
                    const currentIndex = guiaSteps.findIndex(s => s.id === selectedGuiaModule)
                    if (currentIndex > 0) {
                      setSelectedGuiaModule(guiaSteps[currentIndex - 1].id)
                    }
                  }}
                  disabled={selectedGuiaModule === 1}
                >
                  Módulo Anterior
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm h-9 sm:h-10"
                  onClick={() => {
                    const currentIndex = guiaSteps.findIndex(s => s.id === selectedGuiaModule)
                    if (currentIndex < guiaSteps.length - 1) {
                      const nextModule = guiaSteps[currentIndex + 1]
                      if (nextModule.status === 'disponivel') {
                        setSelectedGuiaModule(nextModule.id)
                      }
                    }
                  }}
                  disabled={selectedGuiaModule === guiaSteps.length || guiaSteps[selectedGuiaModule]?.status === 'premium'}
                >
                  Próximo Módulo
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Footer - Mobile Optimized */}
      <footer className="bg-white border-t border-slate-200 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-slate-900">Minha Obra Minha Vida</p>
                <p className="text-[10px] sm:text-xs text-slate-500">Gestão inteligente de obras MCMV</p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Suporte</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Documentação</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
