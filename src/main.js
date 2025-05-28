import {createElement} from './components.js';
import {}from '../tailwind.config.js';
import './index.css';

const app = createElement("conteneur", {
        class: "bg-[#f9f7f5] h-screen flex",
},[
        createElement('sidebar', {
                class: "h-screen w-[100px] bg-[#efefe8] flex flex-col gap-4 items-center justify-center"
        }, [
            createElement('button', {
                    class: "w-[80px] h-[70px] rounded-2xl border-4 border-[#f5e8cc]",
                    onclick: afficherContact

                }, [
                        createElement('i',{
                                class: "fa-solid fa-message",
                        }),
                        createElement('p',{}, 'Messages')
                ]),
                createElement('button', {
                        class: "w-[80px] h-[70px] border-4 border-[#f5e8cc] rounded-2xl",
                        onclick: afficherGroupe
                }, [
                        createElement('i', {
                                class: "fa-solid fa-user-group"
                        }),
                        createElement('p',{}, 'Groupes')
                ]),
                createElement('button', {
                        class: "w-[80px] h-[70px] border-4 border-[#f5e8cc] rounded-2xl",
                }, [
                        createElement('i', {
                                class: "fa-solid fa-arrows-turn-to-dots",
                        }),
                        createElement('p',{}, 'Diffusions')
                        
                        
                ]),
                createElement('button', {
                        class: "w-[80px] h-[70px] border-4 border-[#f5e8cc] rounded-2xl"
                }, [
                        createElement('i', {
                                class: 'fa-solid fa-box-archive'
                        }),
                        createElement('p',{}, 'Archives')
                        
                ]),
                createElement('button', {
                        id: "btNouveau",
                        class: "w-[80px] h-[70px] border-4 border-[#f5e8cc] rounded-2xl",
                        onclick: afficherFormulaire1,
                }, [
                        createElement('i', {
                                class: 'a-solid fa-plus font-bold'
                        }),
                        createElement('p',{}, 'Nouveau')
                        
                ])
        ]),
        createElement('discussion', {
                class: "h-screen w-[500px] bg-[#f9f7f5] flex flex-col gap-4 overflow-scroll ", id: "discussion"
        }, [
                createElement('h1',{
                        class: "text-3xl ml-[10px]"
        },'Discussions'),
            createElement('input', {
                    placeholder: 'Recherche',
                    class: "w-[480px] h-[35px] rounded-2xl ml-[10px] pl-[10px] outline-none"
                }),
            createElement('div', {id: "div"}, []),
               
        ]),
createElement('centre', {
                                        class: "h-[850px] w-[1200px] bg-[#efe7d7]"
                                }, [
                                        createElement('div', {
                                                class: "w-[1200px] h-[90px] border-b-2 border-white flex gap-[480px] items-center"
                                        }, [
                                                createElement('div', {
                                                        class: "flex gap-3 items-center"
                                                }, [
                                                        createElement('div', {
                                                                class: "w-[60px] h-[60px] bg-[#747474] rounded-[30px] ml-2"
                                                        }, ),
                                                        createElement('div', {id: 'fantom'}, [
                                                                createElement('p', {}, 'Toto'),
                                                                createElement('div', {class: "whitespace-nowrap"}, 'Anna, Astou, Bamba, Khadidiatou, Oumy, Bakary')
                                                                
                                                        ]),
                                                        
                                                        
                                                ]),
                    createElement('div', {
                            class: "flex gap-3"
                    }, [
                            createElement('button', {
                                    class: "fa-solid fa-delete-left w-[50px] h-[50px] border-4 border-[#d96f1d] text-[#d96f1d] rounded-[30px]"
                                },),
                                createElement('button', {
                                        class: "fa-solid fa-box-archive w-[50px] h-[50px] border-4 border-[#837d73] text-[#837d73] rounded-[30px]",
                                        // onclick: archiverContact
                                },),
                                createElement('button', {
                                        class: "fa-solid fa-square w-[50px] h-[50px] border-4 border-[#272117] rounded-[30px]"
                                },),
                                createElement('button', {
                                      class: "fa-solid fa-trash w-[50px] h-[50px] border-4 border-[#9e0007] text-[#9e0007] rounded-[30px]"
                                },)
                                
                        ])
                ]),
                createElement('div', {
                        class: "  w-[1200px] h-[80px] mt-[770px] flex justify-center items-center gap-2"
                }, [
                        createElement('input', {
                                class: "bg-[#efefe8] w-[1000px] h-[60px] rounded-[10px] pl-[20px] outline-none"
                        } ), 
                        createElement('button', {
                                class: "fa-solid fa-arrow-right w-[60px] h-[60px] bg-[#40cd3f] rounded-[30px] text-white"
                        }, )    
                ])
        ]),
        
        
]);


