// CREATE ITEM DEP FIXE
const createItem = async (btn) => {
    try {
        const itemTab = btn.id.split('_');
        const itemType = itemTab[1] // voir quand il y aura plusieurs card

        const { value: userInput } = await Swal.fire({
            title: `Nouvelle ${itemType}`,
            input: 'text',
            inputPlaceholder: 'Ex: ...'
        });

        if (userInput) {
            const body = JSON.stringify({ name: userInput });
            console.log('Données envoyées:', body);

            const response = await fetch(`/${itemType}s/addItem`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });

            const responseBody = await response.text();

            if (response.ok) {
                const data = JSON.parse(responseBody);
                Swal.fire('Succès', 'Les informations ont été envoyées!', 'success');
            } else {
                throw new Error(`Erreur: Statut ${response.status}`);
            }

            /*rechargerIncludeCharges()*/

        }
    } catch (error) {
        console.error('Erreur:', error.message);
        Swal.fire('Erreur', 'Impossible d\'envoyer les informations', 'error');
    }
}



// CREATE CHARGE
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

            const responseBody = await response.text();

            if (response.ok) {
                const data = JSON.parse(responseBody);
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
// CREATE CREDIT
const createItemCredit = async () => {
    try {
        const { value: userInput } = await Swal.fire({
            title: 'Nouvelle credit',
            input: 'text',
            inputPlaceholder: 'as, as, as, ...'
        });

        if (userInput) {
            const body = JSON.stringify({ name: userInput });
            const response = await fetch('/credits/addItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });

            const responseBody = await response.text();

            if (response.ok) {
                const data = JSON.parse(responseBody);
                Swal.fire('Succès', 'Les informations ont été envoyées!', 'success');
            } else {
                throw new Error(`Erreur: Statut ${response.status}`);
            }

            rechargerIncludeCredit()

        }
    } catch (error) {
        console.error('Erreur:', error.message);
        Swal.fire('Erreur', 'Impossible d\'envoyer les informations', 'error');
    }
}
// CREATE ASSURANCE
const createItemAssurance = async () => {
    try {
        const { value: userInput } = await Swal.fire({
            title: 'Nouvelle assurance',
            input: 'text',
            inputPlaceholder: 'as, as, as, ...'
        });

        if (userInput) {
            const body = JSON.stringify({ name: userInput });
            const response = await fetch('/assurances/addItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });

            const responseBody = await response.text();

            if (response.ok) {
                const data = JSON.parse(responseBody);
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
// CREATE ABONNEMENT
const createItemAbonnement = async () => {
    try {
        const { value: userInput } = await Swal.fire({
            title: 'Nouvelle Abonnement',
            input: 'text',
            inputPlaceholder: 'as, as, as, ...'
        });

        if (userInput) {
            const body = JSON.stringify({ name: userInput });
            const response = await fetch('/abonnements/addItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });

            const responseBody = await response.text();

            if (response.ok) {
                const data = JSON.parse(responseBody);
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


// UPDATE CHARGE
const updateItemCharge = async (btn) => {
    try {
        const itemTab = btn.id.split('_');
        const itemType = itemTab[1];
        const itemId = itemTab[2];
        // recup data item via DOM TODO import db dans front?!
        const itemName = document.getElementById(`name_charge${itemId}`).textContent;
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
// UPDATE CREDIT
const updateItemCredit = async (btn) => {
    try {
        const itemTab = btn.id.split('_');
        const itemType = itemTab[1];
        const itemId = itemTab[2];
        // recup data item via DOM TODO import db dans front?!
        const itemName = document.getElementById(`name_credit${itemId}`).textContent;
        const itemData = document.getElementById(`data_${itemId}`).textContent;

        // Afficher une boîte de dialogue avec deux champs d'entrée
        const { value: formValues } = await Swal.fire({
            title: "Modifier le credit",
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
            const response = await fetch(`/credits/updateItem/${itemId}`, {
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
// UPDATE ASSURANCE
const updateItemAssurance = async (btn) => {
    try {
        const itemTab = btn.id.split('_');
        const itemType = itemTab[1];
        const itemId = itemTab[2];
        // recup data item via DOM TODO import db dans front?!
        const itemName = document.getElementById(`name_assurance${itemId}`).textContent;
        const itemData = document.getElementById(`data_${itemId}`).textContent;

        // Afficher une boîte de dialogue avec deux champs d'entrée
        const { value: formValues } = await Swal.fire({
            title: "Modifier l assurance",
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
            const response = await fetch(`/assurances/updateItem/${itemId}`, {
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


// DELETE CHARGE
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
// DELETE CREDIT
const delItemCredit = async (btn) => {
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

            const response = await fetch(`/credits/deleteItem/${itemId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });

            if (response.ok) {
                Swal.fire({
                    title: "Supprimé!",
                    text: "La credit a été supprimée avec succès",
                    icon: "success"
                });
            } else {
                throw new Error(`Erreur: Statut ${response.status}`);
            }

            /*rechargerIncludeCredit()*/
        }
    } catch (error) {
        console.error('Erreur:', error.message);
        Swal.fire('Erreur', 'Impossible de supprimer la charge', 'error');
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


// RECHARGER CARD CHARGES
function rechargerIncludeCharge() {
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
// RECHARGER CARD CREDITS
function rechargerIncludeCredit() {
    fetch('/credits/recharge-card-credits')
        .then(response => {
            console.log(response.status);
            return response.text()
        })

        .then(html => {
            document.getElementById('contenu-credit').innerHTML = html;
        })
        .catch(error => {
            console.error('Erreur lors du rechargement de l\'include:', error);
        });
}