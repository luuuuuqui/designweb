<template>
    <fieldset>
        <form action="">
            <textarea v-model="textoNoticia"></textarea>
            <button @click="salvarNoticia">adicionar notícia</button>
        </form>
    </fieldset>
    <ol>
        <li v-for="noticia in noticias" :key="noticia.id">
            {{ noticia.id }} - {{ noticia.texto }} - {{ noticia.data }}
        </li>
    </ol>
</template>
<script setup>

    defineProps([ 'num' ]);
    import { ref, onMounted } from 'vue'

const noticias = ref([])

const carregarNoticias = () => {
  const dados = localStorage.getItem('lista_noticias')
  if (dados) {
    //json.parse – converte uma string em um obj js
    noticias.value = JSON.parse(dados)
  }
}

const removerNoticia = (id) => {
  // Filtra a lista removendo o ID selecionado
//filter cria uma nova lista com os itens que passarem no teste
// n => n.id !== id Se o ID desta notícia for diferente do ID que eu quero apagar, mantenha-a na lista. Se for igual, descarte-a.

  noticias.value = noticias.value.filter(n => n.id !== id)
  // Atualiza o localStorage com a nova lista
  localStorage.setItem('lista_noticias', JSON.stringify(noticias.value))
}

// Carrega as notícias assim que o componente é montado na tela
onMounted(() => {
  carregarNoticias()
})

const textoNoticia = ref('Texto notícia 1')

const salvarNoticia = () => {
  // 1. Recupera a lista atual do localStorage ou cria uma nova se estiver vazia
  const listaNoticias = JSON.parse(localStorage.getItem('lista_noticias') || '[]')

  // 2. Cria o novo objeto de notícia
  const novaNoticia = {
    id: Date.now(), // Gera um ID único baseado no timestamp
    texto: textoNoticia.value,
    data: new Date().toLocaleString('pt-BR') // Formata a data e hora atual
  }

  // 3. Adiciona a nova notícia ao array
  listaNoticias.push(novaNoticia)

  // 4. Salva de volta no localStorage convertendo para String
  localStorage.setItem('lista_noticias', JSON.stringify(listaNoticias))

  // Limpa o campo após salvar
  textoNoticia.value = ''
  carregarNoticias()
}

</script>