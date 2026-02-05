// Se estiver usando módulos (NPM), importe loadHeartShape e tsParticles primeiro
async function loadParticles() {
  // 1. Carrega o suporte ao formato de coração
  await loadHeartShape(tsParticles);

  // 2. Configura e inicia o efeito
  await tsParticles.load("tsparticles", {
    particles: {
      number: { value: 50 }, // Quantidade de corações
      color: { value: "#ff0000" }, // Vermelho
      shape: {
        type: "heart" // Aqui define o formato baixado
      },
      opacity: { value: 0.5 },
      size: { value: 10 },
      move: {
        enable: true,
        speed: 2,
        direction: "top", // Corações subindo
        outModes: "out"
      }
    }
  });
}

loadParticles();
