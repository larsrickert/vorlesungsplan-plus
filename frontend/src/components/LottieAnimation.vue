<template>
  <div ref="lottieRef" class="lottie-animation"></div>
</template>

<script lang="ts" setup>
import lottie, { type AnimationItem } from "lottie-web";
import { onMounted, ref, watchEffect } from "vue";

interface AnimationProps {
  animationData: unknown;
  speed?: number;
}

const props = withDefaults(defineProps<AnimationProps>(), {
  speed: 1,
});

const lottieRef = ref<HTMLElement | null>(null);
const animation = ref<AnimationItem | null>(null);

onMounted(() => {
  watchEffect(() => load(props.animationData));
  watchEffect(() => setSpeed(props.speed));
});

const load = (animationData: unknown) => {
  if (!lottieRef.value) return;

  animation.value?.destroy();
  animation.value = lottie.loadAnimation({
    container: lottieRef.value,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData,
  });

  if (props.speed) setSpeed(props.speed);
};

const setSpeed = (speed: number) => {
  animation.value?.setSpeed(speed);
};
</script>

<style lang="scss" scoped>
.lottie-animation {
  height: 100%;
  width: 100%;
}
</style>
