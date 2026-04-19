const form = document.getElementById('ticketForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const origin = form.origin.value.trim();
  const destination = form.destination.value.trim();
  const date = form.date.value;

  if (!name || !email || !phone || !origin || !destination || !date) {
    message.textContent = 'Semua field wajib diisi!';
    message.style.color = '#e63946';
    return;
  }

  // validasi email sederhana
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    message.textContent = 'Masukkan email yang valid.';
    message.style.color = '#e63946';
    return;
  }

  // validasi nomor telepon sederhana (angka dan minimal 7 karakter)
  const phoneRegex = /^[0-9]{7,}$/;
  if (!phoneRegex.test(phone)) {
    message.textContent = 'Masukkan nomor telepon yang valid (minimal 7 digit).';
    message.style.color = '#e63946';
    return;
  }

  message.style.color = '#2a9d8f';
  message.textContent = `Terima kasih, ${name}! Pendaftaran tiket liburan dari ${origin} ke ${destination} pada tanggal ${date} berhasil.`;

  form.reset();
});
