<script setup>
import { date, useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";

const $q = useQuasar();

/* const variables = [
  {
    title: "variable 1",
    icon: "mdi-account-convert",
    value: "0",
  },
  {
    title: "VARIABLE 2",
    icon: "mdi-account-cowboy-hat",
    value: "0",
  },
  {
    title: "variable 3",
    icon: "mdi-air-horn",
    value: "0",
  },
  {
    title: "VARIABLE 4",
    icon: "mdi-alarm-bell",
    value: "0",
  },
  {
    title: "variable 5",
    icon: "mdi-alert-octagon",
    value: "0",
  },
  {
    title: "VARIABLE 6",
    icon: "mdi-alien",
    value: "0",
  },
  {
    title: "variable 7",
    icon: "mdi-alien-outline",
    value: "0",
  },
  {
    title: "VARIABLE 8",
    icon: "mdi-alien-outline",
    value: "0",
  },
  {
    title: "variable 9",
    icon: "mdi-alien",
    value: "0",
  },
  {
    title: "VARIABLE 10",
    icon: "mdi-alien-outline",
    value: "0",
  },
  {
    title: "variable 11",
    icon: "mdi-alien",
    value: "0",
  },
  {
    title: "VARIABLE 12",
    icon: "mdi-alien-outline",
    value: "0",
  },
  {
    title: "variable 13",
    icon: "mdi-alien",
    value: "0",
  },
  {
    title: "variable 14",
    icon: "mdi-alien-outline",
    value: "0",
  },
  {
    title: "variable 15",
    icon: "mdi-alien",
    value: "0",
  },
  {
    title: "variable 16",
    icon: "mdi-alien-outline",
    value: "0",
  },
  {
    title: "variable 17",
    icon: "mdi-alien",
    value: "0",
  },
  {
    title: "variable 18",
    icon: "mdi-alien-outline",
    value: "0",
  },
  {
    title: "variable 19",
    icon: "mdi-alien",
    value: "0",
  },
  {
    title: "variable 20",
    icon: "mdi-alien-outline",
    value: "0",
  },
  {
    title: "variable 21",
    icon: "mdi-alien",
    value: "0",
  },
  {
    title: "variable 22",
    icon: "mdi-alien-outline",
    value: "0",
  },
]; */

const variables = ref([
  { value: null },
  { value: null },
  { value: null },
  { value: null },
  { value: null },
  { value: null },
  { value: null },
  { value: null },
  { value: null },
  { value: null },
]);

const submitForm = () => {
  console.log(variables.value);

  /*  variables.value = [
    { valor: null },
    { valor: null },
    { valor: null },
    { valor: null },
    { valor: null },
    { valor: null },
    { valor: null },
    { valor: null },
    { valor: null },
    { valor: null },
  ]; */
};

const openVar = () => {
  Swal.fire({
    title: "Variables",
    html: `
    ${variables.value
      .map((variable, index) => {
        return `
        <div class="q-pa-md" style="max-width: 350px">
        <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label> varaible ${index + 1}</q-item-label>
          <q-item-label caption>valor = ${variable.valor}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
    `;
      })
      .join("")}
    `,
  });
};

onMounted(() => {
 

  navigator.onLine &&
    $q.notify({
      message: "Conectado a internet",
      color: "positive",
      icon: "mdi-check",
    });
});
</script>

<template>
  <q-responsive :ratio="1" class="row">
    <div class="col">
      <div class="flex justify-between">
        <q-btn @click="openVar" color="primary" label="Ver datos" />
        <q-btn @click="openVar" color="secondary" label="Recuperar Datos" />
      </div>

      <q-form ref="form" @submit="submitForm">
        <q-card>
          <q-card-section>
            <q-input v-for="(variable, index) in variables" :key="index" :label="'Variable ' + (index + 1)" v-model="variable.valor" type="number" />
          </q-card-section>
          <q-card-actions>
            <q-btn type="submit" color="primary" label="Guardar" />
            <q-btn type="reset" color="negative" label="Limpiar" />
          </q-card-actions>
        </q-card>
      </q-form>
    </div>

    <!-- <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="name" label="Usuario" hint="ingrese su usuario" lazy-rules />
        <q-input filled v-model="mediciones.variable2" label="variable 1"> </q-input>
        <q-input filled v-model="mediciones.variable3" label="variable 2"> </q-input>
        <q-input filled v-model="mediciones.variable4" label="variable 3"> </q-input>
        <q-input filled v-model="mediciones.variable5" label="variable 4"> </q-input>
        <q-input filled v-model="mediciones.variable6" label="variable 5"> </q-input>
        <q-input filled v-model="mediciones.variable7" label="variable 6"> </q-input>



        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form> -->
  </q-responsive>
</template>

<style scoped>
.cardClass {
  width: 800px;
}
</style>
