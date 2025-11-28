export default function Demo() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Demonstração Completa - MINHA OBRA MINHA VIDA
          </h1>
          <p className="text-lg text-gray-600">
            Assista ao vídeo explicativo completo mostrando todas as funcionalidades do sistema
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="aspect-video mb-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demonstração MINHA OBRA MINHA VIDA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">O que você verá no vídeo:</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Dashboard Principal:</strong> Visão geral de todos os projetos ativos</li>
                <li><strong>Cadastro de Obras:</strong> Como criar e configurar novos empreendimentos</li>
                <li><strong>Controle de Progresso:</strong> Acompanhamento de etapas e marcos</li>
                <li><strong>Gestão Financeira:</strong> Orçamentos, custos e relatórios financeiros</li>
                <li><strong>Equipe e Fornecedores:</strong> Gerenciamento de recursos humanos e materiais</li>
                <li><strong>Documentação:</strong> Upload e organização de documentos obrigatórios</li>
                <li><strong>Relatórios:</strong> Geração de relatórios para CAIXA e outros órgãos</li>
                <li><strong>Integrações:</strong> Conexão com sistemas externos</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Funcionalidades Destacadas:</h3>
              <p className="text-blue-800">
                Nosso sistema foi desenvolvido especificamente para o Programa Minha Casa Minha Vida,
                garantindo conformidade com todas as exigências e facilitando o cumprimento das metas.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => window.close()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Fechar Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}