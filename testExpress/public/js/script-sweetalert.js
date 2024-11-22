document.addEventListener("DOMContentLoaded", function() {
    const button2 = document.getElementById('btnAjoutNomDepFixe');
    button2.addEventListener('click', async function() {
        /*try {
            const { value: userInput } = await Swal.fire({
                title: 'Nouvelle charge',
                input: 'text',
                inputPlaceholder: 'Ex: Eau, gaz, ...'
            });

            if (userInput) {
                const body = JSON.stringify({ name: userInput });
                console.log('Données envoyées:', body);

                const response = await fetch('/charges/addItem', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: body
                });

                // Logs pour déboguer
                console.log('Statut de la réponse:', response.status);
                const responseBody = await response.text();
                console.log('Réponse brute du serveur:', responseBody);

                if (response.ok) {
                    const data = JSON.parse(responseBody);
                    console.log('Réponse JSON:', data);
                    Swal.fire('Succès', 'Les informations ont été envoyées!', 'success');
                } else {
                    throw new Error(`Erreur: Statut ${response.status}`);
                }
            }
        } catch (error) {
            console.error('Erreur:', error.message);
            Swal.fire('Erreur', 'Impossible d\'envoyer les informations', 'error');
        }*/
    });
});

// Créer Item
const createItemCharge = async () => {
    try {
        const { value: userInput } = await Swal.fire({
            title: 'Nouvelle charge',
            input: 'text',
            inputPlaceholder: 'Ex: Eau, gaz, ...'
        });

        if (userInput) {
            const body = JSON.stringify({ name: userInput });
            console.log('Données envoyées:', body);

            const response = await fetch('/charges/addItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });

            // Logs pour déboguer
            console.log('Statut de la réponse:', response.status);
            const responseBody = await response.text();
            console.log('Réponse brute du serveur:', responseBody);

            if (response.ok) {
                const data = JSON.parse(responseBody);
                console.log('Réponse JSON:', data);
                Swal.fire('Succès', 'Les informations ont été envoyées!', 'success');
            } else {
                throw new Error(`Erreur: Statut ${response.status}`);
            }
        }
    } catch (error) {
        console.error('Erreur:', error.message);
        Swal.fire('Erreur', 'Impossible d\'envoyer les informations', 'error');
    }
}

const delItemCharge = async (btn) => {
    itemId = btn.id;
    Swal.fire({
        title: "Supprimer la charge?",
        text: "Vous ne pourrez pas revenir en arriere!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, supprimer!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Supprimé!",
                text: "La charge a été supprimée avec succes",
                icon: "success"
            });
        }
    });
}

