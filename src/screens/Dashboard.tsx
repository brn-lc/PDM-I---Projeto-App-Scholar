import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  UserRound, 
  BookOpen, 
  ClipboardList, 
  LogOut, 
  Bell,
  Search,
  GraduationCap
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'motion/react';

const menuItems = [
  { id: 'students', title: 'Alunos', icon: Users, color: 'bg-blue-500', path: '/register-student' },
  { id: 'teachers', title: 'Professores', icon: UserRound, color: 'bg-purple-500', path: '/register-teacher' },
  { id: 'subjects', title: 'Disciplinas', icon: BookOpen, color: 'bg-orange-500', path: '/register-subject' },
  { id: 'report', title: 'Boletim', icon: ClipboardList, color: 'bg-emerald-500', path: '/view-report' },
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white px-6 pt-12 pb-6 rounded-b-[40px] shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`} 
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Bem-vindo de volta</p>
              <h2 className="text-lg font-bold text-gray-900 truncate max-w-[150px]">{user?.email.split('@')[0]}</h2>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-gray-600">
              <Bell size={20} />
            </button>
            <button 
              onClick={logout}
              className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Pesquisar recursos..." 
            className="w-full bg-slate-100 border-none rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Menu Principal</h3>
        
        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(item.path)}
              className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-4 active:scale-95 transition-transform"
            >
              <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shadow-lg shadow-${item.color.split('-')[1]}-100`}>
                <item.icon size={28} color="white" />
              </div>
              <span className="font-bold text-gray-800">{item.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Quick Stats / Info */}
        <div className="mt-8 bg-blue-600 rounded-[32px] p-6 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-lg font-bold mb-1">Status do Semestre</h4>
            <p className="text-blue-100 text-sm mb-4">Você está com 85% de progresso</p>
            <div className="w-full bg-blue-500 h-2 rounded-full overflow-hidden">
              <div className="bg-white h-full w-[85%]" />
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-20 transform rotate-12">
            <GraduationCap size={120} />
          </div>
        </div>
      </main>
    </div>
  );
}
