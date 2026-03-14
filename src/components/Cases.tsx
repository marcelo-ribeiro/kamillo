"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const cases = [
  {
    company: "E-commerce de Moda",
    result: "+312% em vendas",
    period: "90 dias",
    strategy: "Otimização de funil + Escala no Meta Ads",
    description: "Reestruturação completa das campanhas de catálogo e implementação de novo funil de retargeting.",
  },
  {
    company: "SaaS de Tecnologia",
    result: "-45% no CAC",
    period: "6 meses",
    strategy: "Google Search + Account Based Marketing",
    description: "Foco em palavras-chave de fundo de funil e segmentação precisa para leads B2B qualificados.",
  },
  {
    company: "Infoprodutores",
    result: "R$ 1.5M faturados",
    period: "Lançamento",
    strategy: "Estratégia multicanal (Meta/Google/TikTok)",
    description: "Gestão completa de tráfego para captação de leads e venda direta durante o carrinho aberto.",
  }
];

export function Cases() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Cases de <span className="text-gradient">Sucesso</span>
            </h2>
            <p className="text-white/60">
              Transformamos investimentos em ativos lucrativos. Confira alguns resultados reais de nossos clientes.
            </p>
          </div>
          <button className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-bold transition-all">
            Ver Todos os Cases
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl relative group"
            >
              <div className="absolute top-6 right-8 text-primary/20">
                <Quote size={40} />
              </div>
              
              <div className="mb-6">
                <p className="text-white/40 text-xs uppercase font-bold tracking-widest mb-2">{item.company}</p>
                <h3 className="text-3xl font-display font-bold text-white leading-tight mb-2">{item.result}</h3>
                <p className="text-primary font-bold text-sm">em {item.period}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-white/30 text-[10px] uppercase font-bold mb-1">Estratégia</p>
                  <p className="text-sm font-medium text-white/80">{item.strategy}</p>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <button className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 group/btn">
                  Ler Estudo de Caso <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
