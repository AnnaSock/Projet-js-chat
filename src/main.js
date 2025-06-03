import {createElement} from './components.js';
import {}from '../tailwind.config.js';
import './index.css';

// ---------------------$$$$$$$$$$$$$$$$$-------------------MA PAGE DE CONNEXION--------------------------$$$$$$$$$$$$$$$$$$---------------------------------------

const pageConnexion= createElement('div', {class: 'conteneur h-screen bg-[#FAFFCA] flex justify-center items-center'}, [

         createElement('form', {
                           class: "flex flex-col gap-[15px] pl-[10px] w-[450px] h-[300px] bg-white rounded-[15px] shadow ", id: "contact"
                        }, [
                                // createElement('i', {class:"fa-regular fa-comments text-[80px] text-black mt-[50px] ml-[160px]" }),
                                createElement('h1', {class: "font-bold text-3xl text-[#E0A75E] ml-[10px] mt-[30px] flex justify-center"}, "Se Connecter"),
                                createElement('small', {id: 'erreur-connexion', class: "block text-[1.5rem] ml-[10px] flex justify-center"}, ),
                                createElement('label',{class: "font-bold ml-[10px]"}, 'Entrer votre numéro :'),
                                createElement('input', {class: "w-[400px] h-[50px] bg-[#efefe8] rounded-[10px] pl-[10px] outline-none ml-[10px]", placeholder: "numero", id: "number"}),
                                createElement('button', {class: "bg-[#E0A75E] w-[300px] h-[50px] rounded-[10px] ml-[70px] text-black font-bold mt-[10px]",id: 'bouton', onclick : afficherApp}, 'Connexion')
                          ])
                          

                        ])
                        
                        
                        
                        
