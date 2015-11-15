"use strict"
require("colors")
const path          = require("path")

const commander     = require("commander")
    , ncp           = require("ncp")

commander
    .version(require("../../package.json").version)
    .command("bark")
    .option("-s, --stanky", "Set the stank level")
    .action((cmd, opts) => {
        const projectRoot = path.resolve("..")
        const localTree   = path.resolve("../src")

        ncp(localTree, projectRoot, () => {
            if (err) throw err
        })
    })

commander
    .parse(process.argv)
