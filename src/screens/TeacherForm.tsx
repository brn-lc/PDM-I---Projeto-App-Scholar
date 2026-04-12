import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Save, UserRound } from 'lucide-react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { motion } from 'motion/react';

export default function TeacherForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    titulacao: '',
    area: '',
    tempo: '',
    email: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Dados do Professor Salvos:', formData);
    alert('Professor cadastrado com sucesso!');
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
        <h2 className="text-xl font-bold text-gray-900">Cadastro de Professor</h2>
      </header>

      <main className="flex-1 p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
              <UserRound size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Dados Docentes</h3>
              <p className="text-xs text-gray-500">Informações profissionais do professor</p>
            </div>
          </div>

          <div className="space-y-1">
            <Input label="Nome Completo" placeholder="Digite o nome" value={formData.nome} onChange={e => handleChange('nome', e.target.value)} />
            <Input label="Titulação" placeholder="Ex: Mestre, Doutor..." value={formData.titulacao} onChange={e => handleChange('titulacao', e.target.value)} />
            <Input label="Área de Atuação" placeholder="Ex: Computação, Matemática" value={formData.area} onChange={e => handleChange('area', e.target.value)} />
            <Input label="Tempo de Docência (anos)" placeholder="Ex: 5" type="number" value={formData.tempo} onChange={e => handleChange('tempo', e.target.value)} />
            <Input label="E-mail Profissional" placeholder="professor@instituicao.edu" type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} />
          </div>

          <Button 
            className="mt-8 bg-purple-600 hover:bg-purple-700"
            onClick={handleSave}
          >
            <Save size={20} />
            Salvar Professor
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
