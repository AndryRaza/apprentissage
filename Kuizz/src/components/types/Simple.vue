<template>
  <div class="flex flex-col mt-20 border-4 border-grey h-100 p-8">
    <div v-for="(q, id) in question" v-bind:key="id">
      <p class="text-center text-2xl">
        {{ q.question }}
        <br />
        <img class="mx-auto" v-bind:src="img" />
      </p>
      <div class="grid md:grid-cols-2 text-center gap-x-4 gap-y-32 mt-14">
        <span v-for="(prop, id) in q.propositions" v-bind:key="id">
          <p
            v-if="id === 0 || id === 3"
            class="bg-purple-600 bg-opacity-50 proposition"
          >
            {{ prop }}
          </p>
          <p v-else class="bg-purple-600 bg-opacity-25 proposition">
            {{ prop }}
          </p>
        </span>
      </div>
    </div>
    <p class="mt-5">Temps restant : {{ temps }} secondes</p>
  </div>
</template>

<script>
const questions = [
  {
    id: 0,
    question: "Quelle est la capitale de la Mongolie ?",
    propositions: ["Moscou", "Bagdad", "Je sais pas", "Saint-Denis"],
    reponse: 2,
  },
  {
    id: 1,
    question: "Combien font 2+2 ?",
    propositions: ["4", "2", "16", "10"],
    reponse: 0,
  },
  {
    id: 2,
    question: "Quel était le surnom de Sarkozy ?",
    propositions: ["Le nain", "Francois", "Je sais pas", "Adepte"],
    reponse: 3,
  },
  {
    id: 3,
    question: "Quel est la phrase préférée des Andry ?",
    propositions: [
      "On va manger",
      "Il faut bosser",
      "Comment ca va ?",
      "T'es con",
    ],
    reponse: 3,
  },
  {
    id: 4,
    question: "Test 4 ?",
    propositions: ["Prop 1", "Prop 2", "Prop 3", "Prop 4"],
    reponse: 3,
  },
];

import img from "../../assets/logo.png";

export default {
  name: "Simple",
  data() {
    return {
      img: img,
      questions: questions,
      number: 0,
      temps: 10,
    };
  },
  methods: {
    timer() {
      setInterval(() => {
        if (this.temps > 0) {
          this.temps--;
        } else {
          this.temps = 10;
        }
      }, 1000);
    }
  },
  computed: {
    question() {
      const self = this;
      const len = this.questions.length;
      setInterval(() => {
        tab = [];
        self.number = Math.floor(Math.random() * Math.floor(len));
      }, 10000);
      let id = this.number;
      let tab = this.questions.filter((item) => {
        return item.id === id;
      });
      return tab;
    },
  },
  created: function () {
    this.timer();
  },
};
</script>

<style scoped>
.proposition:hover {
  border: 2px solid rgb(139, 49, 199);
  cursor: pointer;
}
</style>