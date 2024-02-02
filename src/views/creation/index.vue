<template>
  <div class="creation-main">
    <div class="desc-main">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          class="desc-input-group"
          id="input-group-1"
          label="标题:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="输入标题"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="desc-input-group"
          id="input-group-2"
          label="Your Name:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="desc-input-group"
          id="input-group-3"
          label="Food:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.food"
            :options="foods"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          class="desc-input-group"
          id="input-group-4"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">保存</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
    <div>
      <mavon-editor class="content-editor" v-model="value" />
    </div>
  </div>
</template>

<script>
export default {
  name: "creation-index",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.creation-main {
  height: 100%;
  margin: 4.5rem auto 0;
}

.desc-main {
  width: 100%;
}

.desc-input-group {
  width: 10rem;
  display: inline-block;
}

.content-editor {
  width: 100%;
  height: 80vh;
}
</style>
