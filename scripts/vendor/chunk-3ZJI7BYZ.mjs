var e = class extends Error {
    constructor(...r) {
      let [s = "error", ...t] = r;
      (super(`server database: ${s}`, ...t), (this.name = "ServerDatabaseError"));
    }
  },
  o = class extends e {
    constructor(...r) {
      let [s = "error", ...t] = r;
      super(`unsupported: ${s}`, ...t);
    }
  };
export { e as a, o as b };
//# sourceMappingURL=chunk-3ZJI7BYZ.mjs.map
