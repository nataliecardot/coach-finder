<template>
  <div>
    <go-back />
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <p class="rate">${{ rate }}/hour</p>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p class="description">{{ description }}</p>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2 class="contact-intro">Interested? Reach out now!</h2>
          <base-button v-if="buttonIsVisible" link :to="contactLink"
            >Contact</base-button
          >
        </header>
        <!-- Note: contact is a child route of this coach details route; won't be loaded to replace what was on screen previously, but it instead needs a new, separate router view within parent component, and child components (here, the contact route) will be loaded in this router view -->
        <router-view></router-view>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  // Value for id is passed as a prop due to props: true for route path: '/coaches/:id' in router.js
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      if (this.$route.params) {
        return this.$route.path + '/contact';
      }
      return this.$route.path + '/' + this.id + '/contact';
    },
    buttonIsVisible() {
      if (this.$route.path.includes('contact')) {
        return false;
      }
      return true;
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      coach => coach.id === this.id
    );
  }
};
</script>

<style scoped>
.description {
  margin-bottom: 0;
  font-size: 1.2em;
}

.rate {
  margin-bottom: 0;
}

.contact-intro {
  font-size: 1.4em;
  font-weight: normal;
}
</style>
