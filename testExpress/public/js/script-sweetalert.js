document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('inputButton');
    button.addEventListener('click', async function() {
        try {
            // Affiche la boîte de dialogue SweetAlert pour l'entrée utilisateur
            const { value: userInput } = await Swal.fire({
                title: 'Entrez une information',
                input: 'text',
                inputPlaceholder: 'Tapez quelque chose...'
            });

            // Vérifie si l'utilisateur a saisi quelque chose
            if (userInput) {
                // Envoie la donnée au serveur avec `fetch()`
                const response = await fetch('/dashboard/send-data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ data: userInput })
                });

                // Vérifie si la requête a réussi
                if (response.ok) {
                    const data = await response.json();
                    console.log('Succès:', data);
                    Swal.fire('Succès', 'Les informations ont été envoyées!', 'success');
                } else {
                    throw new Error('Erreur lors de l\'envoi des données');
                }
            }
        } catch (error) {
            console.error('Erreur:', error);
            Swal.fire('Erreur', 'Impossible d\'envoyer les informations', 'error');
        }
    });

    const button2 = document.getElementById('btnAjoutNomDepFixe');
    button2.addEventListener('click', async function() {
        try {
            // Affiche la boîte de dialogue SweetAlert pour l'entrée utilisateur
            const { value: userInput } = await Swal.fire({
                title: 'Entrez une information',
                input: 'text',
                inputPlaceholder: 'Tapez quelque chose...'
            });

            // Vérifie si l'utilisateur a saisi quelque chose
            if (userInput) {
                // Envoie la donnée au serveur avec `fetch()`
                const response = await fetch('/dashboard/send-data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ data: userInput })
                });

                // Vérifie si la requête a réussi
                if (response.ok) {
                    const data = await response.json();
                    console.log('Succès:', data);
                    Swal.fire('Succès', 'Les informations ont été envoyées!', 'success');
                } else {
                    throw new Error('Erreur lors de l\'envoi des données');
                }
            }
        } catch (error) {
            console.error('Erreur:', error);
            Swal.fire('Erreur', 'Impossible d\'envoyer les informations', 'error');
        }
    })
});
