<template>
  <section class="mt-5">
      <h1 class="text-2xl text-center">Fin de la partie !</h1>
      <p class="text-2xl text-center"> Vous avez {{points}} pts. </p>
  </section>
</template>

<script>
export default {
    name: "Fin",
    data(){
        return {
            points: 0
        };
    },
    props:{
        reponses_utilisateur: [],
        reponses: []
    },
    methods: {
        calculpoint(tab1,tab2){
            for(var i=0;i<tab1.length;i++)
            {
                if (tab1[i] === tab2[i])
                {
                    this.points++;
                }
            }
        }
    },
    mounted: function(){
        this.calculpoint(this.reponses_utilisateur,this.reponses);
    }
};
</script>

<style scoped>
</style>