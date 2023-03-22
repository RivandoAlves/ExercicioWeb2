const entrada = document.querySelector('#entrada');
const btn = document.querySelector('#btn');
const lista = document.querySelector('#lista');

btn.onclick = () =>{
    if(entrada.value != ''){
        alertify.confirm('Confirmação de cadastro','voce tem certerza que vai incluir o item: ' + entrada.value, 
        function(){
            let itemLista = document.createElement('li');
            let texto = document.createTextNode(entrada.value);
            let iconeOk = document.createElement('ion-icon');
            let iconeExcluir = document.createElement('ion-icon');
            iconeOk.classList.add('icone');
            iconeOk.setAttribute('name', 'checkmark-circle-outline');
            iconeExcluir.classList.add('icone2');
            iconeExcluir.setAttribute('name', 'close-circle-outline');
            itemLista.classList.add('criado');
            itemLista.append(texto);
            itemLista.append(iconeOk);
            itemLista.append(iconeExcluir);
            iconeExcluir.onclick = () =>{
                itemLista.remove(texto);
        }
            lista.append(itemLista);
            alertify.success('Item adicionado.');
            entrada.value = '';
        },
        function(){
            alertify.error('Item não inserido.');
            entrada.value = '';
        })

        
    }else{
        alertify.alert('Erro ao adicionar item','Voce precisa preencher este campo.')
    }
};