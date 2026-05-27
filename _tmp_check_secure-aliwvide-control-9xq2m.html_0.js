
(async function(){
  if (sessionStorage.getItem('adminUnlocked') === 'yes') return;
  const pass = prompt('Enter admin password');
  if (!pass) { window.location.href = 'index.html'; return; }
  try {
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({password: pass})
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data.ok) {
      sessionStorage.setItem('adminUnlocked', 'yes');
      sessionStorage.setItem('dhikrAdminPassword', pass);
    } else {
      alert(data.error || 'Wrong password');
      window.location.href = 'index.html';
    }
  } catch (e) {
    alert('Password check failed. Please check API deployment.');
    window.location.href = 'index.html';
  }
})();
