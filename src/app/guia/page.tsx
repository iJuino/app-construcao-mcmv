import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Calculator, CheckSquare, AlertTriangle, DollarSign, Users, Clock } from "lucide-react";

export default function GuiaPage() {
  const topicos = [
    {
      titulo: "Captação do Cliente",
      descricao: "Como identificar e conquistar clientes interessados em financiamento MCMV",
      icon: Users,
      slug: "captacao-cliente"
    },
    {
      titulo: "Documentação Necessária",
      descricao: "Lista completa de documentos para aprovação do financiamento",
      icon: FileText,
      slug: "documentacao"
    },
    {
      titulo: "Projeto e Padrões MCMV",
      descricao: "Normas técnicas e padrões obrigatórios para projetos habitacionais",
      icon: BookOpen,
      slug: "projeto-padrao"
    },
    {
      titulo: "Orçamento Compatível com SINAPI",
      descricao: "Como elaborar orçamentos seguindo as tabelas do SINAPI",
      icon: Calculator,
      slug: "orcamento-sinapi"
    },
    {
      titulo: "Checklist de Aprovação da Caixa",
      descricao: "Itens obrigatórios para aprovação do projeto pela Caixa Econômica",
      icon: CheckSquare,
      slug: "checklist-caixa"
    },
    {
      titulo: "Processo de Liberação e Etapas",
      descricao: "Fluxo completo desde aprovação até entrega da obra",
      icon: Clock,
      slug: "processo-liberacao"
    },
    {
      titulo: "Prestação de Contas",
      descricao: "Como fazer a prestação de contas para recebimento dos recursos",
      icon: DollarSign,
      slug: "prestacao-contas"
    },
    {
      titulo: "Erros que Reprovam",
      descricao: "Principais erros que levam à reprovação do projeto",
      icon: AlertTriangle,
      slug: "erros-reprovam"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Guia Interativo da Construção Financiada (MCMV)</h1>
          <p className="text-gray-600 mt-2">
            Aprenda passo a passo como gerenciar obras financiadas pelo Programa Minha Casa Minha Vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {topicos.map((topico) => {
            const Icon = topico.icon;
            return (
              <Card key={topico.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Icon className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-lg">{topico.titulo}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {topico.descricao}
                  </CardDescription>
                  <Button asChild className="w-full">
                    <Link href={`/guia/${topico.slug}`}>
                      Acessar Guia
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900">Simulador de Viabilidade MCMV</CardTitle>
            <CardDescription className="text-blue-700">
              Ferramenta exclusiva para verificar se um projeto é viável financeiramente
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 mb-4">
              Insira dados como renda do cliente, tipo de terreno, custo estimado e prazo para descobrir
              se a obra é viável pelo financiamento MCMV.
            </p>
            <Button asChild variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
              <Link href="/simulador">
                Acessar Simulador
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}