document.body.appendChild(app)



  
function afficherErreur(message, tag) {
  const erreurElement = document.getElementById('erreur-message');
  erreurElement.textContent = message;
  tag.classList = 'border-2 border-red-500';
}

function effacerErreur(tag) {
  const erreurElement = document.getElementById('erreur-message');
  erreurElement.textContent = '';
  tag.classList = 'border-0';
}


function afficherFormulaire1(){
        div.innerHTML = ''

        const formulaire1= createElement('form', {
                                                   class: "flex flex-col gap-[15px] pl-[10px]", id: "contact"
                                             }, [
                                                                 createElement('h1', {class: "font-bold text-3xl"}, "Ajouter un contact"),
                                                                 createElement('label',{}, 'Entrer votre nom :'),
                                                                 createElement('input', {class: "w-[400px] h-[50px] rounded-[10px] pl-[10px] outline-none", placeholder: "Sock", id: "nom"}),
                                                                 createElement('small', {id: 'erreur-message', class: "hidden text-red-500"},),
                                                                 createElement('label',{}, 'Entrer votre prenom :'),
                                                                 createElement('input', {class: "w-[400px] h-[50px] rounded-[10px] pl-[10px] outline-none", placeholder: "Anna", id: "prenom"}),
                                                                 createElement('label', {}, 'Entrer votre numéro :'),
                                                                 createElement('input', {class: "w-[400px] h-[50px] rounded-[10px] pl-[10px] outline-none", placeholder: "+221781832623", id: "numero"}),
                                                                 createElement('button', {class: "bg-[#40cd3f] w-[300px] h-[50px] rounded-[10px] ml-[85px]",id: 'bouton', onclick: ajouterContact}, 'Ajouter')
                          ])
        const formulaire2= createElement('form', {
                                                   class: "flex flex-col gap-[15px] pl-[10px] mt-[30px]", id: "groupe"
                                             }, [
                                                                 createElement('h1', {class: "font-bold text-3xl"}, "Ajouter un groupe"),
                                                                 createElement('label',{}, 'Entrer le nom du nouveau groupe :'),
                                                                 createElement('input', {class: "w-[400px] h-[50px] rounded-[10px] pl-[10px] outline-none", placeholder: "nom du groupe", id: "nomGroupe"}),
                                                                 createElement('label',{}, 'choisissez les membres :'),
                                                                 createElement('select', {class:"w-[300px] h-[50px] border-black border-2 pl-[10px]"}, [
                                                                                createElement('option', {}, 'Membres'),
                                                                                tabContact.forEach(contact => {
                                                                                createElement('option', {}, `${contact.nom}`)
                                                                                })

                                                                 ], ),
                                                                 createElement('button', {class: "bg-[#40cd3f] w-[300px] h-[50px] rounded-[10px] ml-[85px]",id: 'boutonG', onclick: ajouterGroupe,}, 'Ajouter')

                          ])                  
        div.append(formulaire1, formulaire2)
}

        
          


let tabContact = [
    { nom: 'Sock', prenom: 'Anna', numero: '781832623' },
    { nom: 'Sock', prenom: 'Anna', numero: '781832623' }

];


