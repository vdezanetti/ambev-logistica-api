export default function handler(req, res) {
  res.status(200).json({
    nomeMotorista: "João Silva",
    kpis: {
      eficiencia: 96.5,
      caixasPlanejadas: 1250,
      caixasEntregues: 1206,
      devolucao: 3.5,
      tempoRota: 7.4
    },
    rotas: [
      { data: "15/05/2026", codigo: "R-ROTA-04", status: "Finalizada", entregues: 140, devolvidas: 2 },
      { data: "14/05/2026", codigo: "R-ROTA-04", status: "Finalizada", entregues: 155, devolvidas: 0 }
    ],
    iaInsight: "💡 IA: Atenção ao aumento de devoluções na Rota 04 hoje!"
  });
}