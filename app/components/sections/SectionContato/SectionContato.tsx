/* Task 2.9 — Página de Contato: formulário consultivo atualizado */
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./SectionContato.module.css";

type FormData = {
  nome: string;
  instituicao: string;
  especialidade: string;
  email: string;
  telefone: string;
  mensagem: string;
};

const especialidades = [
  "Medicina Estética",
  "Dermatologia",
  "Cirurgia Plástica",
  "Fisioterapia Estética",
  "Gestão Hospitalar / Clínica",
  "Outra especialidade",
];

export default function SectionContato() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  const [form, setForm] = useState<FormData>({
    nome: "", instituicao: "", especialidade: "", email: "", telefone: "", mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open("https://wa.me/556193322477", "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contato" ref={ref} className={styles.section} aria-labelledby="contato-title">
      {/* CTA strip */}
      <div className={styles.ctaStrip}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className={styles.ctaLabel} aria-hidden="true">Próximo passo</p>
            <h2 id="contato-title" className={styles.ctaTitle}>
              Pronto para uma conversa consultiva?
            </h2>
            <p className={styles.ctaSub}>
              Sem compromisso imediato. Um consultor AUREN irá compreender
              a realidade da sua clínica e apresentar as alternativas mais adequadas
              para o seu negócio — sem pressão, sem padronização.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form section */}
      <div className={styles.formSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.grid}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Info column */}
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>E-mail</span>
                <a href="mailto:contato@auren.com.br" className={styles.infoValue} id="contato-email">
                  contato@auren.com.br
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Telefone</span>
                <a href="tel:+556193322477" className={styles.infoValue} id="contato-phone">
                  (61) 9332-2477
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Localização</span>
                <span className={styles.infoValue}>QNA 30 Lote 06, Av. Comercial Norte<br />Taguatinga Norte — DF, CEP 72110-300</span>
              </div>
              <div className={styles.commitment}>
                <div className={styles.commitmentAccent} aria-hidden="true" />
                <p className={styles.commitmentText}>
                  Respondemos dentro de 1 dia útil. Todas as informações
                  compartilhadas são tratadas com absoluta confidencialidade.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formWrap}>
              {submitted ? (
                <motion.div
                  className={styles.success}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  role="alert"
                >
                  <span className={styles.successIcon} aria-hidden="true">✓</span>
                  <h3 className={styles.successTitle}>Mensagem recebida</h3>
                  <p className={styles.successText}>
                    Nosso time entrará em contato em até 1 dia útil para iniciar
                    a conversa. Obrigado por considerar a AUREN como sua parceira.
                  </p>
                </motion.div>
              ) : (
                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Formulário de contato consultivo AUREN"
                  id="contato-form"
                >
                  {/* Row 1: nome + instituição */}
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="nome" className={styles.label}>Nome completo *</label>
                      <input
                        id="nome" name="nome" type="text" required
                        className={styles.input}
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Dr. Nome Sobrenome"
                        autoComplete="name"
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="instituicao" className={styles.label}>Clínica de Estética / Empresa *</label>
                      <input
                        id="instituicao" name="instituicao" type="text" required
                        className={styles.input}
                        value={form.instituicao}
                        onChange={handleChange}
                        placeholder="Nome da clínica ou empresa"
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  {/* Row 2: especialidade + email */}
                  <div className={styles.row}>
                    <div className={styles.field}>
                      <label htmlFor="especialidade" className={styles.label}>Especialidade / Área *</label>
                      <select
                        id="especialidade" name="especialidade" required
                        className={styles.select}
                        value={form.especialidade}
                        onChange={handleChange}
                      >
                        <option value="">Selecionar...</option>
                        {especialidades.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="email" className={styles.label}>E-mail *</label>
                      <input
                        id="email" name="email" type="email" required
                        className={styles.input}
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  {/* Telefone */}
                  <div className={styles.field}>
                    <label htmlFor="telefone" className={styles.label}>Telefone / WhatsApp</label>
                    <input
                      id="telefone" name="telefone" type="tel"
                      className={styles.input}
                      value={form.telefone}
                      onChange={handleChange}
                      placeholder="+55 (61) 00000-0000"
                      autoComplete="tel"
                    />
                  </div>

                  {/* Mensagem */}
                  <div className={styles.field}>
                    <label htmlFor="mensagem" className={styles.label}>
                      Como podemos ajudar?
                    </label>
                    <textarea
                      id="mensagem" name="mensagem" rows={4}
                      className={styles.textarea}
                      value={form.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva brevemente sua necessidade ou contexto clínico..."
                    />
                  </div>

                  <button type="submit" className={styles.submit} id="contato-submit">
                    Iniciar conversa consultiva
                    <span aria-hidden="true"> →</span>
                  </button>

                  <p className={styles.disclaimer}>
                    Ao enviar, você concorda que a AUREN entre em contato para
                    fins exclusivamente consultivos.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
