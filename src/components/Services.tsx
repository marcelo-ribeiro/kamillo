"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  BarChart3, 
  MousePointerClick, 
  TrendingUp, 
  Workflow, 
  SearchCode,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Causal AI Advertising",
    description: "Algoritmos de IA Causal para identificar correlações reais de vendas e otimizar o orçamento com precisão científica.",
    icon: SearchCode,
    color: "from-blue-600 to-indigo-500"
  },
  {
    title: "Growth Merges",
    description: "Fusão robusta de tecnologias e canais para criar ecossistemas de vendas inquebráveis e escaláveis.",
    icon: Workflow,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Elite Traffic Management",
    description: "Gestão estratégica de tráfego pago (Meta, Google, TikTok) para grandes investidores e marcas de elite.",
    icon: Target,
    color: "from-primary to-secondary"
  },
  {
    title: "Predictive ROI Engineering",
    description: "Modelagem estatística para prever o retorno sobre investimento antes mesmo de escalar as campanhas.",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "Marketing 360 Ecosystem",
    description: "Visão holística do tráfego à conversão, integrando CRM, dados e criativos de alta performance.",
    icon: BarChart3,
    color: "from-orange-500 to-amber-400"
  },
  {
    title: "Proprietary Growth System",
    description: "Acesso exclusivo à nossa metodologia proprietária de escala acelerada para empresas de alto nível.",
    icon: MousePointerClick,
    color: "from-red-500 to-rose-500"
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Nossas <span className="text-gradient">Especialidades</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Unimos tecnologia, dados e criatividade para entregar o maior retorno sobre investimento para o seu negócio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl group cursor-pointer relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -right-10 -top-10 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-[40px] transition-opacity duration-500`} />
              
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                <service.icon size={28} />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                {service.description}
              </p>
              
              <div className="mt-8 flex items-center gap-3 text-primary font-bold text-base uppercase tracking-widest group/btn cursor-pointer">
                Solicitar Análise <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
