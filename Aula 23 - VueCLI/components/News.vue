<template>
    <div v-for="news in newsList.slice(0, num)" :key="news.id">
        <article>
            <h2>{{ news.title }}</h2>
            <p>Data: {{ news.date }}</p>
        </article>
    </div>
</template>

<style>
article {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
    }

    h2 {
        color: #fff;
        font-size: 1.5rem;
        margin: 0 0 10px 0;
        font-weight: 600;
    }

    p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.9rem;
        margin: 0;
    }
}

</style>

<script setup>
import { ref } from 'vue';

defineProps(['num']);

const newsList = ref([
    { id: 1, title: 'Notícia 1', date: '2025-01-01' },
    { id: 2, title: 'Notícia 2', date: '2025-01-02' },
    { id: 3, title: 'Notícia 3', date: '2025-01-03' },
]);
</script>