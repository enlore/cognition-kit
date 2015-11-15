#!/usr/bin/env node

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
        const projectRoot = path.resolve(process.cwd()) // dump it wherever the script is called from
        const localTree   = path.resolve(__dirname, "..", "project")

        console.log()

        ncp(localTree, projectRoot, (err) => {
            if (err) throw err
            console.log("Alright, now make something cool.".blue)
        })
    })

commander
    .parse(process.argv)
