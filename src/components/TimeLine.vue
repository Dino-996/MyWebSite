<template>
  <v-timeline
    side="end"
    density="comfortable"
    line-color="grey"
    line-thickness="1"
    line-inset="5"
    align="start"
    style="height: 300px"
  >
    <v-timeline-item
      size="small"
      fill-dot
      :dot-color="dotColor"
      :icon="iconTimeline"
    >
      <div>
        <div class="text-h6">{{ title }}</div>
        <p class="font-italic">
          {{ startDay }}/{{ startMonth }}/{{ startYear }} -
          <span v-if="isEmpty()">In corso</span>
          <span v-else>{{ endDay }}/{{ endMonth }}/{{ endYear }}</span>
        </p>
        <br />
        <p class="text-caption">
          {{ text }}
        </p>
        <br />
        <div class="d-flex flex-row align-end">
          <v-icon icon="mdi-office-building-outline" /> {{ name }}
        </div>
        <br />
        <div class="d-flex flex-row align-start">
          <v-icon icon="mdi-map-marker-radius" /> {{ position }}
        </div>
      </div>
      <br />
      <div>
        <v-btn
          :prepend-icon="buttonImg"
          size="small"
          variant="text"
          rounded="xl"
          role="link"
          :href="buttonEvent"
          target="_blank"
          >{{ button }}</v-btn
        >
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: { type: String, default: "Title", require: false },
  text: { type: String, default: "Text", require: false },
  startDay: { type: String, default: "startDay", require: false },
  startMonth: { type: String, default: "startMonth", require: false },
  startYear: { type: String, default: "startYear", require: false },
  endDay: { type: String, default: "endDay", require: false },
  endMonth: { type: String, default: "endMonth", require: false },
  endYear: { type: String, default: "endYear", require: false },
  dotColor: { type: String, default: "blue", require: false },
  iconTimeline: { type: String, default: "mdi-home", requie: false },
  name: { type: String, default: "scuola o lavoro", requie: false },
  position: { type: String, default: "posizione", requie: false },
  button: { type: String, require: false },
  buttonImg: { type: String, require: false },
  buttonEvent: { type: String, require: false },
});

function isEmpty(): boolean {
  if (props.endDay === "" || props.endMonth === "" || props.endYear === "") {
    return true;
  }
  return false;
}
</script>
