import React from 'react';

const OKRTable = () => {
  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">OKR Tracking</h1>
      
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-3 bg-pink-600 text-white font-semibold text-left w-16">ID</th>
              <th className="p-3 bg-pink-600 text-white font-semibold text-left">Objetivo Legal Ops</th>
              <th className="p-3 bg-pink-600 text-white font-semibold text-left w-20">KRs</th>
              <th className="p-3 bg-pink-600 text-white font-semibold text-left">Descrição</th>
              <th className="p-3 bg-pink-600 text-white font-semibold text-center">Baseline (2H24)</th>
              <th className="p-3 bg-pink-600 text-white font-semibold text-center">Target (1H25)</th>
              <th className="p-3 bg-black text-white font-semibold text-center">Fev</th>
              <th className="p-3 bg-black text-white font-semibold text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* O1 - Primeiro objetivo */}
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700 align-top font-medium" rowSpan="3">O1</td>
              <td className="p-3 text-gray-700 align-top" rowSpan="3">Garantir que a BU seja sustentável e saudável financeiramente</td>
              <td className="p-3 text-gray-700">KR 1.1</td>
              <td className="p-3 text-gray-700">Atingir e manter Receita/FTE da BU em, no mínimo, R$20mil</td>
              <td className="p-3 text-gray-700 text-center">R$ 17.000,00</td>
              <td className="p-3 text-gray-700 text-center">R$ 20.000,00</td>
              <td className="p-3 text-gray-700 text-center font-medium">R$ 21.284,21</td>
              <td className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">On Track</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-3 text-gray-700">KR 2.1</td>
              <td className="p-3 text-gray-700">Alcançar, no mínimo, 90% de respostas positivas no CSAT dos produtos paralegais</td>
              <td className="p-3 text-gray-700 text-center">79%</td>
              <td className="p-3 text-gray-700 text-center">90%</td>
              <td className="p-3 text-gray-700 text-center font-medium">83%</td>
              <td className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">On Track</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-3 text-gray-700">KR 2.2</td>
              <td className="p-3 text-gray-700">Alcançar Csat de 4.5</td>
              <td className="p-3 text-gray-700 text-center">4.3</td>
              <td className="p-3 text-gray-700 text-center">4.5</td>
              <td className="p-3 text-gray-700 text-center font-medium">4.5</td>
              <td className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">On Track</span></td>
            </tr>
            
            {/* O2 - Segundo objetivo */}
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700 align-top font-medium" rowSpan="6">O2</td>
              <td className="p-3 text-gray-700 align-top" rowSpan="6">Garantir uma excelente experiência aos clientes paralegais durante toda a jornada</td>
              <td className="p-3 text-gray-700">M.O.</td>
              <td className="p-3 text-gray-700"># resposta CSAT</td>
              <td className="p-3 text-gray-700 text-center">8</td>
              <td className="p-3 text-gray-700 text-center">X</td>
              <td className="p-3 text-gray-700 text-center font-medium">6</td>
              <td className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">On Track</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-3 text-gray-700">M.O.</td>
              <td className="p-3 text-gray-700">Taxa de resposta CSAT</td>
              <td className="p-3 text-gray-700 text-center">20%</td>
              <td className="p-3 text-gray-700 text-center">30%</td>
              <td className="p-3 text-gray-700 text-center font-medium">22%</td>
              <td className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">On Track</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-3 text-gray-700">M.O.</td>
              <td className="p-3 text-gray-700">90% dentro do SLA - São Paulo</td>
              <td className="p-3 text-gray-700 text-center">50%</td>
              <td className="p-3 text-gray-700 text-center">90%</td>
              <td className="p-3 text-gray-700 text-center font-medium"></td>
              <td className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">On Track</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-3 text-gray-700">M.O.</td>
              <td className="p-3 text-gray-700">90% dentro do SLA - Outros municípios</td>
              <td className="p-3 text-gray-700 text-center">50%</td>
              <td className="p-3 text-gray-700 text-center">90%</td>
              <td className="p-3 text-gray-700 text-center font-medium"></td>
              <td className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">On Track</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-3 text-gray-700">M.O.</td>
              <td className="p-3 text-gray-700"><s>90% dentro do SLA - São Paulo s/ACSP</s></td>
              <td className="p-3 text-gray-700 text-center">50%</td>
              <td className="p-3 text-gray-700 text-center">90%</td>
              <td className="p-3 text-gray-700 text-center font-medium">-</td>
              <td className="p-3 text-center"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full font-medium">Excluído</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-3 text-gray-700">M.O.</td>
              <td className="p-3 text-gray-700">% de exigências/mês em até 10%</td>
              <td className="p-3 text-gray-700 text-center">7%</td>
              <td className="p-3 text-gray-700 text-center">10%</td>
              <td className="p-3 text-gray-700 text-center font-medium"></td>
              <td className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">On Track</span></td>
            </tr>

            {/* O3 - Terceiro objetivo */}
            <tr className="border-b border-gray-200 bg-gray-50">
              <td className="p-3 text-gray-700 align-top font-medium" rowSpan="2">O3</td>
              <td className="p-3 text-gray-700 align-top" rowSpan="2">Automatizar a célula de certificados na emissão e renovação dos arquivos para base de clientes BHub</td>
              <td className="p-3 text-gray-700">KR 3.1</td>
              <td className="p-3 text-gray-700">Emitir, no mínimo, 1000 certificados em 1H25</td>
              <td className="p-3 text-gray-700 text-center">-</td>
              <td className="p-3 text-gray-700 text-center">1000</td>
              <td className="p-3 text-gray-700 text-center font-medium">52</td>
              <td className="p-3 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded-full font-medium">Sob Risco</span></td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-3 text-gray-700">KR 3.2</td>
              <td className="p-3 text-gray-700">Automatizar os 3 principais processos da jornada</td>
              <td className="p-3 text-gray-700 text-center">0</td>
              <td className="p-3 text-gray-700 text-center">3</td>
              <td className="p-3 text-gray-700 text-center font-medium">1</td>
              <td className="p-3 text-center"><span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">On Track</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OKRTable;
