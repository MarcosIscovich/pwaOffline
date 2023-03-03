<script setup>
import { defineComponent, ref, onMounted } from "vue";
import { useQuasar } from "quasar";


const systemOnline = ref(false);

const $q = useQuasar();
const menuDrawer = ref(false);

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Ir a central Nuclear Embalse",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://www.na-sa.com.ar/",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

const openPage = () => {
  $q.dialog({
    title: "Funciona el boton",
    message: "Este boton si funciona",
  });

};

onMounted(() => {
  if (navigator.onLine) {
    console.log("Conectado a internet");
    systemOnline.value = true;
  }
  if (!navigator.onLine) {
    console.log("Sin conexión a internet");
    systemOnline.value = false;
  }
});
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div class="q-mt-md row">
          <q-fab
            v-model="menuDrawer"
            label="Actions"
            label-position="bottom"
            vertical-actions-align="left"
            color="white"
            icon="keyboard_arrow_down"
            direction="down"
            flat
          >
            <q-fab-action color="primary" to="newComponente" icon="mail" label="Nueva Rutina" />
            <q-fab-action color="secondary" to="/" icon="alarm" label="Editar Variable" />
            <q-fab-action color="orange" @click="openPage" icon="airplay" label="Buscar Rutina" />
            <q-fab-action color="accent" @click="openPage" icon="room" label="Nueva Medición" />
          </q-fab>
        </div>

        <q-toolbar-title> Nuevo sistema de Mediciones </q-toolbar-title>

        <div>
          <q-icon :name="systemOnline ? 'wifi' : 'mdi-wifi-off'" :color="systemOnline ? 'secondary' : 'negative'" size="4rem"/>
        </div>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Links de redireccionamiento </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
