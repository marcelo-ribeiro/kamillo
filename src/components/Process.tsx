"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    title: "Causal Diagnosis",
    description: "Utilizamos IA Causal para mapear o DNA do seu tráfego e identificar o 'porquê' por trás de cada conversão.",
    icon: Search,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Proprietary System Merges",
    description: "Integramos nossa tecnologia exclusiva KJS com sua infraestrutura para criar uma fusão de dados e escala.",
    icon: Lightbulb,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Elite Scale Execution",
    description: "Foco em Predictive ROI: execução agressiva e otimização em tempo real para maximizar a lucratividade.",
    icon: Rocket,
    color: "from-primary to-secondary"
  }
];

export function Process() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Como <span className="text-gradient">Funcionamos</span>
          </h2>
          <p className="text-black/70 max-w-2xl mx-auto text-xl leading-relaxed">
            Processo estruturado para garantir previsibilidade e lucratividade em cada real investido.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black/[0.05] -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white mb-8 border-8 border-white shadow-xl transition-transform duration-500 group-hover:scale-110 relative`}>
                  <step.icon size={40} />
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-display font-bold text-xl border-4 border-white">
                    {i + 1}
                  </div>
                </div>
                
                <h3 className="text-3xl font-display font-bold mb-6">{step.title}</h3>
                <p className="text-black/70 leading-relaxed text-lg">
                  {step.description}
                </p>

                {/* Mobile visual connection */}
                <div className="md:hidden mt-8 w-0.5 h-12 bg-black/10 last:hidden" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
