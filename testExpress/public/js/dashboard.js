// CREATE
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

// DELETE
const delItemCharge = async (btn) => {
    try {
        const itemTab = btn.id.split('_');
        const itemType = itemTab[1] // voir quand il y aura plusieurs card
        const itemId = itemTab[2]

        // Afficher une boîte de dialogue pour confirmer la suppression
        const result = await Swal.fire({
            title: `Supprimer la charge avec id ${itemId}?`,
            text: "Vous ne pourrez pas revenir en arrière!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, supprimer!"
        });

        // Si l'utilisateur confirme
        if (result.isConfirmed) {
            const body = JSON.stringify({ id: itemId }); // Créer le corps de la requête
            console.log('Données envoyées:', body);

            const response = await fetch(`/charges/deleteItem/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });

            // Logs pour déboguer
/*            console.log('Statut de la réponse:', response.status);
            const responseBody = await response.text();
            console.log('Réponse brute du serveur:', responseBody);*/

            if (response.ok) {
                Swal.fire({
                    title: "Supprimé!",
                    text: "La charge a été supprimée avec succès",
                    icon: "success"
                });
            } else {
                throw new Error(`Erreur: Statut ${response.status}`);
            }
        }
    } catch (error) {
        console.error('Erreur:', error.message);
        Swal.fire('Erreur', 'Impossible de supprimer la charge', 'error');
    }
};

// UPDATE
const updateItemCharge = async (btn) => {
    try {
        const itemTab = btn.id.split('_');
        const itemType = itemTab[1];
        const itemId = itemTab[2];
        // recup data item via DOM TODO import db dans front?!
        const itemName = document.getElementById(`name_${itemId}`).textContent;
        const itemData = document.getElementById(`data_${itemId}`).textContent;

        // Afficher une boîte de dialogue avec deux champs d'entrée
        const { value: formValues } = await Swal.fire({
            title: "Modifier la charge",
            html: `
                    <input id="swal-input1" class="swal2-input" value="${itemName}">
                    <input id="swal-input2" class="swal2-input" value="${itemData}">
                `,

            focusConfirm: false,
            preConfirm: () => {
                const input1 = document.getElementById("swal-input1").value;
                const input2 = document.getElementById("swal-input2").value;

                if (!input1 || !input2) {
                    Swal.showValidationMessage('Tous les champs doivent être remplis!');
                    return null;
                }

                return { name: input1, data: input2 };
            }
        });

        if (formValues) {
            // Préparer le corps de la requête
            const body = JSON.stringify({
                id: itemId,
                ...formValues
            });

            console.log('Données envoyées:', body);

            // Effectuer la requête PATCH pour mettre à jour l'élément
            const response = await fetch(`/charges/updateItem/${itemId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });

            // Vérification de la réponse
            if (response.ok) {
                const responseData = await response.json();
                console.log('Réponse serveur:', responseData);

                Swal.fire({
                    title: "Succès!",
                    text: "La charge a été mise à jour avec succès",
                    icon: "success"
                });
            } else {
                const errorText = await response.text();
                throw new Error(`Erreur serveur: ${errorText}`);
            }
        }
    } catch (error) {
        console.error('Erreur:', error.message);
        Swal.fire('Erreur', 'Impossible de modifier la charge', 'error');
    }
};


// TITLE PAGE
const chooseDate = async () => {
    const { value: date } = await Swal.fire({
        title: "Select departure date",
        input: "date",
        didOpen: () => {
            const today = new Date().toISOString();
            Swal.getInput().min = today.split("T")[0]; // Définit la date minimale à aujourd'hui
        }
    });

    if (date) {
        Swal.fire("Departure date", date);
    }
};


// RECHARGER CARD CHARGE
function rechargerInclude(event) {
    if (event) {
        event.preventDefault(); // Empêche le comportement par défaut du navigateur
    }

    console.log("Début de la fonction rechargerInclude, envoi de la requête à /recharge-card-charges");

    fetch('/charges/recharge-card-charges')
        .then(response => {
            console.log(response.status);
            return response.text()
        })

        .then(html => {
            document.getElementById('contenu-charge').innerHTML = html;
        })
        .catch(error => {
            console.error('Erreur lors du rechargement de l\'include:', error);
        });
}