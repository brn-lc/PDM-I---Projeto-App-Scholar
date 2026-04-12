import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Save, BookOpen } from 'lucide-react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { motion } from 'motion/react';

export default function SubjectForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    cargaHoraria: '',
    professor: '',
    curso: '',
    semestre: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Dados da Disciplina Salvos:', formData);
    alert('Disciplina cadastrada com sucesso!');
    navigate('/');
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
        <h2 className="text-xl font-bold text-gray-900">Cadastro de Disciplina</h2>
      </header>

      <main className="flex-1 p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Dados da Disciplina</h3>
              <p className="text-xs text-gray-500">Configuração curricular</p>
            </div>
          </div>

          <div className="space-y-1">
            <Input label="Nome da Disciplina" placeholder="Ex: Cálculo I" value={formData.nome} onChange={e => handleChange('nome', e.target.value)} />
            <Input label="Carga Horária (horas)" placeholder="Ex: 60" type="number" value={formData.cargaHoraria} onChange={e => handleChange('cargaHoraria', e.target.value)} />
            <Input label="Professor Responsável" placeholder="Nome do professor" value={formData.professor} onChange={e => handleChange('professor', e.target.value)} />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Curso" placeholder="Ex: SI" value={formData.curso} onChange={e => handleChange('curso', e.target.value)} />
              <Input label="Semestre" placeholder="Ex: 2024.1" value={formData.semestre} onChange={e => handleChange('semestre', e.target.value)} />
            </div>
          </div>

          <Button 
            className="mt-8 bg-orange-500 hover:bg-orange-600"
            onClick={handleSave}
          >
            <Save size={20} />
            Salvar Disciplina
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