// ---------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$-------------------------MON APPLICATION--------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$------------------
                        
 const app = createElement("div", {
                                class: "conteneur bg-[#f9f7f5] h-screen flex",
                        },[
createElement('div', {
        class: "sidebar h-screen w-[100px] bg-[#efefe8] flex flex-col gap-4 items-center justify-center",
        id: "sidebar"
}, [
                createElement('button', {
                                class: "w-[80px] h-[70px] rounded-2xl border-4 border-[#f5e8cc] cursor-pointer  rounded-xl hover:bg-[#E0A75E] focus:bg-[#E0A75E] transition-colors",
                                onclick: afficherMessage

                                // onclick: afficherMessages
                                        }, [
                        createElement('i',{
                                class: "fa-solid fa-message",
                        }),
                        createElement('p',{}, 'Messages')
                                        ]),
                createElement('button', {
                        class: "w-[80px] h-[70px] border-4 border-[#f5e8cc] rounded-2xl cursor-pointer  rounded-xl hover:bg-[#E0A75E] focus:bg-[#E0A75E] transition-colors",
                        onclick: afficherGroupe
                }, [
                        createElement('i', {
                                class: "fa-solid fa-user-group"
                        }),
                        createElement('p',{}, 'Groupes')
                ]),
                createElement('button', {
                        class: "w-[80px] h-[70px] border-4 border-[#f5e8cc] rounded-2xl cursor-pointer  rounded-xl hover:bg-[#E0A75E] focus:bg-[#E0A75E] transition-colors",
                        onclick: afficherDiffusion
                        
                }, [
                        createElement('i', {
                                class: "fa-solid fa-arrows-turn-to-dots",
                        }),
                        createElement('p',{}, 'Diffusions')
                        
                        
                ]),
                createElement('button', {
                        class: "w-[80px] h-[70px] border-4 border-[#f5e8cc] rounded-2xl cursor-pointer  rounded-xl hover:bg-[#E0A75E] focus:bg-[#E0A75E] transition-colors",
                        onclick: afficherListeArchives
                }, [
                        createElement('i', {
                                class: 'fa-solid fa-box-archive',
                        }),
                        createElement('p',{}, 'Archives')
                        
                ]),
                createElement('button', {
                        id: "btNouveau",
                        class: "w-[80px] h-[70px] border-4 border-[#f5e8cc] rounded-2xl cursor-pointer  rounded-xl hover:bg-[#E0A75E] focus:bg-[#E0A75E] transition-colors",
                        onclick: afficherFormulaire,  
                }, [
                        createElement('i', {
                                class: 'a-solid fa-plus font-bold'
                        }),
                        createElement('p',{}, 'Nouveau')
                        
                ]), 
                
                createElement('button', {
                        id: "btNouveau",
                        class: "w-[80px] h-[70px] border-4 border-[#f5e8cc] rounded-2xl cursor-pointer  rounded-xl hover:bg-red-400 focus:bg-red-400 transition-colors",
                        onclick: deconnexion
                }, [
                        createElement('i', {
                                class: 'fas fa-right-from-bracket'
                        }),
                        createElement('p',{class: "text-xs"}, 'Deconnexion')
                        
                ])
        ]),
createElement('div', {
                class: "discussion h-screen w-[500px] bg-[#f9f7f5] flex flex-col gap-4 overflow-scroll ", 
                id: "discussion"
        }, [
                createElement('h1',{
                        class: "titre text-3xl ml-[10px]"
                },'Discussions'),
                createElement('input', {
                        placeholder: 'Recherche',
                        class: "w-[480px] h-[35px] rounded-2xl ml-[10px] pl-[10px] outline-none"
                }),
                createElement('div', {id: "div", class: "w-[450px] h-[900px]"},),
                
]),
        
        
createElement('div', {
                class: "centre h-screen w-[1200px]",
                id: "centre"
        }, 
                [

                createElement('div', {
                        class: "w-[1200px] h-[90px] border-b-2 border-white flex bg-[#efe7d7]",
                        id: "zone-bouton"
                }, [
                        
                        createElement('div', {class: "w-[900px] h-[90px] flex items-center",id: 'fantom'}),
                                
                                
                        createElement('div', {
                                class: "w-[300px] h-[90px] flex gap-3 justify-center items-center"
                        }, [
                
                                createElement('button', {
                                        class: "fa-solid fa-delete-left w-[50px] h-[50px] border-4 border-[#d96f1d] text-[#d96f1d] rounded-[30px]"
                                },),
                                createElement('button', {
                                        class: "fa-solid fa-box-archive w-[50px] h-[50px] border-4 border-[#837d73] text-[#837d73] rounded-[30px]",
                                        onclick: archiverContact
                                },),
                                createElement('button', {
                                        class: "fa-solid fa-square w-[50px] h-[50px] border-4 border-[#272117] rounded-[30px]"
                                },),
                                createElement('button', {
                                        class: "fa-solid fa-trash w-[50px] h-[50px] border-4 border-[#9e0007] text-[#9e0007] rounded-[30px]",
                                        // onclick: SupprimerContact

                                },)
                                
                        ]),
                ]),

                createElement('div', {class:"h-[710px] bg-[#efe7d7] overflow-scroll flex", id: "zone-message"},
                    [
                         createElement('div',{class: "border-2 border-black w-[250px] h-[100px] mt-[100px]"}, [
                                    createElement('div', {class: "w-250px h-[20px]  "}, 'Khadidiatou Fall'),
                                    createElement('div', {class: "w-250px h-[50px] ",} , 'T inquiete'),
                                    createElement('div', {class: "w-250px h-[30px]"}, [createElement("p", { class: "text-black" }, `12h 30`)])
                         ]),
                         createElement('div',{class: "border-2 border-black w-[250px] h-[100px] ml-[700px]"}, [
                                    createElement('div', {class: "w-250px h-[20px]  "}, 'Vous'),
                                    createElement('div', {class: "w-250px h-[50px] ",} , 'Salam comment tu vas'),
                                    createElement('div', {class: "w-250px h-[30px]"}, [createElement("p", { class: "text-black" }, `12h 30`)])


                         ])

                    ]
                ),


                createElement('div', {class:"h-[160px] flex items-center justify-center gap-2", id: "zone-envoi-message"}, [
                        
                        createElement('input', {
                                class: "bg-[#efefe8] w-[1000px] h-[60px] rounded-[10px] pl-[20px] outline-none",
                                id: 'input-message',
                        } ), 
                        createElement('button', {
                                id: 'btn-envoyer',
                                class: "fa-solid fa-arrow-right w-[60px] h-[60px] bg-[#E0A75E] rounded-[30px] text-[#FAFFCA]",
                                // onclick: envoyerMessage
                        }, )    
        
                        ])

                ])
]);
                                
                                
 document.body.appendChild(pageConnexion)
                                
                                
                                
                                
// --------------$$$$$$$$$$$$$$$$$$$$$$$--------------MES GLOBALS-------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$-------------------
const body= document.querySelector('body')
let contactSelectionne = null;
const heure = new Date().toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

