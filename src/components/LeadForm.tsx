"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 rounded-3xl text-center"
      >
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-display font-bold mb-4">Solicitação Recebida!</h3>
        <p className="text-black/60 mb-8">
          <strong>Kamillo Santos</strong> ou um de nossos especialistas da <strong>KJS Consultoria</strong> entrará em contato em até 24h para agendar seu diagnóstico.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-primary font-bold uppercase tracking-widest text-sm"
        >
          Enviar Outra Mensagem
        </button>
      </motion.div>
    );
  }

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-[#FDFDFD]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Pronto para escalar <br />
              <span className="text-gradient">suas vendas?</span>
            </h2>
            <p className="text-black/60 text-lg mb-10 leading-relaxed">
              Solicite um diagnóstico gratuito do seu negócio. Vamos analisar suas campanhas atuais e identificar o potencial de escala oculta na sua operação.
            </p>
            
            <div className="space-y-6">
              {[
                "Análise de Campanhas Atuais",
                "Mapeamento de Funil",
                "Plano de Escala 90 Dias",
                "Diagnóstico de CRO"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-black/80 font-medium">
                  <CheckCircle2 size={20} className="text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40 ml-1">Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Seu nome"
                    className="w-full bg-black/[0.03] border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40 ml-1">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    required
                    placeholder="seu@email.com"
                    className="w-full bg-black/[0.03] border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40 ml-1">Empresa</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Nome da sua empresa"
                    className="w-full bg-black/[0.03] border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40 ml-1">Faturamento Mensal</label>
                  <select 
                    required
                    className="w-full bg-black/[0.03] border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-black/40"
                  >
                    <option value="">Selecione uma faixa</option>
                    <option value="1">Até R$ 10k</option>
                    <option value="2">R$ 10k - R$ 50k</option>
                    <option value="3">R$ 50k - R$ 200k</option>
                    <option value="4">Acima de R$ 200k</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-black/40 ml-1">Mensagem (Opcional)</label>
                <textarea 
                  rows={4}
                  placeholder="Conte um pouco sobre seu desafio atual..."
                  className="w-full bg-black/[0.03] border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors text-black"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="btn-primary w-full text-sm sm:text-lg lg:text-xl px-4 py-4 lg:py-5 flex flex-col sm:flex-row gap-2"
              >
                <span className="whitespace-normal leading-tight">Solicitar Análise Estratégica</span>
                <Send size={18} className="flex-shrink-0" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
