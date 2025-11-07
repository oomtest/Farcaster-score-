export default function handler(req, res) {
  const score = Math.floor(Math.random() * 100);

  // Retorna HTML com barra roxa animada
  const html = `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seu Score Social</title>
    <style>
      body {
        background: #0d0d0d;
        color: #fff;
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        padding: 20px;
      }
      h1 { color: #9d4edd; margin-bottom: 20px; }
      .score-bar {
        width: 300px;
        height: 25px;
        background: #333;
        border-radius: 12px;
        overflow: hidden;
        margin-top: 15px;
      }
      .score-fill {
        height: 100%;
        width: 0%;
        background: #9d4edd;
        text-align: right;
        line-height: 25px;
        padding-right: 10px;
        font-weight: bold;
        transition: width 1s ease-in-out;
      }
    </style>
  </head>
  <body>
    <h1>🎯 Seu Score Social</h1>
    <div class="score-bar">
      <div class="score-fill" id="scoreFill">0%</div>
    </div>

    <script>
      const fill = document.getElementById('scoreFill');
      setTimeout(() => {
        fill.style.width = ${score}%;
        fill.textContent = ${score} + '%';
      }, 100);
    </script>
  </body>
  </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
