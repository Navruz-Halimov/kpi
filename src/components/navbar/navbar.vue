<template>
  <div class="navbar">
    <v-card class="overflow-hidden">
      <v-app-bar color="white" class="text-right" flat>
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn class="ml-3 mr-4" elevation="1" fab small @click="mini = !mini">
          <v-icon>
            {{ mini ? "mdi-format-list-bulleted" : "mdi-dots-vertical" }}
          </v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        :permanent="$vuetify.breakpoint.mdAndUp"
        :mini-variant.sync="mini"
        width="260"
        app
        class="rounded-0"
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>User Name</v-list-item-title>

          <v-btn
            icon
            @click.stop="mini = !mini"
            v-if="$vuetify.breakpoint.mdAndUp"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in navItem"
            :key="item.title"
            link
            @click="getActive(item.title)"
            :class="[
              'navbar__item',
              { 'navbar__active-link': isActive == item.title },
            ]"
          >
            <v-list-item-icon>
              <v-icon class="navbar__icon">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="navbar__title">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      isActive: "",
      navItem: [
        { title: "KPI", icon: "mdi-calculator-variant-outline" },
        { title: "Qobiliyatlar", icon: "mdi-alarm-light-outline" },
        { title: "Xodimlar", icon: "mdi-account-group-outline" },
        { title: "Xodimlarning baholari", icon: "mdi-account-star-outline" },
        { title: "Davr", icon: "mdi-sync" },
        { title: "Bo’limlar", icon: "mdi-home-group-plus" },
        { title: "Savollar", icon: "mdi-head-question-outline" },
        { title: "Natija", icon: "mdi-finance" },
        { title: "Tarix", icon: "mdi-clipboard-text-clock-outline" },
        { title: "Yordam", icon: "mdi-information-outline" },
      ],
      mini: false,
    };
  },
  methods: {
    getActive(id) {
      return (this.isActive = id);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  box-shadow: 0 0 25px 0 rgb(45 69 95 / 10%);
  border: none;
  font-family: "Muli", sans-serif;
  font-weight: bold;
  color: #272b41;
  transition: all 0.3s ease;
  &__item {
    transition: all 0.3s ease;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background-color: #4caf50 !important;
      transition: all 0.5s ease;
      min-height: 0 !important;
      width: 2px;
      height: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
    }
    &.navbar__active-link {
      .navbar__title,
      .navbar__icon {
        color: white !important;
      }
    }
    &:hover {
      transition: all 0.3s ease;
      .navbar__icon,
      .navbar__title {
        color: #5f63f2;
      }
      &.navbar__item::after {
        height: 100% !important;
      }
    }
  }
  &__title {
    font-size: 14px;
    line-height: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .v-list-item__icon {
    align-self: auto;
  }
  &__active-link {
    background-color: #6546d2;
  }
}
</style>
