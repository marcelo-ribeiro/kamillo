"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "CEO na NetStyle",
    content: "O sistema proprietário da KJS Consultoria mudou nossa visão sobre tráfego pago. Saímos de um ROI de 1.8 para 4.2 em apenas 4 meses com o suporte do Kamillo Santos.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Ana Beatriz",
    role: "Marketing Head na TechSolutions",
    content: "A IA Causal aplicada pela KJS Consultoria trouxe uma precisão de dados que eu nunca vi em 10 anos de mercado. O Kamillo Santos é um estrategista fora da curva.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "Felipe Andrade",
    role: "Fundador da GrowFast",
    content: "Não é apenas tráfego, é estratégia pura. A KJS Consultoria nos deu a segurança necessária para triplicar o investimento sem medo.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            Fator Confiança
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            O que dizem os <span className="text-gradient">Líderes de Mercado</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl relative group"
            >
              <Quote className="absolute top-6 right-8 text-black/5 group-hover:text-primary/20 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-black/70 italic mb-10 leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black/5 group-hover:border-primary/50 transition-colors">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-black text-sm">{t.name}</h4>
                  <p className="text-black/40 text-[10px] uppercase font-bold tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
