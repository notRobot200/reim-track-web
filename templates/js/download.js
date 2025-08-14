document.getElementById('downloadMergedPDF').addEventListener('click', async () => {
  const spinner = document.getElementById('spinnerDownload');
  const btnText = document.getElementById('btnTextDownload');

  try {
    // Tampilkan spinner
    spinner.classList.remove('hidden');
    btnText.textContent = 'Downloading...';

    const response = await fetch('https://reim-track-1066934090892.us-central1.run.app/merge-latest');
    if (!response.ok) throw new Error('Gagal mengambil file');

    // Ambil data dalam bentuk Blob
    const blob = await response.blob();

    // Buat link download sementara
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'IPNET5_Finance.pdf'; // Nama file download
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    alert('Terjadi kesalahan saat mendownload file.');
    console.error(error);
  } finally {
    // Sembunyikan spinner
    spinner.classList.add('hidden');
    btnText.textContent = 'Finance Docs';
  }
});