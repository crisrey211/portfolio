const fs = require("fs")
const chalk = require("chalk")

module.exports = {
  input: ["./src/**/*.js", "./src/**/*.jsx"],
  output: "./srcjee/i18ejej/translations/$LOCALE.json",
  options: {
    sort: true,
    removeUnusedKeys: false,
    debug: true,
    func: {
      list: ["i18next.t", "i18n.t"],
      extensions: [".js", ".jsx"],
    },
    trans: {
      component: "Trans",
      i18nKey: "i18nKey",
      defaultsKey: "defaults",
      extensions: [".js", ".jsx"],
      fallbackKey: function (ns, value) {
        return value
      },

      // https://react.i18next.com/latest/trans-component#usage-with-simple-html-elements-like-less-than-br-greater-than-and-others-v10.4.0
      supportBasicHtmlNodes: true, // Enables keeping the name of simple nodes (e.g. <br/>) in translations instead of indexed keys.
      keepBasicHtmlNodesFor: ["br", "strong", "i", "p"], // Which nodes are allowed to be kept in translations during defaultValue generation of <Trans>.

      // https://github.com/acornjs/acorn/tree/master/acorn#interface
      acorn: {
        ecmaVersion: 2020,
        sourceType: "module", // defaults to 'module'
      },
    },
    lngs: ["es", "en", "de"],
    defaultValue: "",
    resource: {
      /**
       * Where translation files should be loaded from
       **/
      loadPath: "./src/i18n/translations/{{lng}}.json",
      /**
       * Where translation files should be saved to
       **/
      savePath: "./src/i18n/translations/{{lng}}.json",
      jsonIndent: 2,
      lineEnding: "\n",
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    pluralSeparator: "_",
    contextSeparator: "_",
    contextDefaultValues: [],
    /**
     * Values surrounded by {{ }} are treated as params
     * e.g. "Hello {{ name }}" - "name" must be provided at runtime
     **/
    interpolation: {
      prefix: "{{",
      suffix: "}}",
    },
    metadata: {},
    allowDynamicKeys: false,
  },
  transform: function customTransform(file, enc, done) {
    "use strict"
    const parser = this.parser
    const content = fs.readFileSync(file.path, enc)
    let count = 0

    parser.parseFuncFromString(
      content,
      { list: ["i18next._", "i18next.__"] },
      (key, options) => {
        parser.set(
          key,
          Object.assign({}, options, {
            nsSeparator: false,
            keySeparator: false,
          })
        )
        ++count
      }
    )

    if (count > 0) {
      console.log(
        `i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(
          JSON.stringify(file.relative)
        )}`
      )
    }

    done()
  },
}
