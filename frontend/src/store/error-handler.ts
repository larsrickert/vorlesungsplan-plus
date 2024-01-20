import { defineStore } from "pinia";
import { CustomError, ErrorCode } from "../types/errors";

export const useErrorStore = defineStore("errorHandler", {
  state: () => {
    return {
      error: null as CustomError | null,
    };
  },
  actions: {
    handle(error: Error | CustomError): void {
      console.warn("Error handled by errorHandler store.", { error });

      const customError =
        error instanceof CustomError
          ? error
          : new CustomError(ErrorCode.UNKNOWN, "Unknown error", error);

      if (customError.expose) this.error = customError;
    },
    dismiss(): void {
      if (this.error) this.error = null;
    },
  },
});
