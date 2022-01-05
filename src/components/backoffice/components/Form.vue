<template>
    <section class="ext-content">
       <form-header
         :title="title"></form-header>
    </section>
</template>
<script>
const FormHeader = () => import('./details/FormHeader.vue');

export default {
    components: {
        FormHeader
    },
    data() {
        return {
            title: "CC20211525250-Commande Magasin- Annulee(Inaction du point de vente)",
           actions: [
               {}
           ]
        }
    }
}
</script>
<style scoped>
  .ext-content
  {
        display: flex;
        flex-flow: column nowrap;
        overflow-y: auto;
    flex: 1;
    margin: 16px 1px 10px 1px;
  }
</style>