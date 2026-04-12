import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ClipboardList, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { motion } from 'motion/react';

interface Grade {
  disciplina: string;
  nota1: number;
  nota2: number;
  media: number;
  situacao: 'Aprovado' | 'Reprovado' | 'Em Exame';
}

const MOCK_GRADES: Grade[] = [
  { disciplina: 'Cálculo Diferencial', nota1: 8.5, nota2: 7.0, media: 7.75, situacao: 'Aprovado' },
  { disciplina: 'Estrutura de Dados', nota1: 9.0, nota2: 9.5, media: 9.25, situacao: 'Aprovado' },
  { disciplina: 'Física Teórica', nota1: 4.5, nota2: 5.0, media: 4.75, situacao: 'Reprovado' },
  { disciplina: 'Algoritmos II', nota1: 6.0, nota2: 6.5, media: 6.25, situacao: 'Em Exame' },
  { disciplina: 'Banco de Dados', nota1: 10, nota2: 8.5, media: 9.25, situacao: 'Aprovado' },
];

export default function ReportView() {
  const navigate = useNavigate();
  const [grades, setGrades] = useState<Grade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    const timer = setTimeout(() => {
      setGrades(MOCK_GRADES);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aprovado': return 'text-emerald-600 bg-emerald-50';
      case 'Reprovado': return 'text-red-600 bg-red-50';
      case 'Em Exame': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white px-6 pt-12 pb-6 flex items-center gap-4 sticky top-0 z-10 shadow-sm">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-gray-600 active:scale-90 transition-transform"
        >
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-xl font-bold text-gray-900">Boletim Acadêmico</h2>
      </header>

      <main className="flex-1 p-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 gap-4">
            <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
            <p className="text-gray-500 font-medium">Carregando notas...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Summary Card */}
            <div className="bg-blue-600 rounded-[32px] p-6 text-white shadow-lg shadow-blue-200 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-blue-100 text-sm">Média Geral</p>
                  <h3 className="text-4xl font-bold">7.45</h3>
                </div>
                <div className="bg-white/20 p-3 rounded-2xl">
                  <TrendingUp size={24} />
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span className="text-xs text-blue-50">4 Aprovadas</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <span className="text-xs text-blue-50">1 Reprovada</span>
                </div>
              </div>
            </div>

            <h3 className="font-bold text-gray-900 ml-1">Detalhamento por Disciplina</h3>
            
            {grades.map((grade, index) => (
              <motion.div
                key={grade.disciplina}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-bold text-gray-800 text-lg leading-tight max-w-[70%]">{grade.disciplina}</h4>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusColor(grade.situacao)}`}>
                    {grade.situacao}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-slate-50 p-3 rounded-2xl flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Nota 1</span>
                    <span className="text-lg font-bold text-gray-700">{grade.nota1.toFixed(1)}</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-2xl flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Nota 2</span>
                    <span className="text-lg font-bold text-gray-700">{grade.nota2.toFixed(1)}</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-2xl flex flex-col items-center border border-blue-100">
                    <span className="text-[10px] text-blue-400 font-bold uppercase">Média</span>
                    <span className="text-lg font-bold text-blue-700">{grade.media.toFixed(1)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
