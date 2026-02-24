// Removes Node 25+ experimental localStorage on the server to avoid bogus getItem errors.
if (typeof window === "undefined") {
  const current = (globalThis as any).localStorage;

  if (typeof current !== "undefined" && typeof current?.getItem !== "function") {
    try {
      delete (globalThis as any).localStorage;
    } catch (error) {
      // ignore deletion failures and overwrite instead
    }

    Object.defineProperty(globalThis, "localStorage", {
      value: undefined,
      writable: true,
      configurable: true,
      enumerable: true,
    });
  }
}