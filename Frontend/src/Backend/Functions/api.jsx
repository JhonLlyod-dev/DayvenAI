

export default async function AskAI(prompt) {

  const reponse  = await fetch('https://us-central1-emerald-state-460408-h5.cloudfunctions.net/queryAI',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({prompt})
    }
  );

  const data = await reponse.json();
  console.log(data);
  if (data.response) {
    return data.response; // ✅ just the AI message string
  } else if (data.error) {
    return `❌ Error: ${data.error}`; // ✅ fallback error message
  } else {
    return '⚠️ Unknown response format.';
  }
}