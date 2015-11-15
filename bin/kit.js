"use strict"
require("colors")
const path          = require("path")

const commander     = require("commander")
    , ncp           = require("ncp")

commander
    .version(require("../package.json").version)
    .command("setup")
    .option("-s, --stanky", "Set the stank level")
    .action((cmd, opts) => {
        const projectRoot = path.resolve(process.cwd())
        const localTree   = path.resolve(process.cwd(), "node_modules", "cognition-kit", "project")

        console.log()

        ncp(localTree, projectRoot, (err) => {
            if (err) throw err
            console.log("Alright, now make something cool.".blue)
        })
    })

commander
    .parse(process.argv)