const small= document.get
function ajouterContact(event) {
        event.preventDefault();
        const inputNom = document.getElementById('nom');
        const inputNumero = document.getElementById('numero');
        const inputPrenom = document.getElementById('prenom')
        const nom = inputNom.value.trim();
        const numero = inputNumero.value.trim();
        const prenom = inputPrenom.value.trim();

    if (nom !== '' && numero !== '' && prenom!== '') {
        tabContact.push({ nom,prenom,numero });

        inputNom.value = '';
        inputNumero.value = '';
        inputPrenom.value = ''
    } else {
        afficherErreur('les champs sont vides', small)
    }
}
const div= document.getElementById('div')

function afficherContact(){
        div.innerHTML = ''
        
        tabContact.forEach(contact => {
        const contactDiv= createElement('button',{class:"p-2 bg-white w-[480px] m-2 rounded-[45px] shadow h-[80px] flex items-center", onclick: discussion}, [
                 createElement('div', {class: "w-[60px] h-[60px] bg-[#747474] rounded-[30px] ml-2 text-white flex items-center justify-center text-[30px]"}, `${contact.prenom[0].toUpperCase() + contact.nom[0].toLowerCase()}`),
                 createElement('span', {class: "ml-[10px] whitespace-nowrap"}, `${contact.prenom} ${contact.nom}`),
                 createElement("input",{class: "w-[20px] h-[20px]  rounded-[5px] ml-[260px]", type: "checkbox"},)
        ])
        div.appendChild(contactDiv)
    })
}



let tabGroupe = ['mafia'];


function ajouterGroupe(e){
        e.preventDefault();
        
        const inputGroupe = document.getElementById('nomGroupe');
        const nomG = inputGroupe.value.trim();
        console.log(nomG)
        if (nomG !== '') {
            tabGroupe.push(nomG);
        } else {
                throw new Error('les champs sont vides')
        }
        inputGroupe.value = '';
}

function afficherGroupe(){
        div.innerHTML = ''
        const heure = new Date().toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
        });
        tabGroupe.forEach(groupe => {
                const groupeDiv= createElement('button',{class:"p-2 bg-white w-[480px] m-2 rounded-[45px] shadow h-[80px] flex items-center mt-[30px]"}, [
                        createElement('div', {class: "w-[60px] h-[60px] bg-[#747474] rounded-[30px] ml-2"},),
                         createElement('div', {id: 'fantom', class: "ml-[10px] "}, [
                                 createElement('div', {class: ""}, `${groupe}`),
                                tabContact.forEach(contact => {
                                  createElement('div', {class: "whitespace-nowrap"}, `${contact.nom}`)
                                })
                                ]),
                        createElement("p", {class: "text-[#40cd3f] ml-[150px]"}, `${heure}`),
                        createElement("div",{class: "w-[10px] h-[10px] bg-[#40cd3f] rounded-[5px] ml-[25px]"},)
                ])
                div.appendChild(groupeDiv)
        })
}

// const zone= document.getElementById('fantom')
function discussion(){

}




// function afficherMessage(){
//         div.classList.remove('hidden')
//         div.classList.add('block')
        
//         div.innerHTML = ''
        
//         tabContact.forEach(contact => {
//         const contactDiv= createElement('button',{class:"p-2 bg-white w-[480px] m-2 rounded-[45px] shadow h-[80px] flex items-center"}, [
//                  createElement('div', {class: "w-[60px] h-[60px] bg-[#747474] rounded-[30px] ml-2"},),
//                  createElement('div', {class: "ml-[10px]"}, `${contact.nom}`),
//                  createElement("p", {class: "text-[#40cd3f] ml-[10px]"}, "Date"),
//                  createElement("div",{class: "w-[10px] h-[10px] bg-[#40cd3f] rounded-[5px] ml-[5px]"},)
//         ])
//         div.appendChild(contactDiv)
//     })
// }
















