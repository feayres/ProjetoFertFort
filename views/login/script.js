function togglePassword() {
      const senhaInput = document.getElementById('senha');
      senhaInput.type = senhaInput.type === 'password' ? 'text' : 'password';
    }

    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value.trim();

      if (!email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
    });