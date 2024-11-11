import { useColorMode } from "@vueuse/core";
import { computed } from "vue";

type ThemeMode = "light" | "dark";

export const useThemeMode = () => {
  const colorMode = useColorMode();

  const setTheme = (theme: ThemeMode) => {
    colorMode.value = theme;
  };

  const toggleTheme = () => {
    const newTheme = colorMode.value === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return {
    theme: computed(() => colorMode.value),
    toggleTheme,
    setTheme,
  };
};
