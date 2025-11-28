import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Clock, DollarSign, TrendingUp, Users } from "lucide-react";

export default function Dashboard() {
  // Dados mockados - em produção viriam do Supabase
  const obras = [
    {
      id: 1,
      nome: "Conjunto Habitacional São João",
      percentualConcluido: 75,
      percentualPago: 60,
      atraso: 5,
      lucroPrejuizo: 15000,
      etapaAtual: "Fundação",
      status: "Em andamento"
    },
    {
      id: 2,
      nome: "Residencial Parque Verde",
      percentualConcluido: 45,
      percentualPago: 50,
      atraso: 0,
      lucroPrejuizo: -5000,
      etapaAtual: "Estrutura",
      status: "Em andamento"
    }
  ];

  const notificacoes = [
    { id: 1, tipo: "alerta", mensagem: "Obra São João com atraso de 5 dias", data: "2024-01-15" },
    { id: 2, tipo: "sucesso", mensagem: "Pagamento liberado para Parque Verde", data: "2024-01-14" },
    { id: 3, tipo: "info", mensagem: "Nova documentação requerida pela Caixa", data: "2024-01-13" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Visão geral das suas obras MCMV</p>
        </div>

        {/* Cards de métricas principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Obras Ativas</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{obras.length}</div>
              <p className="text-xs text-muted-foreground">Em andamento</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lucro Total</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                R$ {obras.reduce((acc, obra) => acc + obra.lucroPrejuizo, 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">Mês atual</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Atrasos</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {obras.filter(obra => obra.atraso > 0).length}
              </div>
              <p className="text-xs text-muted-foreground">Obras com atraso</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Concluídas</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Este ano</p>
            </CardContent>
          </Card>
        </div>

        {/* Lista de obras */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {obras.map((obra) => (
            <Card key={obra.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {obra.nome}
                  <Badge variant={obra.status === "Em andamento" ? "default" : "secondary"}>
                    {obra.status}
                  </Badge>
                </CardTitle>
                <CardDescription>Etapa atual: {obra.etapaAtual}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progresso</span>
                    <span>{obra.percentualConcluido}%</span>
                  </div>
                  <Progress value={obra.percentualConcluido} />
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Pagamento</span>
                    <span>{obra.percentualPago}%</span>
                  </div>
                  <Progress value={obra.percentualPago} />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Atraso:</span>
                    <span className={`ml-2 ${obra.atraso > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {obra.atraso} dias
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Lucro/Prejuízo:</span>
                    <span className={`ml-2 ${obra.lucroPrejuizo >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      R$ {obra.lucroPrejuizo.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notificações */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Notificações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {notificacoes.map((notificacao) => (
                <div key={notificacao.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    notificacao.tipo === 'alerta' ? 'bg-red-500' :
                    notificacao.tipo === 'sucesso' ? 'bg-green-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{notificacao.mensagem}</p>
                    <p className="text-xs text-gray-500">{notificacao.data}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}