let tabContact = [
                                        
    { 
        nom: 'Sock',
        prenom: 'Anna',
        numero: '781832623',
        id: "1"
    },

    { 
        nom: 'Sy',
        prenom: 'Anta',
        numero: '786556543',
        id: '2'
    }


];

let tabGroupe = [
    
    {
        nom: "mafia",
        membres: '2',
    },
    

];

let tabArchive = [];

let tabMessage=[
    {
            id: 1,
            envoyerPar: 1, 
            reçuPar: 2,
            contenu:"Salam, comment ça va",
            heure: "12:00",
    },

    {
            id: 2,
            envoyerPar: 2,
            reçuPar: 1,
            contenu:"ça va bien et toi",
            heure: "12:05",
    },

    {
            id: 3,
            envoyerPar: 1,
            reçuPar: 2,
            contenu:"Salam, comment ça va",
            heure: "12:00",
    }
]
// ---------------$$$$$$$$$$$$$$$$$$$--------------------MES FONCTIONS D'AFFICHAGES------------------------$$$$$$$$$$$$$$$$$$$$$$$$$-------------------------  

   

function afficherMessage() {
    div.innerHTML = '';

    tabContact.forEach((contact) => {
         const heure = new Date().toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
        const contactDiv = createElement('button', {
            class: "bg-[#efe7d7] w-[480px]  rounded-[10px] shadow h-[80px] flex m-2",
            onclick: () => {
                afficherContactScontour(contact.id);  
                contactSelectionne = contact;      
            }
        }, [
                createElement('div',{class: "w-[100px] h-[80px] flex  items-center"},[
                            createElement('div', {class: "w-[60px] h-[60px] bg-[#E0A75E] rounded-[30px] ml-2 text-[#FAFFCA] flex items-center justify-center text-[30px]"}, `${contact.prenom[0].toUpperCase()}${contact.nom[0].toUpperCase()}`),
                ]),
                createElement('div',{class: "w-[350px] h-[80px] flex  flex-col justify-center"},[
                            createElement('span', { class: "flex" }, `${contact.prenom} ${contact.nom}`),
                            createElement('div', {class: "flex"}, 'Dernier Message')

                ]),
                createElement('div',{class: "w-[100px] h-[80px] flex justify-center items-center"},[
                             createElement("p", { class: "text-black" }, `${heure}`),

                ])
           
        ]);


        div.appendChild(contactDiv);
    });
}


function afficherDiffusion() {
    div.innerHTML = '';

    tabContact.forEach((contact) => {
        const contactDiv = createElement('button', {
            class: "bg-[#efe7d7] w-[480px]  rounded-[10px] shadow h-[80px] flex m-2",
            onclick: () => {
                afficherContactScontour(contact.id);  
                contactSelectionne = contact;      
            }
        }, [
                createElement('div',{class: "w-[100px] h-[80px] flex justify-center items-center"},[
                            createElement('div', {class: "w-[60px] h-[60px] bg-[#E0A75E] rounded-[30px] ml-2 text-[#FAFFCA] flex items-center justify-center text-[30px]"}, `${contact.prenom[0].toUpperCase()}${contact.nom[0].toUpperCase()}`),
                ]),
                createElement('div',{class: "w-[350px] h-[80px] flex items-center"},[
                            createElement('span', { class: "ml-[10px] whitespace-nowrap" }, `${contact.prenom} ${contact.nom}`),

                ]),
                createElement('div',{class: "w-[100px] h-[80px] flex justify-center items-center"},[
                             createElement("input", {
                class: "w-[20px] h-[20px]  rounded-[5px] ",
                type: "checkbox",
                id: "checkbox"
                })
                ])
           
        ]);

        
        div.appendChild(contactDiv);
    });
}

function afficherContactScontour(id) {
    const fantom = document.getElementById('fantom');

    if (!fantom) {
        return;
    }
    fantom.innerHTML = '';

    const contactExiste = tabContact.find(contact => contact.id === id);

    if (contactExiste) {
        const contactDiv = createElement('button', { class: "flex justify-center items-center" }, [
            createElement('div', { class: "w-[60px] h-[60px] bg-[#FAFFCA] rounded-[30px] ml-2 text-[#E0A75E] flex items-center justify-center text-[30px]" }, `${contactExiste.prenom[0].toUpperCase() + contactExiste.nom[0].toUpperCase()}`),
            createElement('span', { class: "ml-[10px] whitespace-nowrap" }, `${contactExiste.prenom} ${contactExiste.nom}`),
        ]);
        fantom.appendChild(contactDiv);
    } 
    
}





