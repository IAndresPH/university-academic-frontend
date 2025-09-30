<template>
  <section class="page">
    <h1 class="title">Mi Perfil</h1>

    <div class="card">
      <h2>Datos personales</h2>
      <p><b>Documento:</b> {{ estudiante.documento }}</p>
      <p><b>Nombre:</b> {{ estudiante.nombre }}</p>
      <p><b>Email:</b> {{ estudiante.email }}</p>

      <h2>Datos académicos</h2>
      <p><b>Programa:</b> {{ estudiante.programa }}</p>
      <p><b>Semestre:</b> {{ estudiante.semestre }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const estudiante = reactive({
    documento: '1009',
    nombre: 'Paula Rincón',
    email: 'paula@uni.edu',
    programa: 'Ingeniería de Sistemas',
    semestre: 7,
  });
</script>

<style scoped>
  .page {
    max-width: 800px;
    margin: 20px auto;
    padding: 0 16px;
  }
  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .card {
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  }
</style>
