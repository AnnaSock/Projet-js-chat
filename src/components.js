    /**
 * cette fonction permet de creer un element html
 * @param {string} tag - une chaine (ex: 'div') 
 * @param {object} props - c'est un object qui contient les attributs(ex:{id:'formulaire'})
 * 
 * @returns 
 */
    export function createElement(tag,props={},content = ''){
      if(typeof tag !== 'string'){
          throw new Error('tu dois entrer une chaine')
      }
      const element =document.createElement(tag);
  
      //parcourons l'objet afin d'ajouter les elements a la balise
      for (const key in props) {
          if(key.startsWith('on')){
              if(typeof props[key]!=="function") {
                  throw new Error(`${props[key]} n'est pas une fonction`)
              }
              const eventName = key.slice(2).toLowerCase()
              element.addEventListener(eventName,props[key])
          }else if(key ==='class'||key ==='className' ){
              if(Array.isArray(props[key])){
                  element.setAttribute(key,props[key].join(' '))
              }
              else if (typeof props[key] === 'string'){
                  element.setAttribute(key,props[key])
              }
              else{
                  throw new Error(`${props[key]} doit etre un tableau ou une chaine`)
              }
          }
          else if(key ==='style'){
                  if(typeof props[key] !== 'object') {
                      throw new Error(`${props[key]} n'est pas un object`)
                  }
                  Object.assign(element.style , props[key])
          }else{
              element.setAttribute(key,props[key])
          }
  
        
      }
  
      // contenue de la balise
  
      if(Array.isArray(content)){
          content.forEach(el => {
          if(el instanceof  Node){
                  element.appendChild(el)
          }else{
                  element.appendChild(document.createTextNode(el))
                   
          }
          });
      }else{
          if(content instanceof  Node){
              element.appendChild(content)
          }else{
               element.appendChild(document.createTextNode(content))
          }
         
      }
  
      return element;
  }
  
 export   function createFragment(){
        const fragment = document.createDocumentFragment()
        fragment.addElement=function(tag,props={},content = ''){
            fragment.appendChild(createElement(tag,props ,content));
             return this  ; 
        }
        fragment.addNode=function(node){
            fragment.appendChild(node)
            return this;
        }
        return fragment;
    }