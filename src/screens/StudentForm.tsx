import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Save, UserPlus } from 'lucide-react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { motion } from 'motion/react';

export default function StudentForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    matricula: '',
    curso: '',
    email: '',
    telefone: '',
    cep: '',
    endereco: '',
    cidade: '',
    estado: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Dados do Aluno Salvos:', formData);
    alert('Aluno cadastrado com sucesso! (Verifique o console)');
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
        <h2 className="text-xl font-bold text-gray-900">Cadastro de Aluno</h2>
      </header>

      <main className="flex-1 p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <UserPlus size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Informações Pessoais</h3>
              <p className="text-xs text-gray-500">Preencha todos os campos obrigatórios</p>
            </div>
          </div>

          <div className="space-y-1">
            <Input label="Nome Completo" placeholder="Digite o nome" value={formData.nome} onChange={e => handleChange('nome', e.target.value)} />
            <div className="grid grid-cols-2 gap-4">
              <Input label="Matrícula" placeholder="000000" value={formData.matricula} onChange={e => handleChange('matricula', e.target.value)} />
              <Input label="Curso" placeholder="Ex: Engenharia" value={formData.curso} onChange={e => handleChange('curso', e.target.value)} />
            </div>
            <Input label="E-mail Acadêmico" placeholder="aluno@instituicao.edu" type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} />
            <Input label="Telefone" placeholder="(00) 00000-0000" value={formData.telefone} onChange={e => handleChange('telefone', e.target.value)} />
            
            <div className="pt-4 mb-4 border-t border-slate-100">
              <h3 className="font-bold text-gray-900 mb-4">Endereço</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <Input label="CEP" placeholder="00000-000" value={formData.cep} onChange={e => handleChange('cep', e.target.value)} />
                </div>
                <div className="col-span-2">
                  <Input label="Endereço" placeholder="Rua, Número..." value={formData.endereco} onChange={e => handleChange('endereco', e.target.value)} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input label="Cidade" placeholder="Cidade" value={formData.cidade} onChange={e => handleChange('cidade', e.target.value)} />
                <Input label="Estado" placeholder="UF" value={formData.estado} onChange={e => handleChange('estado', e.target.value)} />
              </div>
            </div>
          </div>

          <Button 
            className="mt-6"
            onClick={handleSave}
          >
            <Save size={20} />
            Salvar Cadastro
          </Button>
        </motion.div>
      </main>
    </div>
  );
}
