<template>
  <div>
    <b-card class="test-graph">
      <b-embed
        type="iframe"
        aspect="16by9"
        src="http://localhost:5601/app/kibana#/visualize/edit/cf12cee0-c6e9-11ee-b375-d3f93e9e53dd?embed=true&_g=(refreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow%2Fw%2Cto%3Anow%2Fw))"
        allowfullscreen
      ></b-embed>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "trafficDashboard-index",
};
</script>

<style scoped>
.test-graph {
  height: 500px;
  width: 800px;
}
</style>