function afficherGroupe() {
    const div = document.getElementById('div');
    div.innerHTML = '';

    const heure = new Date().toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    tabGroupe.forEach(groupe => {
        const groupeDiv = createElement('button', {
            class: "bg-[#efe7d7] w-[480px]  rounded-[10px] shadow h-[80px] flex m-2 "
        }, [
                createElement('div',{class: "w-[100px] h-[80px] flex justify-center items-center"},[
                            createElement('div', { class: "w-[60px] h-[60px] bg-[#E0A75E] rounded-[30px] ml-2 text-[#FAFFCA] flex items-center justify-center text-[30px]" }, `${groupe.nom[0].toUpperCase()}`),

                ]),
                createElement('div',{class: "w-[350px] h-[80px] flex items-center"},[
                            createElement('div', {}, `${groupe.nom}`),

                ]),
                createElement('div',{class: "w-[100px] h-[80px] flex justify-center items-center"},[
                             createElement("p", { class: "text-black" }, `${heure}`),
                ])

            // createElement('div', { class: "w-[60px] h-[60px] bg-[#747474] rounded-[30px] ml-2" }),

            // createElement('div', { class: "ml-[10px]" }, [
            //     createElement('div', {}, `${groupe.nom}`),
            //     createElement('div', { class: "whitespace-nowrap" }, `${groupe.membres.length} membres`)
            // ]),

            // createElement("p", { class: "text-[#40cd3f] ml-[150px]" }, `${heure}`),
        ]);

        div.appendChild(groupeDiv);
    });
}



function afficherFormulaire(){
const div= document.getElementById('div')

        div.innerHTML = ''

        const formulaire1= createElement('form', {
                                                   class: "flex flex-col gap-[15px] pl-[10px] w-[425px] h-[500px] bg-[#efe7d7] shadow rounded-[10px] ml-[35px]", id: "contact"
                                             }, [
                                                                 createElement('h1', {class: "font-bold text-3xl text-[#E0A75E] mt-[10px]"}, "Ajouter un contact"),
                                                                 createElement('small', {id: 'erreur-contact', class: " block text-[1rem]"}),
                                                                 createElement('label',{}, 'Entrer votre nom :'),
                                                                 createElement('input', {class: "w-[400px] h-[50px] rounded-[10px] pl-[10px] outline-none bg-[#f9f7f5]", placeholder: "Saisissez le nom", id: "nom"}),
                                                                 createElement('label',{}, 'Entrer votre prenom :'),
                                                                 createElement('input', {class: "w-[400px] h-[50px] rounded-[10px] pl-[10px] outline-none bg-[#f9f7f5]", placeholder: "Saisissez le prenom", id: "prenom"}),
                                                                 createElement('label', {}, 'Entrer votre numéro :'),
                                                                 createElement('input', {class: "w-[400px] h-[50px] rounded-[10px] pl-[10px] outline-none bg-[#f9f7f5]", placeholder: "Saisissez le numéro de téléphone", id: "numero"}),
                                                                 createElement('button', {class: "bg-[#E0A75E] w-[300px] h-[50px] rounded-[10px] ml-[55px] text-white font-bold",id: 'bouton', onclick: ajouterContact}, 'Ajouter')
                          ])
        // const formulaire2= createElement('form', {
        //                                            class: "flex flex-col gap-[15px] pl-[10px] mt-[30px]", id: "groupe"
        //                                      }, [
        //                                                          createElement('h1', {class: "font-bold text-3xl text-red-400" }, "Ajouter un groupe"),
        //                                                          createElement('small', {id: 'erreur-groupe', class: "block text-[1.5rem]"}),
        //                                                          createElement('label',{}, 'Entrer le nom du nouveau groupe :'),
        //                                                          createElement('input', {class: "w-[400px] h-[50px] rounded-[10px] pl-[10px] outline-none", placeholder: "nom du groupe", id: "nomGroupe"}),
        //                                                          createElement('label',{}, 'choisissez les membres :'),
        //                                                          createElement('div', {
        //                                                                 id: 'membre-section',
        //                                                                 class: "flex flex-col gap-2"
        //                                                                 })

        //  ])  

        //  const ajouter=   createElement('button', {class: "bg-gray-500 w-[300px] h-[50px] rounded-[10px] ml-[85px] mt-[30px] text-white font-bold",id: 'boutonG', onclick: ajouterGroupe,}, 'Creer le groupe')


         div.append(formulaire1)
         afficherListeMembres();
}


