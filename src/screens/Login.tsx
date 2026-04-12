import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { GraduationCap, Lock, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) newErrors.email = 'O e-mail é obrigatório';
    if (!password) newErrors.password = 'A senha é obrigatória';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    login(email);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-blue-100/50 p-8"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
            <GraduationCap size={40} color="white" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900">App Scholar</h1>
          <p className="text-gray-500 mt-2">Seu portal acadêmico inteligente</p>
        </div>

        <div className="space-y-2">
          <Input
            label="E-mail"
            placeholder="exemplo@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            error={errors.email}
            type="email"
          />
          
          <Input
            label="Senha"
            placeholder="••••••••"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors({ ...errors, password: undefined });
            }}
            error={errors.password}
            type="password"
          />
        </div>

        <Button 
          className="mt-8"
          onClick={handleLogin}
        >
          Entrar
        </Button>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Esqueceu sua senha? <span className="text-blue-600 font-semibold cursor-pointer">Recuperar</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