function afficherListeMembres() {
    const section = document.getElementById('membre-section');
    section.innerHTML = '';

    tabContact.forEach(contact => {
        const ligne = createElement('div', { class: "flex gap-4 items-center" }, [
            createElement('input', {
                type: "checkbox",
                name: "membres",
                value: contact.numero,
                class: "checkbox-membre"
            }),
            createElement('label', {}, contact.nom ),
            createElement('input', {
                type: "radio",
                name: "admin",
                value: contact.numero,
                class: "radio-admin"
            }),
            createElement('label', {}, "Admin")
        ]);
        section.appendChild(ligne);
    });
}


function afficherListeArchives() {
    div.innerHTML = '';

    if (tabArchive.length === 0) {
        const message = createElement('p', { class: "text-center text-red-400 text-xl mt-10" }, "Aucun contact archivé.");
        div.appendChild(message);
        return;
    }

    tabArchive.forEach((contact) => {
        const contactDiv = createElement('button', {
            class: "p-2 bg-white w-[480px] m-2 rounded-[45px] shadow h-[80px] flex items-center",
            onclick: () => afficherContactScontour(`${contact.id}`) 
        }, [
            createElement('div', {
                class: "w-[60px] h-[60px] bg-[#747474] rounded-[30px] ml-2 text-white flex items-center justify-center text-[30px]"
            }, `${contact.prenom[0].toUpperCase() + contact.nom[0].toLowerCase()}`),
            createElement('span', { class: "ml-[10px] whitespace-nowrap" }, `${contact.prenom} ${contact.nom}`),
            createElement('button', {
                     class: "bg-gray-500 text-red-400 px-2 py-1 rounded ml-[200px]",
                     onclick: () => desarchiverContact(contact.id)
                 }, "Désarchiver")
        ]);

        div.appendChild(contactDiv);
    });
}


function afficherChatt(utilisateur){
        return app
}

function afficherApp(event) {
    event.preventDefault(); 
    const numeroSaisi = document.getElementById('number').value.trim();
    const erreurConnexion = document.getElementById('erreur-connexion');

        effacerErreur(erreurConnexion)

                if (numeroSaisi === '') {
                        afficherErreur('le champ est vide !', erreurConnexion);
                        return;
                }
                 if (!/^\d+$/.test(numeroSaisi)) {
                        afficherErreur('Le numéro doit contenir uniquement des chiffres !', erreurConnexion);
                        return;
                }

    const utilisateurTrouve = tabContact.find(contact => contact.numero === numeroSaisi);
    if (utilisateurTrouve) {
        body.innerHTML=''
        const app= afficherChatt(utilisateurTrouve)
        document.body.appendChild(app)
    } else {
        afficherErreur( "Numéro invalide !", erreurConnexion);
    }

//     numeroSaisi.value=''
}

function deconnexion() {
    document.body.innerHTML = '';    
    document.body.appendChild(pageConnexion);
}



// --------------------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$---------MES FONCTIONS METIERS ET SERVICES-----------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$---------------------------







function ajouterContact(event) {
    event.preventDefault();
    
    const inputNom = document.getElementById('nom');
    const inputNumero = document.getElementById('numero');
    const inputPrenom = document.getElementById('prenom');
    const small = document.getElementById('erreur-contact');
    const nom = inputNom.value.trim();
    const numero = inputNumero.value.trim();
    const prenom = inputPrenom.value.trim();

    effacerErreur(small);

    if (nom === '' || prenom === '' || numero === '') {
        afficherErreur('Tous les champs sont obligatoires !', small);
        return;
    }
    if (/\d/.test(nom)) {
        afficherErreur('Le nom ne doit pas contenir de chiffres !', small);
        return;
    }
    if (/\d/.test(prenom)) {
        afficherErreur('Le prénom ne doit pas contenir de chiffres !', small);
        return;
    }
    if (!/^\d+$/.test(numero)) {
        afficherErreur('Le numéro doit contenir uniquement des chiffres !', small);
        return;
    }

    const numeroExiste = tabContact.some(contact => contact.numero === numero);
    if (numeroExiste) {
        afficherErreur('Ce numéro est déjà enregistré !', small);
        return;
    }

    const nouveauId = genererId();
    tabContact.push({ nom, prenom, numero, id: nouveauId });

    inputNom.value = '';
    inputNumero.value = '';
    inputPrenom.value = '';

    afficherErreur('Contact ajouté avec succès.', small);
    small.classList.remove('text-[#d96f1d]');
    small.classList.add('text-green-500');

    if (document.getElementById('membre-section')) {
        afficherListeMembres();
    }
}


function ajouterGroupe(event) {
    event.preventDefault();

    const inputGroupe = document.getElementById('nomGroupe');
    const smallGroupe = document.getElementById('erreur-groupe');
    const nomGroupe = inputGroupe.value.trim();
    const checkboxes = document.querySelectorAll('.checkbox-membre');
    const radios = document.querySelectorAll('.radio-admin');

    effacerErreur(smallGroupe);

    if (nomGroupe === '') {
        afficherErreur('Le nom du groupe est requis !', smallGroupe);
        return;
    }

    if (/\d/.test(nomGroupe)) {
        afficherErreur('Le nom du groupe ne doit pas contenir de chiffres !', smallGroupe);
        return;
    }

    const groupeExiste = tabGroupe.some(g => g.nom === nomGroupe);
    if (groupeExiste) {
        afficherErreur('Ce nom de groupe existe déjà !', smallGroupe);
        return;
    }

    const membres = [];
    checkboxes.forEach(cb => {
        if (cb.checked) {
            membres.push(cb.value);
        }
    });

    if (membres.length < 2) {
        afficherErreur('Un groupe doit avoir au moins 2 membres !', smallGroupe);
        return;
    }

    let admin = null;
    radios.forEach(radio => {
        if (radio.checked) {
            admin = radio.value;
        }
    });

    if (!admin) {
        afficherErreur('Veuillez sélectionner un admin pour le groupe !', smallGroupe);
        return;
    }

    if (!membres.includes(admin)) {
        afficherErreur("L'admin doit faire partie des membres sélectionnés !", smallGroupe);
        return;
    }

    tabGroupe.push({
        nom: nomGroupe,
        membres: membres,
        admin: admin
    });

    inputGroupe.value = '';
    checkboxes.forEach(cb => cb.checked = false);
    radios.forEach(rb => rb.checked = false);

    afficherErreur('Groupe ajouté avec succès.', smallGroupe);
    smallGroupe.classList.remove('text-[#d96f1d]');
    smallGroupe.classList.add('text-green-500');
}




function genererId(){
    if(tabContact.length === 0){
        return
    }
    let maxId = 0
    tabContact.forEach(contact =>{
                const nouveauIdContact = parseInt(contact.id, 10)
                if(!isNaN(nouveauIdContact) && nouveauIdContact>maxId){
                        maxId=nouveauIdContact
                }
    })
    return String(maxId + 1)
} 


function archiverContact() {
    if (!contactSelectionne) {
        alert("Veuillez sélectionner un contact d'abord !");
        return;
    }

    tabContact = tabContact.filter(c => c.id !== contactSelectionne.id);
    tabArchive.push(contactSelectionne);

    contactSelectionne = null;

    afficherContact();
    afficherErreur("Contact archivé avec succès", document.getElementById("erreur-contact")); // si tu as un <small> pour les messages
}


function desarchiverContact(id) {
    const index = tabArchive.findIndex(c => c.id === id);
    if (index !== -1) {
        const contact = tabArchive.splice(index, 1)[0];
        tabContact.push(contact);
        afficherListeArchives(); 
    }
}

function titreDynamique(titre){
    const h1= document.querySelector('.titre')
    if(h1){
        h1.textContent= titre.toUpperCase()
    }
}





// --------------------$$$$$$$$$$$$$$$$$$$$$$$--------------------GESTION DES ERREURS--------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--------------------------

function afficherErreur(message, tag) {
    tag.textContent = message;
    tag.classList.remove('text-green-500');
    tag.classList.add('text-red-500');
}

function effacerErreur(tag) {
    tag.textContent = '';
}

       
          


// palette couleur 
    // #973131
    // #E0A75E
    // #F9D689
    // #F5E7B2
































